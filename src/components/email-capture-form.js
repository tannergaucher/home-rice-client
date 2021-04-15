import React from "react"

export default function EmailCaptureForm() {
  return (
    <div className="card">
      <br />
      <div className="container padding">
        <h3 className="text--xl">
          Get the latest inside rice, fresh to your inbox every month.
        </h3>
        <form
          className="form"
          action=""
          name="capture-form"
          method="POST"
          data-netlify="true"
        >
          <input
            type="text"
            className="input"
            placeholder="Email"
            required="true"
            name="email"
          />
          <button className="btn btn-primary" type="submit">
            Sign up
          </button>
        </form>
        <br />
      </div>
    </div>
  )
}
