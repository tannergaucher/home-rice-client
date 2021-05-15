import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import useIsTablet from "../hooks/use-is-tablet"

export default function ContentCard({ heading, text, fluid, size }) {
  const isTablet = useIsTablet()

  const renderLgCard = size && size === "lg" && !isTablet

  return (
    <div className="card">
      {fluid && <Img fluid={fluid} />}
      {heading && (
        <h3
          className={`card-heading ${renderLgCard ? `text--xxxl` : ``}`}
          style={{
            textAlign: renderLgCard ? "center" : ``,
            marginTop: renderLgCard ? `var(--space-sm)` : ``,
            marginBottom: renderLgCard ? `0` : ``,
          }}
        >
          {heading}
        </h3>
      )}
      {text && (
        <p
          className={`card-text ${renderLgCard ? `text--lg` : ``}`}
          style={{
            textAlign: renderLgCard ? "center" : ``,
            marginTop: renderLgCard ? `var(--space-sm)` : ``,
            marginBottom: renderLgCard ? `var(--space-sm)` : ``,
          }}
        >
          {text}
        </p>
      )}
    </div>
  )
}

ContentCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  fluid: PropTypes.object,
}
