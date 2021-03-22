import React from "react"
import { Link } from "gatsby"

import "semantic-styles"

import "../index.css"

const Layout = ({ children }) => {
  return (
    <div>
      <header className="header container padding">
        <Link to="/">
          <h3
            className="title"
            style={{ margin: `0`, padding: `var(--space-lg) 0` }}
          >
            Home Rice
          </h3>
        </Link>
      </header>
      <main className="main">{children}</main>
      <footer className="footer container padding">
        <Link to="/">
          <h3 className="title">Home Rice</h3>
        </Link>
      </footer>
    </div>
  )
}

export default Layout
