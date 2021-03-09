const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allVideo = await graphql(`
    query {
      allSanityVideo {
        edges {
          node {
            title
            subtitle
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

  const videos = allVideo.data.allSanityVideo.edges

  videos.forEach(edge => {
    createPage({
      path: `/${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/video-template.js`),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })
}
