const path = require("path")

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SanityCategory: {
      posts: {
        type: ["SanityPost"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            type: "SanityPost",
            query: {
              filter: {
                category: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          })
        },
      },
    },
    SanityIngredient: {
      posts: {
        type: ["SanityPost"],
        async resolve(source, args, context, info) {
          const ingredientsQuery = await context.nodeModel.runQuery({
            type: "SanityPost",
            query: {
              filter: {
                ingredients: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          })

          return ingredientsQuery
        },
      },
    },
    SanityGear: {
      posts: {
        type: ["SanityPost"],
        async resolve(source, args, context, info) {
          const gearQuery = await context.nodeModel.runQuery({
            type: "SanityPost",
            query: {
              filter: {
                gear: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          })

          return gearQuery
        },
      },
    },
  }

  createResolvers(resolvers)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allPosts = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            title
            subtitle
            draft
            ingredients {
              ASIN
              text
            }
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const posts = allPosts.data.allSanityPost.edges

  posts.forEach(edge => {
    if (process.env.NODE_ENV === "development") {
      createPage({
        path: `/${edge.node.slug.current}`,
        component: path.resolve(`./src/templates/post-template.js`),
        context: {
          slug: edge.node.slug.current,
        },
      })
    }

    if (process.env.NODE_ENV === "production") {
      if (edge.node.draft === false) {
        createPage({
          path: `/${edge.node.slug.current}`,
          component: path.resolve(`./src/templates/post-template.js`),
          context: {
            slug: edge.node.slug.current,
          },
        })
      }
    }
  })

  const allIngredients = await graphql(`
    query {
      allSanityIngredient {
        edges {
          node {
            text
            _id
            slug {
              current
            }
            posts {
              _id
              title
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)

  const ingredients = allIngredients.data.allSanityIngredient.edges

  ingredients.forEach(edge => {
    if (edge.node.slug) {
      createPage({
        path: `/ingredients/${edge.node.slug.current}`,
        component: path.resolve(`./src/templates/ingredient-template.js`),
        context: {
          slug: edge.node.slug.current,
        },
      })
    }
  })
}
