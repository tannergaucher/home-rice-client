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
        <div className="padding container content-grid">
          {data.allSanityPost.edges.map(edge => (
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
          ))}
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
