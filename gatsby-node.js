// Query all recipes from sanity
// Create template pages for each recipe

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all recipes
  const allRecipe = await graphql(`
    query {
      allSanityRecipe {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const recipes = allRecipe.data.allSanityRecipe.edges

  // Create page for each post.
  recipes.forEach(edge => {
    console.log(edge)

    createPage({
      path: `/${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/recipe-template.js`),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })
}
