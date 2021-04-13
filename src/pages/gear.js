import React from "react"

import { Layout } from "../components"

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
          {data.allSanityGear.edges.map(edge => (
            <a
              href={getAmazonAffiliateLink(edge.node.ASIN)}
              style={{ textDecoration: `none` }}
            >
              <div className="card">
                <h4 className="card-heading">{edge.node.text}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
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
          slug {
            current
          }
        }
      }
    }
  }
`
