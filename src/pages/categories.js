import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { Layout } from "../components"

export default function CategoriesPage({ data }) {
  return (
    <Layout>
      <div className="padding container">
        <h1>Categories</h1>
        <div style={{ marginTop: `var(--space-xl)` }}>
          {data.allSanityCategory.edges.map(
            edge =>
              edge.node.posts && (
                <details className="details">
                  <summary className="summary">{edge.node.title}</summary>
                  <br />
                  <div className="content-grid">
                    {edge.node.posts &&
                      edge.node.posts.map(post => (
                        <div className="card">
                          <Link
                            style={{ textDecoration: `none` }}
                            to={`/${post.slug.current}`}
                          >
                            <Img fluid={post.mainImage.asset.fluid} />
                            <h4 className="card-heading">{post.title}</h4>
                            <p className="card-text">{post.subtitle}</p>
                          </Link>
                        </div>
                      ))}
                  </div>
                </details>
              )
          )}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allSanityCategory {
      edges {
        node {
          id
          title
          slug {
            current
          }
          posts {
            _id
            title
            subtitle
            slug {
              current
            }
            mainImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
