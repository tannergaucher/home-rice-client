import React from "react"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

import { Layout, GoogleMap } from "../components"

export default function PostWithPlaces({ data, pageContext }) {
  console.log(data)
  console.log(`pageContext`, pageContext)

  return (
    <Layout>
      <div className="container padding">
        <Img fluid={data.sanityPost.mainImage.asset.fluid} />
        <br />
        <h1 className="text--xxxl" style={{ textAlign: `center` }}>
          {data.sanityPost.title}
        </h1>
        <h2 className="text--md" style={{ textAlign: `center` }}>
          {data.sanityPost.subtitle}
        </h2>

        <br />

        <div className="aside-content-grid">
          <aside className="aside" style={{ marginTop: `var(--space-md)` }}>
            <GoogleMap
              style={{
                height: `calc(100% - var(--space-lg))`,
                marginRight: `var(--space-lg)`,
              }}
            />
          </aside>
          <div className="content">
            <BlockContent blocks={data.sanityPost._rawBody} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      ...PostFragment
    }
  }
`
