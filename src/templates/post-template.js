import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

import {
  SEO,
  Layout,
  IngredientsForm,
  IngredientsFormItem,
  AffiliateLinkDisclaimer,
} from "../components"

export default function PostTemplate({ data }) {
  const post = data.sanityPost

  return (
    <Layout>
      <SEO title={`${post.title}`} description={post.subtitle} />
      <div className="padding">
        <div className="page container card" style={{ marginBlockStart: `0` }}>
          {post.youtubeVideoId ? (
            <div className="responsive-container">
              <iframe
                title={post.title}
                className="responsive-iframe"
                id="player"
                type="text/html"
                src={`https://www.youtube.com/embed/${post.youtubeVideoId}?enablejsapi=1&origin=https://homerice.app&cc_load_policy=0&autoplay=1&rel=0`}
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
              {post.mainImage.asset && post.mainImage.asset.fluid && (
                <Img fluid={post.mainImage.asset.fluid} />
              )}
            </>
          )}
          <br />
          <div className="container only-mobile-padding">
            <h1 style={{ marginBlockStart: `var(--space-lg)` }}>
              {post.title}
            </h1>
            <h2 className="text--md" style={{ color: `var(--grey)` }}>
              {post.subtitle}
            </h2>
            <IngredientsForm ingredients={post.ingredients}>
              <h3>Ingredients</h3>
              {post.ingredients.map((ingredient, i) => (
                <IngredientsFormItem
                  key={ingredient._id}
                  ingredient={ingredient}
                  order={i + 1}
                />
              ))}
              {post.optionalIngredients &&
                post.optionalIngredients.map((optionalIngredient, i) => (
                  <IngredientsFormItem
                    key={optionalIngredient._id}
                    ingredient={optionalIngredient}
                    order={post.ingredients.length + i + 1}
                    optional
                  />
                ))}
              {post.gear.length > 0 && (
                <>
                  <h3>Gear</h3>
                  {post.gear.map((gearItem, i) => (
                    <IngredientsFormItem
                      key={gearItem._id}
                      ingredient={gearItem}
                      gearItem={gearItem}
                      order={
                        post.ingredients.length +
                        post.optionalIngredients.length +
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
            {post._rawBody && (
              <article>
                <BlockContent blocks={post._rawBody} />
                <hr className="hr" />
              </article>
            )}
          </div>
        </div>
        <br />
        <AffiliateLinkDisclaimer />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
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
