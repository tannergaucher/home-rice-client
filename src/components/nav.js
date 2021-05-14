import React, { useState, useLayoutEffect } from "react"

import { NavLinks, MenuBtn } from "."
import { pages } from "../utils/constants"
import useIsMobile from "../hooks/use-is-mobile"

export default function Nav() {
  const [myPages, setMyPages] = useState([])

  const isMobile = useIsMobile()

  useLayoutEffect(() => {
    setMyPages(pages)
  }, [])

  return (
    <nav>
      {isMobile ? <MenuBtn pages={myPages} /> : <NavLinks pages={myPages} />}
    </nav>
  )
}
