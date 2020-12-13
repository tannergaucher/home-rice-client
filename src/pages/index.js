import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { Brand, Layout } from "../components"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <article className="page">
        <section>
          <Brand />
        </section>
        <br />
        <div
          className="container content-grid only-mobile-padding"
          style={{ marginTop: `var(--space-lg)` }}
        >
          {data.allSanityVideo.edges.map(edge => (
            <div className="card">
              <Link
                key={edge.node.id}
                style={{ textDecoration: `none` }}
                to={`/${edge.node.slug.current}`}
              >
                <Img
                  fluid={edge.node.mainImage.asset.fluid}
                  style={{ borderRadius: `var(--radius)` }}
                />
              </Link>
            </div>
          ))}
        </div>
        <br />
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
