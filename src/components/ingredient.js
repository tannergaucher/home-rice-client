import React from "react"

export default function Ingredient({ text, quantity, ASIN, order }) {
  return (
    <>
      <input type="hidden" name={`ASIN.${order}`} value={ASIN} />
      <input type="hidden" name={`Quantity.${order}`} value={quantity} />
      <li style={{ textDecoration: `none` }}>{text}</li>
    </>
  )
}
