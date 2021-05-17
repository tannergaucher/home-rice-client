import React from "react"
import { Link, graphql } from "gatsby"

import { SEO, Layout, ContentCard } from "../components"
import useIsMobile from "../hooks/use-is-mobile"

export default function IngredientsPage({ data }) {
  const isMobile = useIsMobile()

  return (
    <Layout>
      <SEO title="Ingredients" />
      <div className="padding container">
        {isMobile && <h1 style={{ textAlign: `center` }}>Ingredients</h1>}
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
                  key={edge.node.slug.current}
                >
                  <ContentCard
                    heading={edge.node.text}
                    text={`${edge.node.posts.length} Post${
                      edge.node.posts.length > 1 ? `s` : ``
                    }`}
                    // fluid={
                    //   edge.node.image &&
                    //   edge.node.image.asset &&
                    //   edge.node.image.asset.fluid
                    // }
                  />
                </Link>
              )
          )}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allSanityIngredient(sort: { fields: text }) {
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
