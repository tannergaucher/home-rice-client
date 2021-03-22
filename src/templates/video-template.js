import React from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import {
  Layout,
  SEO,
  IngredientsForm,
  IngredientsFormItem,
} from "../components"

export default function VideoPageTemplate({ data }) {
  return (
    <Layout>
      <SEO
        title={`${data.sanityRecipe.title}`}
        description={data.sanityRecipe.subtitle}
      />
      <div className="padding">
        <article
          className="page container card"
          style={{ marginBlockStart: `0` }}
        >
          <div className="responsive-container">
            <iframe
              title={data.sanityRecipe.title}
              className="responsive-iframe"
              id="player"
              type="text/html"
              src={`https://www.youtube.com/embed/${data.sanityRecipe.youtubeVideoId}?enablejsapi=1&origin=https://tg-platform.netlify.app&cc_load_policy=0&autoplay=1&rel=0`}
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
              {data.sanityRecipe.title}
            </h1>
            <h2 style={{ color: `var(--grey)` }}>
              {data.sanityRecipe.subtitle}
            </h2>
            <br />
            <IngredientsForm ingredients={data.sanityRecipe.ingredients}>
              {data.sanityRecipe.ingredients.map((ingredient, i) => (
                <IngredientsFormItem
                  key={ingredient.id}
                  ingredient={ingredient}
                  order={i + 1}
                />
              ))}
            </IngredientsForm>
            <hr className="hr" />
            <BlockContent blocks={data.sanityRecipe._rawBody} />
            <hr className="hr" />
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query VIDEO_PAGE_QUERY($slug: String!) {
    sanityRecipe(slug: { current: { eq: $slug } }) {
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
