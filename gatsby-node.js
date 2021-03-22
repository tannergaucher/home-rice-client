const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allVideo = await graphql(`
    query {
      allSanityRecipe {
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

  const videos = allVideo.data.allSanityRecipe.edges

  videos.forEach(edge => {
    if (process.env.NODE_ENV === "development") {
      createPage({
        path: `/${edge.node.slug.current}`,
        component: path.resolve(`./src/templates/video-template.js`),
        context: {
          slug: edge.node.slug.current,
        },
      })
    }

    if (process.env.NODE_ENV === "production") {
      if (edge.node.draft === false) {
        createPage({
          path: `/${edge.node.slug.current}`,
          component: path.resolve(`./src/templates/video-template.js`),
          context: {
            slug: edge.node.slug.current,
          },
        })
      }
    }
  })
}
