import React from "react"

import { Layout } from "../components"

export default function ThanksPage() {
  return (
    <Layout>
      <div className="container padding">
        <h1 style={{ textAlign: `center` }}>Thanks for Signing Up!</h1>
        <br />
        <button
          className="btn btn-primary"
          style={{ width: `100%` }}
          onClick={() => {
            if (window.history) {
              window.history.back()
            }
          }}
        >
          Go Back to Previous Page
        </button>
      </div>
    </Layout>
  )
}
