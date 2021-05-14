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
  YoutubeEmbedPlayer,
  NextPreviousPostLinks,
  ContentCard,
} from "../components"

export default function PostTemplate({ data, pageContext }) {
  const post = data.sanityPost

  return (
    <Layout>
      <SEO title={`${post.title}`} description={post.subtitle} />
      <div className="container padding">
        <article className="card" style={{ marginBlockStart: `0` }}>
          {post.youtubeVideoId ? (
            <YoutubeEmbedPlayer
              title={post.title}
              youtubeVideoId={post.youtubeVideoId}
              style={{
                borderTopLeftRadius: `var(--radius)`,
                borderTopRightRadius: `var(--radius)`,
              }}
            />
          ) : (
            <Img fluid={post.mainImage.asset.fluid} />
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
              <>
                <BlockContent blocks={post._rawBody} />
                <hr className="hr" />
              </>
            )}
          </div>
        </article>

        <section style={{ marginTop: `var(--space-xl)` }}>
          <AffiliateLinkDisclaimer />
        </section>

        <section>
          <hr className="hr" />
          <NextPreviousPostLinks
            nextPost={pageContext.nextPost}
            previousPost={pageContext.previousPost}
          />
        </section>

        {post.ingredients.length > 0 && (
          <section>
            <hr className="hr" />
            <h3 className="text--xl">Post Ingredients</h3>
            <div
              className="content-grid"
              style={{ marginTop: `var(--space-xl)` }}
            >
              {post.ingredients.map(ingredient =>
                ingredient.slug ? (
                  <Link
                    to={`/ingredients/${ingredient.slug.current}`}
                    style={{ textDecoration: `none` }}
                  >
                    <ContentCard
                      heading={ingredient.text}
                      fluid={
                        ingredient.image &&
                        ingredient.image.asset &&
                        ingredient.image.asset.fluid
                      }
                    />
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
