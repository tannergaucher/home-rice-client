import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import getAmazonAffiliateLink from "../utils/get-amazon-affiliate-link"

import {
  SEO,
  Layout,
  IngredientsForm,
  BlockContent,
  AffiliateLinkDisclaimer,
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
              <IngredientsForm
                ingredients={post.ingredients}
                optionalIngredients={post.optionalIngredients}
              />
            )}
            {post.gear.length > 0 && (
              <>
                <h3>Gear</h3>
                <ul>
                  {post.gear.map(gearItem => (
                    <li key={gearItem._id}>
                      <a
                        href={getAmazonAffiliateLink(gearItem.ASIN)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {gearItem.text}
                      </a>
                    </li>
                  ))}
                </ul>
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

        <hr className="hr" />

        <section>
          <NextPreviousPostLinks
            nextPost={pageContext.nextPost}
            previousPost={pageContext.previousPost}
          />
        </section>

        {post.ingredients.length > 0 && (
          <>
            <hr className="hr" />
            <section>
              <h3 className="text--xl">More Posts With</h3>
              <div
                className="content-grid"
                style={{ marginTop: `var(--space-xl)` }}
              >
                {post.ingredients.map(ingredient =>
                  ingredient.slug ? (
                    <Link
                      to={`/ingredients/${ingredient.slug.current}`}
                      style={{ textDecoration: `none` }}
                      key={ingredient.slug.current}
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
          </>
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
