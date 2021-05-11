import React from "react"
import Img from "gatsby-image"

import {
  Layout,
  GoogleMap,
  BlockContent,
  YoutubeEmbedPlayer,
  NextPreviousPostLinks,
  SEO,
} from "../components"

import useIsMobile from "../hooks/use-is-mobile"

export default function PostWithPlace({ data, pageContext }) {
  const isMobile = useIsMobile()

  return (
    <Layout>
      <SEO title={data.sanityPost.title} />
      <div className="container padding">
        <Img fluid={data.sanityPost.mainImage.asset.fluid} />
        <br />
        <h1 className="text--xxxl" style={{ textAlign: `center` }}>
          {data.sanityPost.title}
        </h1>
        <h2
          className="text--md"
          style={{ textAlign: `center`, marginBlockStart: `0` }}
        >
          {data.sanityPost.subtitle}
        </h2>
        <br />
        <div className="aside-content-grid">
          <aside className="aside" style={{ marginTop: `var(--space-md)` }}>
            <GoogleMap
              placeName={data.sanityPost.places[0].googleMapsPlaceName}
              style={{
                width: isMobile ? `100%` : `25vw`,
                height: isMobile ? `50vh` : `calc(100vh - var(--space-lg))`,
                marginRight: `var(--space-lg)`,
                border: `none`,
              }}
            />
          </aside>
          <div className="content">
            <BlockContent blocks={data.sanityPost._rawBody} />
          </div>
        </div>
        <br />
        <YoutubeEmbedPlayer
          title={data.sanityPost.title}
          youtubeVideoId={data.sanityPost.youtubeVideoId}
          style={{
            marginBlockStart: `var(--space-lg)`,
          }}
        />
        <hr className="hr" />
        <NextPreviousPostLinks
          nextPost={pageContext.nextPost}
          previousPost={pageContext.previousPost}
        />
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
