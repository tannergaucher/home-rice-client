import React from "react"
import BlockContent from "@sanity/block-content-to-react"

import { Layout, SEO, IngredientsForm, Ingredient } from "../components"

export default function RecipeTemplate({ data }) {
  return (
    <Layout>
      <SEO
        title={`${data.sanityVideo.title}`}
        description={data.sanityVideo.subtitle}
      />
      <div className="padding">
        <article
          className="page container card"
          style={{ marginBlockStart: `0` }}
        >
          <div className="responsive-container">
            <iframe
              title={data.sanityVideo.title}
              className="responsive-iframe"
              id="player"
              type="text/html"
              src={`https://www.youtube.com/embed/${data.sanityVideo.youtubeVideoId}?enablejsapi=1&origin=https://tg-platform.netlify.app&cc_load_policy=0&autoplay=1&rel=0`}
              frameBorder="0"
              allowFullScreen={true}
              style={{
                borderTopLeftRadius: `var(--radius)`,
                borderTopRightRadius: `var(--radius)`,
              }}
            ></iframe>
          </div>
          <br />
          <div className="container padding">
            <h1 style={{ marginBlockStart: `var(--space-md)` }}>
              {data.sanityVideo.title}
            </h1>
            <h2 style={{ color: `var(--grey)` }}>
              {data.sanityVideo.subtitle}
            </h2>
            <br />
            <IngredientsForm>
              <ul>
                {data.sanityVideo.ingredients.map((ingredient, i) => (
                  <Ingredient
                    key={ingredient.id}
                    ingredient={ingredient}
                    order={i + 1}
                  />
                ))}
              </ul>
            </IngredientsForm>
            <hr className="hr" />
            <BlockContent blocks={data.sanityVideo._rawBody} />
            <hr className="hr" />
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query VIDEO_QUERY($slug: String!) {
    sanityVideo(slug: { current: { eq: $slug } }) {
      title
      subtitle
      _rawBody
      youtubeVideoId
      ingredients {
        id
        text
        ASIN
      }
    }
  }
`
