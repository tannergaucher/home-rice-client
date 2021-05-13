const path = require("path")
const fs = require("fs")

const { YT_DESCRIPTIONS_DIRNAME } = require("./src/utils/constants")
const createYTDescription = require("./src/utils/create-yt-description")

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SanityCategory: {
      posts: {
        type: ["SanityPost"],
        resolve(source, _args, context, _info) {
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
        async resolve(source, _args, context, _info) {
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
        async resolve(source, _args, context, _info) {
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
      allSanityPost(
        filter: { draft: { eq: false } }
        sort: { fields: publishedAt, order: DESC }
      ) {
        edges {
          node {
            title
            subtitle
            draft
            youtubeVideoId
            videoMusicCredit
            _rawBody
            ingredients {
              ASIN
              text
            }
            gear {
              text
              ASIN
            }
            places {
              id
            }
            slug {
              current
            }
            mainImage {
              asset {
                fluid(maxWidth: 1200) {
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = allPosts.data.allSanityPost.edges

  fs.mkdir(path.join(__dirname, YT_DESCRIPTIONS_DIRNAME), err => {
    console.log(`err`, err)
  })

  posts.forEach((edge, index) => {
    if (edge.node.youtubeVideoId) {
      createYTDescription(edge)
    }

    // Get next and prev post from node. Don't just query next, prev BC not smart to draft bool
    const previousPost =
      index === posts.length - 1 ? null : posts[index + 1].node
    const nextPost = index === 0 ? null : posts[index - 1].node

    if (!edge.node.places.length) {
      createPage({
        path: `/${edge.node.slug.current}`,
        component: path.resolve(`./src/templates/post-template.js`),
        context: {
          slug: edge.node.slug.current,
          nextPost,
          previousPost,
        },
      })
    }

    if (edge.node.places.length === 1) {
      createPage({
        path: `/${edge.node.slug.current}`,
        component: path.resolve(`./src/templates/post-with-place.js`),
        context: {
          slug: edge.node.slug.current,
          nextPost,
          previousPost,
        },
      })
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
