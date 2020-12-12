import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import brandBannerLightSrc from "../images/brand-banner-light.png"
import brandBannerDarkSrc from "../images/brand-banner-dark.png"

import { Brand, Layout } from "../components"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <article className="page">
        <section>
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <div>
              <picture
                style={{
                  display: `flex`,
                  justifyContent: `center`,
                  alignItems: `center`,
                }}
              >
                <source
                  srcSet={brandBannerDarkSrc}
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src={brandBannerLightSrc}
                  style={{ width: `75%`, height: `75%` }}
                />
              </picture>
            </div>
            {/* <img
              style={{
                width: `75%`,
                height: `75%`,
              }}
              src={brandBannerDarkSrc}
              alt=""
            /> */}
          </div>
        </section>

        <br />

        <div
          className="container content-grid"
          style={{ marginTop: `var(--space-lg)` }}
        >
          {data.allSanityRecipe.edges.map(
            edge =>
              console.log(edge) || (
                <Link
                  key={edge.node.id}
                  style={{ textDecoration: `none` }}
                  to={`/${edge.node.slug.current}`}
                >
                  <div className="card">
                    <Img
                      fluid={edge.node.mainImage.asset.fluid}
                      style={{ borderRadius: `var(--radius)` }}
                    />
                  </div>
                </Link>
              )
          )}
        </div>
        <br />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allSanityRecipe {
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
