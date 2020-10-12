import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { Layout } from "../components"

// Query all recipes
// Render recipes cards

export default function IndexPage({ data }) {
  return (
    <Layout>
      <article className="page padding">
        <div className="container content-grid">
          {data.allSanityRecipe.edges.map(edge => (
            <Link
              key={edge.node.id}
              style={{ textDecoration: `none` }}
              to={`/${edge.node.slug.current}`}
            >
              <div className="card">
                <Img fluid={edge.node.mainImage.asset.fluid} />
                <h2 className="card-heading">{edge.node.title}</h2>
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
