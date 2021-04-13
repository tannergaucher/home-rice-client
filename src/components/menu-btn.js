import React from "react"
import { Link } from "gatsby"

import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button"
import "@reach/menu-button/styles.css"

export default function MyMenuButton() {
  return (
    <Menu>
      <MenuButton className="btn" style={{ marginBottom: `0` }}>
        <span className="text--md">Menu</span> <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList style={{ width: `45vmin` }}>
        <MenuLink as={Link} to="/">
          All Posts
        </MenuLink>
        <MenuLink as={Link} to="/categories">
          Categories
        </MenuLink>
        <MenuLink as={Link} to="/ingredients">
          Ingredients
        </MenuLink>
        <MenuLink as={Link} to="/gear">
          Gear
        </MenuLink>
      </MenuList>
    </Menu>
  )
}
