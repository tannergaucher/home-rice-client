import React from "react"

import { recipe } from "../utils/mocks"
import { AWS_ASSOCIATE_ID } from "../utils/constants"
import { Layout, SEO, IngredientsForm, Ingredient } from "../components"

export default function RecipeTemplate({ data, location }) {
  console.log(recipe)

  return (
    <Layout>
      <SEO
        title={`${data.sanityRecipe.title} | ${recipe.category}`}
        description={recipe.subHeading}
      />
      <article className="page padding container">
        <div className="responsive-container">
          <iframe
            className="responsive-iframe"
            id="player"
            type="text/html"
            src={`http://www.youtube.com/embed/${data.sanityRecipe.youtubeVideoId}?enablejsapi=1&origin=http:/localhost:8000`}
            frameborder="0"
          ></iframe>
        </div>
        <br />
        <h1>{data.sanityRecipe.title}</h1>
        <h2 className="text--md"> {data.sanityRecipe.subtitle}</h2>
        <hr />
        <section>
          <h2>Ingredients:</h2>
          <br />
          <IngredientsForm>
            <ul style={{ listStyleType: `none`, paddingLeft: `0` }}>
              {data.sanityRecipe.ingredients.map(({ ingredient }, i) => (
                <a
                  key={ingredient.ASIN}
                  href={`https://www.amazon.com/gp/product/${ingredient.ASIN}/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=${ingredient.ASIN}&linkCode=as2&tag=${AWS_ASSOCIATE_ID}`}
                  target="_blank"
                >
                  <Ingredient
                    text={ingredient.text}
                    ASIN={ingredient.ASIN}
                    // @HACK
                    quantity={1}
                    // quantity={ingredient.quantity}
                    order={i + 1}
                  />
                </a>
              ))}
            </ul>
          </IngredientsForm>
        </section>
      </article>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query RECIPE_QUERY($slug: String!) {
    sanityRecipe(slug: { current: { eq: $slug } }) {
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
    }
  }
`
