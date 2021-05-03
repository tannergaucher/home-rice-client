import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import { Layout, AffiliateLinkDisclaimer, SEO } from "../components"

export default function IngredientsPage({ data }) {
  return (
    <Layout>
      <SEO title="Ingredients" />
      <div className="padding container">
        <h1 style={{ textAlign: `center` }}>Ingredients</h1>
        <div
          className="content-grid"
          style={{ marginBlockStart: `var(--space-xl)` }}
        >
          {data.allSanityIngredient.edges.map(
            edge =>
              edge.node.slug &&
              edge.node.posts && (
                <Link
                  to={`/ingredients/${edge.node.slug.current}`}
                  style={{ textDecoration: `none` }}
                >
                  <div className="card">
                    {edge.node.image !== null && edge.node.image.asset && (
                      <Img fluid={edge.node.image.asset.fluid} />
                    )}
                    <h3 className="card-heading">{edge.node.text}</h3>
                    <p className="card-text">
                      {edge.node.posts.length}{" "}
                      {`post${edge.node.posts.length > 1 ? `s` : ``}`}
                    </p>
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
      <br />
      <section className="padding">
        <AffiliateLinkDisclaimer />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allSanityIngredient {
      edges {
        node {
          _id
          id
          text
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          posts {
            _id
            title
            slug {
              current
            }
            mainImage {
              asset {
                fluid {
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`
