import React from "react"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import BlockContent from "@sanity/block-content-to-react"

const sanityConfig = {
  projectId: `q6bcj0lp`,
  dataset: `production`,
  graphqlTag: "default",
}

const serializers = {
  types: {
    postImage: ({ node }) => {
      const imgData = getFluidGatsbyImage(
        node.asset._ref,
        { maxWidth: 1024 },
        sanityConfig
      )
      return (
        <figure className="figure" style={{ marginBottom: `var(--space-lg)` }}>
          <img
            srcSet={imgData.srcSet}
            sizes={imgData.sizes}
            style={{ borderRadius: `0`, width: `100%` }}
          />
          <figcaption
            className="figcaption text--sm"
            style={{ fontStyle: `italic` }}
          >
            {node.caption}
          </figcaption>
        </figure>
      )
    },
  },
}

export default function MyBlockContent({ blocks }) {
  return <BlockContent blocks={blocks} serializers={serializers} />
}
