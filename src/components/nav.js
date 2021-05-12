import React from "react"

import useIsMobile from "../hooks/use-is-mobile"

import { NavLinks, MenuBtn } from "."

export default function Nav() {
  const isMobile = useIsMobile()

  return <nav>{isMobile ? <MenuBtn /> : <NavLinks />}</nav>
}
