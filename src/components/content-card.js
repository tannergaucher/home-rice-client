import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

export default function ContentCard({ heading, text, fluid }) {
  return (
    <div className="card">
      {fluid && <Img fluid={fluid} />}
      {heading && <h3 className="card-heading">{heading}</h3>}
      {text && <p className="card-text">{text}</p>}
    </div>
  )
}

ContentCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  fluid: PropTypes.object,
}
