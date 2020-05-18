import React from "react"
import { Link } from "gatsby"

import "semantic-styles"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <header className="header padding">
        <Link to="/">
          <h4>Recipe Blog</h4>
        </Link>
      </header>
      <main className="main">{children}</main>
      <footer className="footer padding">
        <Link to="/">
          <h4>Recipe Blog</h4>
        </Link>
      </footer>
    </>
  )
}

export default Layout
