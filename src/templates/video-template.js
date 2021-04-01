import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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
          {data.sanityRecipe.youtubeVideoId ? (
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
          ) : (
            <>
              {data.sanityRecipe.mainImage.asset &&
                data.sanityRecipe.mainImage.asset.fluid && (
                  <Img fluid={data.sanityRecipe.mainImage.asset.fluid} />
                )}
            </>
          )}
          <br />
          <div className="container only-mobile-padding">
            <h1 style={{ marginBlockStart: `var(--space-lg)` }}>
              {data.sanityRecipe.title}
            </h1>
            <h2 className="text--md" style={{ color: `var(--grey)` }}>
              {data.sanityRecipe.subtitle}
            </h2>
            <IngredientsForm ingredients={data.sanityRecipe.ingredients}>
              <h3>Ingredients</h3>
              {data.sanityRecipe.ingredients.map((ingredient, i) => (
                <IngredientsFormItem
                  key={ingredient._id}
                  ingredient={ingredient}
                  order={i + 1}
                />
              ))}
              {data.sanityRecipe.optionalIngredients &&
                data.sanityRecipe.optionalIngredients.map(
                  (optionalIngredient, i) => (
                    <IngredientsFormItem
                      key={optionalIngredient._id}
                      ingredient={optionalIngredient}
                      order={data.sanityRecipe.ingredients.length + i + 1}
                      optional
                    />
                  )
                )}
              {data.sanityRecipe.gear.length > 0 && (
                <>
                  <h3>Gear</h3>
                  {data.sanityRecipe.gear.map((gearItem, i) => (
                    <IngredientsFormItem
                      key={gearItem._id}
                      ingredient={gearItem}
                      gearItem={gearItem}
                      order={
                        data.sanityRecipe.ingredients.length +
                        data.sanityRecipe.optionalIngredients.length +
                        i +
                        1
                      }
                      gear
                    />
                  ))}
                </>
              )}
            </IngredientsForm>
            <hr className="hr" />
            {data.sanityRecipe._rawBody && (
              <>
                <BlockContent blocks={data.sanityRecipe._rawBody} />
                <hr className="hr" />
              </>
            )}
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
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      ingredients {
        _id
        text
        ASIN
      }
      optionalIngredients {
        _id
        text
        ASIN
      }
      gear {
        _id
        text
        ASIN
        externalHref
      }
    }
  }
`
