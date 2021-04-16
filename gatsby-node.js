const path = require("path")
const fs = require("fs")

const getAmazonAffiliateLink = require("./src/utils/get-amazon-affiliate-link")

const YT_DESCRIPTIONS_DIRNAME = "_autogen-yt-descriptions"

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

  // mainImage.asset.srcSet / sizes because gatsbySanityImage fragment not working
  const allPosts = await graphql(`
    query {
      allSanityPost(sort: { fields: publishedAt, order: DESC }) {
        edges {
          next {
            id
            title
            slug {
              current
            }
            mainImage {
              asset {
                fluid {
                  srcSet
                  sizes
                }
              }
            }
          }
          previous {
            id
            title
            slug {
              current
            }
            mainImage {
              asset {
                fluid {
                  srcSet
                  sizes
                }
              }
            }
          }
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
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const posts = allPosts.data.allSanityPost.edges

  // create YT video dir
  fs.mkdir(path.join(__dirname, YT_DESCRIPTIONS_DIRNAME), err => {
    console.log(`err`, err)
  })

  posts.forEach(edge => {
    // Create YT video descriptions
    if (edge.node.youtubeVideoId) {
      const stream = fs.createWriteStream(
        `${YT_DESCRIPTIONS_DIRNAME}/${edge.node.slug.current}.txt`,
        {
          flags: "a",
        }
      )

      // subtitle should be named description
      stream.write(`${edge.node.title}. ${edge.node.subtitle}`)
      stream.write("\n")
      stream.write("\n")

      // TODO: check for ingredients length
      stream.write("*INGREDIENTS")
      stream.write("\n")

      edge.node.ingredients.forEach(ingredient => {
        if (ingredient.ASIN) {
          stream.write(
            `${ingredient.text} ${getAmazonAffiliateLink(ingredient.ASIN)}`
          )
          stream.write("\n")
        }
      })

      if (edge.node.gear.length) {
        stream.write("\n")
        stream.write("*GEAR")
        stream.write("\n")

        edge.node.gear.forEach(gear => {
          stream.write(`${gear.text} ${getAmazonAffiliateLink(gear.ASIN)}`)
          stream.write("\n")
        })
      }

      // View full post
      stream.write("\n")
      stream.write(`VIEW FULL INGREDIENTS LIST`)
      stream.write("\n")
      stream.write(`https://homerice.app/${edge.node.slug.current}`)

      // Post body
      function toPlainText(blocks = []) {
        return blocks
          .map(block => {
            if (block._type !== "block" || !block.children) {
              return ""
            }

            return block.children.map(child => child.text).join("")
          })

          .join("\n\n")
      }

      // Write post body
      if (edge.node._rawBody) {
        stream.write("\n")
        stream.write("\n")

        const postText = toPlainText(edge.node._rawBody)

        stream.write(postText)
      }

      // Write Music credit
      if (edge.node.videoMusicCredit) {
        stream.write("\n")
        stream.write("\n")
        stream.write(edge.node.videoMusicCredit)
      }

      stream.write("\n")
      stream.write("\n")
      stream.write("*NOTE")
      stream.write("\n")
      stream.write(
        "Amazon affiliate links. This means the channel may earn a small commission from Amazon, at absolutely no extra cost to you."
      )

      stream.end()
    }

    if (process.env.NODE_ENV === "development") {
      createPage({
        path: `/${edge.node.slug.current}`,
        component: path.resolve(`./src/templates/post-template.js`),
        context: {
          slug: edge.node.slug.current,
          nextPost: edge.previous,
          previousPost: edge.next,
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
            nextPost: edge.previous,
            previousPost: edge.next,
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
      // make short link

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
