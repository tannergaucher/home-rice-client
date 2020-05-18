import { useStaticQuery, graphql } from "gatsby"

export const useAllRecipes = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query USE_ALL_RECIPES {
        allMdx(
          filter: { frontmatter: { draft: { eq: false } } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              ...PostFragment
            }
          }
        }
      }
    `
  )
  return allMdx
}
