import React from "react"
import { graphql, Link } from "gatsby"

import {
  SEO,
  Layout,
  ContentCard,
  AffiliateLinkDisclaimer,
} from "../components"
import getAmazonAffiliateLink from "../utils/get-amazon-affiliate-link"

export default function IngredientPageTemplate({ data }) {
  return (
    <Layout>
      <SEO title={data.sanityIngredient.text} />
      <article className="container padding">
        {data.sanityIngredient.ASIN ? (
          <a
            href={
              data.sanityIngredient.ASIN &&
              getAmazonAffiliateLink(data.sanityIngredient.ASIN)
            }
          >
            <h1 style={{ textAlign: `center` }}>
              {data.sanityIngredient.text}
            </h1>
          </a>
        ) : (
          <h1 style={{ textAlign: `center` }}>{data.sanityIngredient.text}</h1>
        )}
        <div className="content-grid" style={{ marginTop: `var(--space-xl)` }}>
          {data.sanityIngredient.posts &&
            data.sanityIngredient.posts.map(post => (
              <Link
                to={`/${post.slug.current}`}
                style={{ textDecoration: `none` }}
              >
                <ContentCard
                  heading={post.title}
                  text={post.subtitle}
                  fluid={post.mainImage.asset && post.mainImage.asset.fluid}
                />
              </Link>
            ))}
        </div>
      </article>
      <br />
      <section
        className="container padding"
        style={{ marginTop: `var(--space-xl)` }}
      >
        <AffiliateLinkDisclaimer />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query INGREDIENT_PAGE_QUERY($slug: String!) {
    sanityIngredient(slug: { current: { eq: $slug } }) {
      id
      text
      ASIN
      posts {
        _id
        title
        subtitle
        mainImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
      }
    }
  }
`
