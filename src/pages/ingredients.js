import React, { useState } from "react"
import { Link } from "gatsby"

import { Layout, IngredientsSearch } from "../components"

export default function IngredientsPage({ data }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState([])

  console.log(`data`, data)

  return (
    <Layout>
      <div className="padding container">
        <h1>Ingredients</h1>
        {/* <IngredientsSearch ingredients={data.allSanityIngredient.edges} /> */}
        <div
          className="content-grid"
          style={{ marginBlockStart: `var(--space-xl)` }}
        >
          {data.allSanityIngredient.edges.map(
            edge =>
              edge.node.slug && (
                <Link
                  to={`/ingredients/${edge.node.slug.current}`}
                  style={{ textDecoration: `none` }}
                >
                  <div className="card">
                    <h4 className="card-heading">{edge.node.text}</h4>
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
