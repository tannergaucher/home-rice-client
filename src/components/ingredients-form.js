import React from "react"

import { AWS_ASSOCIATE_ID } from "../utils/constants"

export default function IngredientsForm({ children }) {
  return (
<<<<<<< HEAD
    <form
      method="GET"
      action="https://www.amazon.com/gp/aws/cart/add.html"
      style={{ position: `relative` }}
    >
      <input type="hidden" name="AssociateTag" value={AWS_ASSOCIATE_ID} />
      {children}
      <input
        style={{
          width: `100%`,
          margin: 0,
          marginTop: `var(--space-lg)`,
          fontFamily: `var(--serif)`,
        }}
        className="btn btn-primary"
        type="submit"
        name="add"
        value="Buy on Amazon"
      />
    </form>
=======
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
>>>>>>> 3b18810e38cf00a733d742a02eb447b3c0685fb4
  )
}
