import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import { Layout, SEO } from "../components"

import { useAllRecipes } from "../hooks"

export default function IndexPage() {
  const { edges } = useAllRecipes()

  return (
    <Layout>
      <SEO title="Home" />
      <article className="page padding container">
        <div className="content-grid">
          {edges.map(edge => (
            <Link
              key={edge.node.id}
              to={edge.node.fields.slug}
              style={{ textDecoration: `none` }}
            >
              <div className="card">
                <Img
                  fluid={
                    edge.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                />
                <h3 className="card-heading">{edge.node.frontmatter.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </article>
    </Layout>
  )
}
