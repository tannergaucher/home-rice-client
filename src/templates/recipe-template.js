import React from "react"
import BlockContent from "@sanity/block-content-to-react"

import { recipe } from "../utils/mocks"
import { Layout, SEO, IngredientsForm, Ingredient } from "../components"

export default function RecipeTemplate({ data }) {
  return (
    <Layout>
      <SEO
        title={`${data.sanityRecipe.title} | ${recipe.category}`}
        description={recipe.subHeading}
      />
      <article className="page padding container">
        <div className="responsive-container">
          <iframe
            title={data.sanityRecipe.title}
            className="responsive-iframe"
            id="player"
            type="text/html"
            src={`http://www.youtube.com/embed/${data.sanityRecipe.youtubeVideoId}?enablejsapi=1&origin=http:/localhost:8000`}
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
        <br />
        <h1>{data.sanityRecipe.title}</h1>
        <h2 className="text--md"> {data.sanityRecipe.subtitle}</h2>
        <br />
        <section>
          <IngredientsForm>
            <ul>
              {data.sanityRecipe.ingredients.map(({ ingredient }, i) => (
                <Ingredient
                  key={ingredient.id}
                  ingredient={ingredient}
                  order={i + 1}
                />
              ))}
            </ul>
          </IngredientsForm>
        </section>
        <br />
        <section>
          <BlockContent blocks={data.sanityRecipe._rawBody} />
        </section>
        <br />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query RECIPE_QUERY($slug: String!) {
    sanityRecipe(slug: { current: { eq: $slug } }) {
      title
      subtitle
      _rawBody
      youtubeVideoId
      ingredients {
        ingredient {
          id
          text
          ASIN
          # quantity
        }
      }
    }
  }
`
