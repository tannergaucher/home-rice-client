import React from "react"

export default function EmailCaptureForm() {
  return (
    <div className="card">
      <br />
      <div className="container padding">
        <h3 className="text--xl" style={{ textAlign: `center` }}>
          Get the freshest inside rice, delivered to your inbox every month.
        </h3>
        <form
          className="form"
          name="email-capture"
          method="POST"
          data-netlify="true"
          action="/thanks"
        >
          <input
            className="input"
            type="email"
            placeholder="Email"
            required={true}
            aria-label="Email"
            name="newsletter-subscriber"
          />
          <input type="hidden" name="form-name" value="email-capture" />
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </form>
        <br />
      </div>
    </div>
  )
}
