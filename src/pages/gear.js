import React from "react"

import { Layout, AffiliateLinkDisclaimer } from "../components"

import getAmazonAffiliateLink from "../utils/get-amazon-affiliate-link"

export default function GearPage({ data }) {
  return (
    <Layout>
      <div className="padding container">
        <h1>Gear</h1>
        <div
          className="content-grid"
          style={{ marginBlockStart: `var(--space-xl)` }}
        >
          {data.allSanityGear.edges.map(
            edge =>
              console.log(edge) || (
                <a
                  href={getAmazonAffiliateLink(edge.node.ASIN)}
                  style={{ textDecoration: `none` }}
                >
                  <div className="card">
                    <h3 className="card-heading">{edge.node.text}</h3>
                    {edge.node.posts && (
                      <p className="card-text">
                        {edge.node.posts.length} Post
                        {`${edge.node.posts.length > 1 ? `s` : ``}`}
                      </p>
                    )}
                  </div>
                </a>
              )
          )}
        </div>
      </div>
      <section className="padding" style={{ marginTop: `var(--space-xl)` }}>
        <AffiliateLinkDisclaimer />
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allSanityGear {
      edges {
        node {
          id
          text
          ASIN
          posts {
            _id
          }
          slug {
            current
          }
        }
      }
    }
  }
`
