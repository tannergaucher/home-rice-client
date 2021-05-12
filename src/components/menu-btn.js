import React from "react"
import { Link } from "gatsby"

import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button"
import "@reach/menu-button/styles.css"

import useIsMobile from "../hooks/use-is-mobile"
import { pages } from "../utils/constants"

export default function MyMenuButton() {
  const isMobile = useIsMobile()

  return (
    <Menu>
      <MenuButton
        className="btn"
        style={{
          marginBottom: `0`,
          width: `100%`,
        }}
      >
        <span className="text--md">Menu</span>
      </MenuButton>
      <MenuList
        style={{
          width: isMobile
            ? `calc(100vw - var(--space-lg))`
            : `calc(100vw - var(--space-xl) - var(--space-xl) - var(--space-lg))`,
        }}
      >
        {pages.map(page => (
          <MenuLink key={page.location} as={Link} to={page.location}>
            <span className="text--md">{page.name}</span>
          </MenuLink>
        ))}
      </MenuList>
    </Menu>
  )
}
