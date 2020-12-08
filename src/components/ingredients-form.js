import React from "react"

import { AWS_ASSOCIATE_ID } from "../utils/constants"

export default function IngredientsForm({ children }) {
  return (
    <form
      method="GET"
      action="https://www.amazon.com/gp/aws/cart/add.html"
      style={{ position: `relative` }}
    >
      <input type="hidden" name="AssociateTag" value={AWS_ASSOCIATE_ID} />
      {children}
      <br />
      <input
        style={{
          width: `100%`,
          margin: 0,
          fontFamily: `var(--serif)`,
        }}
        className="btn btn-primary"
        type="submit"
        name="add"
        value="Buy ingredients on Amazon"
      />
      <br />
      <br />
    </form>
  )
}
