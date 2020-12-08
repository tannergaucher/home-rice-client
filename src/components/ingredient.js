import React from "react"
import { AWS_ASSOCIATE_ID } from "../utils/constants"

export default function Ingredient({ ingredient, order }) {
  return (
    <>
      {ingredient.ASIN ? (
        <li style={{ marginBottom: `var(--space-md)` }}>
          <a
            href={`https://www.amazon.com/gp/product/${ingredient.ASIN}/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=${ingredient.ASIN}&linkCode=as2&tag=${AWS_ASSOCIATE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            s
          >
            <input
              type="hidden"
              name={`ASIN.${order}`}
              value={ingredient.ASIN}
            />
            {/* TODO dynamic quantity */}
            <input type="hidden" name={`Quantity.${order}`} value={1} />
            <li style={{ textDecoration: `none` }}>{ingredient.text}</li>
          </a>
        </li>
      ) : (
        <li style={{ textDecoration: `none` }}>{ingredient.text}</li>
      )}
    </>
  )
}
