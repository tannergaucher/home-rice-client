import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

export default function ContentCard({ heading, text, fluid }) {
  return (
    <div className="card">
      {fluid && <Img fluid={fluid} />}
      <h3 className="card-heading">{heading}</h3>
      <p className="card-text">{text}</p>
    </div>
  )
}

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
}
