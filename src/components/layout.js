import React from "react"
import { Link } from "gatsby"

import "semantic-styles"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <div>
      <header className="header padding container">
        <Link to="/" style={{ textDecoration: `none` }}>
          <h1 className="text--xxxl">Tanner Gaucher / Food </h1>
        </Link>
      </header>
      <main className="main">{children}</main>
    </div>
  )
}

export default Layout
