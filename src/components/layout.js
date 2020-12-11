import React from "react"
import { Link } from "gatsby"

import "semantic-styles"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <div>
      <header className="header padding container">
        <Link to="/" style={{ textDecoration: `none` }}>
          <h1
            className="text--xxxl title"
            style={{ fontStyle: `italic`, letterSpacing: `.5rem` }}
          >
            Home Rice
          </h1>
        </Link>
      </header>
      <main className="main">{children}</main>
    </div>
  )
}

export default Layout
