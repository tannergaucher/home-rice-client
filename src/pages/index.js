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
              style={{ textDecoration: `none` }}
              to={`/${edge.node.slug.current}`}
            >
              <ContentCard
                heading={edge.node.title}
                text={edge.node.subtitle}
                fluid={edge.node.mainImage.asset.fluid}
              />
              {/* <div className="card">
                {edge.node.mainImage && edge.node.mainImage.asset && (
                  <Img fluid={edge.node.mainImage.asset.fluid} />
                )}
                <h3 className="card-heading">{edge.node.title}</h3>
                <p className="card-text">{edge.node.subtitle}</p>
              </div> */}
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
