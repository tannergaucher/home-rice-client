import gql from "graphql-tag"

export const RECIPE_FRAGMENT = `
      title
      subtitle
      youtubeVideoId
      ingredients {
        ingredient {
          id
          text
          ASIN
          quantity
        }
      }
`
