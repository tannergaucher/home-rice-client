import React from "react"

export default function IngredientsForm({ children }) {
  return (
    <>
      <hr />
      <h2>Ingredients </h2>
      <br />
      <form
        className="form"
        method="GET"
        action="https://www.amazon.com/gp/aws/cart/add.html"
      >
        <input type="hidden" name="AWSAccessKeyId" value="Access Key ID" />
        <input type="hidden" name="AssociateTag" value="Associate Tag" />
        {children}
        <br />
        <input
          className="btn btn-primary"
          type="submit"
          name="add"
          value="Order On Amazon"
          style={{
            marginTop: `var(--space-md)`,
            marginBottom: `var(--space-lg)`,
          }}
        />
      </form>
    </>
  )
}
