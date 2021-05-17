import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

export default function FullNav({ pages }) {
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
          style={{
            fontStyle: `italic`,
          }}
          data-is-active={
            location.pathname === page.location ||
            // because nested ingredients page
            `/${location.pathname.split("/")[1]}` === page.location
          }
        >
          {page.name}
        </Link>
      ))}
    </nav>
  )
}
