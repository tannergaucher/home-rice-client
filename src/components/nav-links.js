import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

import { pages } from "../utils/constants"

export default function FullNav() {
  const location = useLocation()

  return (
    <nav
      style={{ display: `flex`, flexWrap: `wrap`, justifyContent: `center` }}
    >
      {pages.map(page => (
        <Link
          key={page.location}
          className="nav-link text--md"
          to={page.location}
          style={{ textDecoration: `underline` }}
          data-is-active={location.pathname === page.location}
        >
          {page.name}
        </Link>
      ))}
    </nav>
  )
}
