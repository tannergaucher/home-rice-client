import React from "react"
import BlockContent from "@sanity/block-content-to-react"

import { recipe } from "../utils/mocks"
import { Layout, SEO, IngredientsForm, Ingredient } from "../components"

export default function RecipeTemplate({ data }) {
  return (
    <Layout>
      <SEO
        title={`${data.sanityRecipe.title} | ${recipe.category}`}
        description={data.sanityRecipe.subtitle}
      />
      <article className="page">
        <div className="responsive-container">
          <iframe
            title={data.sanityRecipe.title}
            className="responsive-iframe"
            id="player"
            type="text/html"
            src={`https://www.youtube.com/embed/${data.sanityRecipe.youtubeVideoId}?enablejsapi=1&origin=https://tg-platform.netlify.app&cc_load_policy=1&autoplay=1&rel=0`}
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
        <br />
        <br />
        <div className="container">
          <section className="container  only-mobile-padding ">
            <h1 className="title" style={{ marginBlockEnd: `var(--space-md)` }}>
              {data.sanityRecipe.title}
            </h1>
            <h2 className="text--md" style={{ marginBlockStart: 0 }}>
              {" "}
              {data.sanityRecipe.subtitle}
            </h2>
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

              {/* <a
            href={`https://www.youtube.com/watch?v=${data.sanityRecipe.youtubeVideoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="btn"
              style={{ width: `100%`, fontFamily: `var(--serif)` }}
            >
              Watch on YouTube
            </button>
          </a> */}
              {/* {isShare && (
            <a href="">
              <button
                className="btn"
                style={{ width: `100%`, fontFamily: `var(--serif)` }}
                onClick={e => {
                  e.preventDefault()
                  if (window.navigator.share) {
                    window.navigator.share({
                      title: data.sanityRecipe.title,
                      text: data.sanityRecipe.title,
                      url: window.location.origin,
                    })
                  }
                }}
              >
                Share Link
              </button>
            </a>
          )} */}
            </section>

            <br />

            <section>
              <BlockContent blocks={data.sanityRecipe._rawBody} />
            </section>
            <br />
          </section>
        </div>
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
