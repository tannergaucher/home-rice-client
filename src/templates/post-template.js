import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import {
  SEO,
  Layout,
  IngredientsForm,
  IngredientsFormItem,
  AffiliateLinkDisclaimer,
  BlockContent,
} from "../components"

export default function PostTemplate({ data, pageContext }) {
  const post = data.sanityPost

  return (
    <Layout>
      <SEO title={`${post.title}`} description={post.subtitle} />
      <div className="container padding">
        <div className="card" style={{ marginBlockStart: `0` }}>
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

            {post.ingredients.length > 0 && (
              <>
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
              </>
            )}
            <hr className="hr" />
            {post._rawBody && (
              <article>
                <BlockContent blocks={post._rawBody} />
                <hr className="hr" />
              </article>
            )}
          </div>
        </div>
        <section style={{ marginTop: `var(--space-xl)` }}>
          <AffiliateLinkDisclaimer />
        </section>
        <section className="container">
          <hr className="hr" />
          <h3 className="text--xl">Posts</h3>
          <div
            style={{
              display: `grid`,
              gap: `0 var(--space-md)`,
              gridTemplateColumns: `1fr 1fr`,
              marginTop: `var(--space-xl)`,
            }}
          >
            {pageContext.nextPost && (
              <Link
                to={`/${pageContext.nextPost.slug.current}`}
                style={{ textDecoration: `none` }}
              >
                <div className="card">
                  <img
                    srcSet={pageContext.nextPost.mainImage.asset.fluid.srcSet}
                    sizes={pageContext.nextPost.mainImage.asset.fluid.sizes}
                    alt=""
                  />
                  <h4 className="card-heading">Next:</h4>
                  <h4 className="card-text ">{pageContext.nextPost.title}</h4>
                </div>
              </Link>
            )}
            {pageContext.previousPost && (
              <Link
                to={`/${pageContext.previousPost.slug.current}`}
                style={{ textDecoration: `none` }}
              >
                <div className="card">
                  <img
                    srcSet={
                      pageContext.previousPost.mainImage.asset.fluid.srcSet
                    }
                    sizes={pageContext.previousPost.mainImage.asset.fluid.sizes}
                    alt=""
                  />
                  <h4 className="card-heading">Previous:</h4>
                  <h4 className="card-text">
                    {pageContext.previousPost.title}
                  </h4>
                </div>
              </Link>
            )}
          </div>
        </section>
        {post.ingredients.length > 0 && (
          <section>
            <div className="container">
              <hr className="hr" />
              <h3 className="text--xl">Ingredients</h3>
            </div>
            <div
              className="container content-grid"
              style={{ marginTop: `var(--space-xl)` }}
            >
              {post.ingredients.map(ingredient =>
                ingredient.slug ? (
                  <Link
                    to={`/ingredients/${ingredient.slug.current}`}
                    style={{ textDecoration: `none` }}
                  >
                    <div className="card" key={ingredient.text}>
                      <h3 className="card-heading">{ingredient.text}</h3>
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          </section>
        )}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      ...PostFragment
    }
  }
`
