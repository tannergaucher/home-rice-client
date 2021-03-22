import React from "react"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"

import "semantic-styles"

import "../index.css"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <div>
      <header className="header container padding">
        <Link to="/">
          <h3
            className="title"
            style={{ margin: `0`, padding: `var(--space-lg) 0` }}
          >
            {title}
          </h3>
        </Link>
      </header>
      <main className="main">{children}</main>
      <footer className="footer container padding">
        <Link to="/">
          <h3 className="title">{title}</h3>
        </Link>
      </footer>
    </div>
  )
}

export default Layout
