import React from "react"
import { Link, graphql } from "gatsby"

import { Layout, SEO, ContentCard } from "../components"
import useSiteMetadata from "../hooks/use-site-metadata"

export default function IndexPage({ data }) {
  const { description } = useSiteMetadata()

  return (
    <Layout>
      <SEO title="Home" description={description} />
      <article>
        <div
          className="container padding"
          style={{ marginBottom: `var(--space-lg)` }}
        >
          <Link
            to={data.allSanityPost.edges[0].node.slug.current}
            style={{ textDecoration: `none` }}
          >
            <ContentCard
              heading={data.allSanityPost.edges[0].node.title}
              text={data.allSanityPost.edges[0].node.subtitle}
              fluid={data.allSanityPost.edges[0].node.mainImage.asset.fluid}
              size="lg"
            />
          </Link>
        </div>

        <div className="padding container content-grid">
          {data.allSanityPost.edges.map(
            (edge, i) =>
              i !== 0 && (
                <Link
                  key={edge.node.id}
                  to={`/${edge.node.slug.current}`}
                  style={{ textDecoration: `none` }}
                >
                  <ContentCard
                    heading={edge.node.title}
                    text={edge.node.subtitle}
                    fluid={edge.node.mainImage.asset.fluid}
                  />
                </Link>
              )
          )}
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allSanityPost(
      filter: { draft: { eq: false } }
      sort: { fields: publishedAt, order: DESC }
    ) {
      edges {
        node {
          id
          title
          subtitle
          mainImage {
            asset {
              fluid(maxWidth: 1200) {
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
