import React from "react"
import { Link, graphql } from "gatsby"

import { Layout, SEO, ContentCard } from "../components"
import useIsMobile from "../hooks/use-is-mobile"

export default function CategoriesPage({ data }) {
  const isMobile = useIsMobile()

  return (
    <Layout>
      <SEO title="Categories" />
      <div className="padding container">
        {isMobile && <h1 style={{ textAlign: `center` }}>Categories</h1>}
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
                        <Link
                          style={{ textDecoration: `none` }}
                          to={`/${post.slug.current}`}
                        >
                          <ContentCard
                            heading={post.title}
                            text={post.subtitle}
                            fluid={
                              post.mainImage.asset && post.mainImage.asset.fluid
                            }
                          />
                        </Link>
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
