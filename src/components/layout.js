import React from "react"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"

import "semantic-styles"
import "@semantic-styles/reach-ui"
import "../index.css"

import { MenuBtn, EmailCaptureForm } from "../components"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <header
        className="container padding"
        style={{ marginBlockEnd: `var(--space-xl)` }}
      >
        <Link to="/" style={{ textDecoration: `none` }}>
          <h2
            className="title text--xxxl"
            style={{
              margin: `var(--space-xl) 0`,
              marginBottom: `0`,
              fontStyle: `italic`,
              textAlign: `center`,
            }}
          >
            {title}
          </h2>

          <h4 style={{ textAlign: `center`, marginBottom: `var(--space-xl)` }}>
            {description}
          </h4>
        </Link>
        <nav>
          <MenuBtn />
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="container padding">
        <hr className="hr" />
        <section style={{ marginBottom: `var(--space-xl)` }}>
          <EmailCaptureForm />
        </section>
        <Link to="/" style={{ textDecoration: `none` }}>
          <h2
            className="title text--xxl"
            style={{
              margin: `var(--space-xl) 0`,
              marginBottom: `0`,
              fontStyle: `italic`,
              textAlign: `center`,
            }}
          >
            {title}
          </h2>
          <h4
            className="text--sm"
            style={{ textAlign: `center`, marginBottom: `var(--space-xl)` }}
          >
            {description}
          </h4>
        </Link>
        <section style={{ marginBottom: `var(--space-xl)` }}>
          <MenuBtn />
        </section>
      </footer>
    </div>
  )
}

export default Layout
