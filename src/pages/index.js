import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { Layout, Brand } from "../components"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <article>
        <Brand />
        <div style={{ padding: `var(--padding)` }}>
          {data.allSanityVideo.edges.map(edge => (
            <Link
              key={edge.node.id}
              style={{ textDecoration: `none` }}
              to={`/${edge.node.slug.current}`}
            >
              <div style={{ position: `relative` }}>
                <h2
                  className="responsive-title"
                  style={{
                    position: `absolute`,
                    top: `50%`,
                    left: `50%`,
                    transform: `translate(-50%, -50%)`,
                    zIndex: 3,
                    textAlign: `center`,
                    lineHeight: 1,
                    marginBlockStart: 0,
                    marginBlockEnd: 0,
                  }}
                >
                  {edge.node.title}
                </h2>
                <Img
                  className="index-img"
                  fluid={edge.node.mainImage.asset.fluid}
                  style={{
                    borderRadius: `var(--radius)`,
                    filter: `brightness(0.5)`,
                  }}
                />
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
