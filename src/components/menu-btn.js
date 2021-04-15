import React from "react"
import { Link } from "gatsby"

import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button"
import "@reach/menu-button/styles.css"

export default function MyMenuButton() {
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
          width: `calc(100vw - var(--space-xl) - var(--space-md) - var(--space-md) - var(--space-xl) )`,
        }}
      >
        <MenuLink as={Link} to="/">
          <span className="text--md">All Posts</span>
        </MenuLink>
        <MenuLink as={Link} to="/categories">
          <span className="text--md">Categories</span>
        </MenuLink>
        <MenuLink as={Link} to="/ingredients">
          <span className="text--md">Ingredients</span>
        </MenuLink>
        <MenuLink as={Link} to="/gear">
          <span className="text--md">Gear</span>
        </MenuLink>
      </MenuList>
    </Menu>
  )
}
