import React from "react"

import "semantic-styles"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
