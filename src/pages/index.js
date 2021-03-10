import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { Layout, SEO } from "../components"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" description="Yum yum yum" />
      <article>
        <div className="page padding container content-grid">
          {data.allSanityVideo.edges.map(edge => (
            <Link
              key={edge.node.id}
              style={{ textDecoration: `none` }}
              to={`/${edge.node.slug.current}`}
            >
              <div className="card">
                {edge.node.mainImage && edge.node.mainImage.asset && (
                  <Img
                    className="index-img"
                    fluid={edge.node.mainImage.asset.fluid}
                    style={{
                      filter: `brightness(0.8)`,
                      height: `250px`,
                    }}
                  />
                )}
                <h3 className="card-heading">{edge.node.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allSanityVideo {
      edges {
        node {
          id
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
  }
`
