import { graphql } from "gatsby"

export const SITE_METADATA_FRAGMENT = graphql`
  fragment SiteMetadataFragment on Site {
    siteMetadata {
      title
      description
      author
    }
  }
`
