import React from "react"

import "semantic-styles"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <div>
      <main className="main">{children}</main>
    </div>
  )
}

export default Layout
