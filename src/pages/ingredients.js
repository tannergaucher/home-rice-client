import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components"

export default function IngredientsPage({ data }) {
  return (
    <Layout>
      <div className="padding container">
        <h1>Ingredients</h1>
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
                    <h4 className="card-heading">{edge.node.text}</h4>
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
