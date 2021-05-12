import React from "react"
// import PropTypes from "prop-types"
// import Img from "gatsby-image"

export default function ContentCard({ title, text, src }) {
  return (
    <div className="card">
      {/* {src && <Img fluid={src} />} */}
      <h3 className="card-heading">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  )
}

// ContentCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string,
// }
