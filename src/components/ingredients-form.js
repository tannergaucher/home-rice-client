import React from "react"

import { AWS_ASSOCIATE_ID } from "../utils/constants"

export default function IngredientsForm({ ingredients, children }) {
  const amazonIngredients = ingredients.filter(
    ingredient => ingredient.ASIN !== null
  )

  return (
    <form method="GET" action="https://www.amazon.com/gp/aws/cart/add.html">
      {!amazonIngredients && <hr className="hr" />}
      {amazonIngredients && (
        <>
          <button
            style={{
              width: `100%`,
              marginBottom: `0`,
              marginTop: `var(--space-md)`,
            }}
            className="btn btn-primary"
            type="submit"
            name="add"
          >
            Ingredients on Amazon
          </button>
          <input type="hidden" name="AssociateTag" value={AWS_ASSOCIATE_ID} />
          <hr className="hr" />
        </>
      )}
      <ul>{children}</ul>
    </form>
  )
}
