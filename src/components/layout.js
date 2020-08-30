import React from "react"
import { Link } from "gatsby"

import "semantic-styles"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <div>
      <header className="header padding container">
        <Link to="/">
          <h1 className="text--xxxl">Untitled Platform</h1>
        </Link>
      </header>
      <main className="main">{children}</main>
      <br />
      <footer className="footer padding container">
        <Link to="/">
          <h1
            className="text--xxxl"
            style={{ marginBottom: `var(--space-lg)` }}
          >
            Untitled Platform
          </h1>
        </Link>
      </footer>
    </div>
  )
}

export default Layout
