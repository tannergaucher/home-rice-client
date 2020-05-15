const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //
  const allPostsQuery = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  allPostsQuery.data.allMdx.edges.forEach(edge => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`./src/templates/recipe-template.js`),
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
