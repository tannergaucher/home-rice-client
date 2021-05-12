import React from "react"
import { graphql } from "gatsby"

import {
  SEO,
  Layout,
  ContentCard,
  AffiliateLinkDisclaimer,
} from "../components"
import getAmazonAffiliateLink from "../utils/get-amazon-affiliate-link"

export default function GearPage({ data }) {
  return (
    <Layout>
      <SEO title="Gear" />
      <div className="padding container">
        <h1 style={{ textAlign: `center` }}>Gear</h1>
        <div
          className="content-grid"
          style={{ marginBlockStart: `var(--space-xl)` }}
        >
          {data.allSanityGear.edges.map(edge => (
            <a
              href={getAmazonAffiliateLink(edge.node.ASIN)}
              style={{ textDecoration: `none` }}
            >
              <ContentCard
                heading={edge.node.text}
                text={`${edge.node.posts.length} Post${
                  edge.node.posts.length > 1 ? `s` : ``
                }`}
              />
            </a>
          ))}
        </div>
      </div>
      <section
        className="padding container"
        style={{ marginTop: `var(--space-xl)` }}
      >
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
