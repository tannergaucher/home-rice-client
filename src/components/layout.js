import React from "react"
import { Link } from "gatsby"
import "semantic-styles"
import "@semantic-styles/reach-ui"

import "../index.css"

import { EmailCaptureForm, Nav } from "../components"
import useSiteMetadata from "../hooks/use-site-metadata"

export default function Layout({ children }) {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <header
        className="container padding"
        style={{ marginBlockEnd: `var(--space-xl)` }}
      >
        <Link
          className="brand-text-shadow"
          to="/"
          style={{ textDecoration: `none` }}
        >
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

          <h3
            style={{
              textAlign: `center`,
              marginBottom: `var(--space-xl)`,
              textShadow: `none`,
            }}
          >
            {description}
          </h3>
        </Link>
        <Nav />
      </header>
      <main className="main">{children}</main>
      <footer className="container padding">
        <hr className="hr" />
        <section style={{ marginBottom: `var(--space-xl)` }}>
          <EmailCaptureForm />
        </section>
        <hr className="hr" />
        <Link
          className="brand-text-shadow"
          to="/"
          style={{ textDecoration: `none` }}
        >
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
          <h3
            style={{
              textAlign: `center`,
              marginBottom: `var(--space-xl)`,
              textShadow: `none`,
            }}
          >
            {description}
          </h3>
        </Link>
        <section style={{ marginBottom: `var(--space-xl)` }}>
          <Nav />
        </section>
      </footer>
    </div>
  )
}
