import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { Layout, SEO } from "../components"
import getAmazonAffiliateLink from "../utils/get-amazon-affiliate-link"

export default function IngredientPageTemplate({ data }) {
  return (
    <Layout>
      <SEO />
      <article className="container padding">
        {data.sanityIngredient.ASIN ? (
          <a
            href={
              data.sanityIngredient.ASIN &&
              getAmazonAffiliateLink(data.sanityIngredient.ASIN)
            }
          >
            <h1>{data.sanityIngredient.text}</h1>
          </a>
        ) : (
          <h1>{data.sanityIngredient.text}</h1>
        )}

        <div className="content-grid" style={{ marginTop: `var(--space-xl)` }}>
          {data.sanityIngredient.posts &&
            data.sanityIngredient.posts.map(post => (
              <Link
                to={`/${post.slug.current}`}
                style={{ textDecoration: `none` }}
              >
                <div className="card">
                  {post.mainImage.asset && (
                    <Img fluid={post.mainImage.asset.fluid} />
                  )}
                  <h4 className="card-heading">{post.title}</h4>
                  <p className="card-text">{post.subtitle}</p>
                </div>
              </Link>
            ))}
        </div>
      </article>
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
