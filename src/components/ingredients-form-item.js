import React from "react"

import getAmazonAffiliateLink from "../utils/get-amazon-affiliate-link"

export default function IngredientsFormItem({ ingredient, order }) {
  return (
    <ul>
      {ingredient.ASIN ? (
        <li style={{ marginBottom: `var(--space-md)` }}>
          <a
            href={getAmazonAffiliateLink(ingredient.ASIN)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <input
              type="hidden"
              name={`ASIN.${order}`}
              value={ingredient.ASIN}
            />
            <input type="hidden" name={`Quantity.${order}`} value={1} />
            <li style={{ textDecoration: `none` }}>{ingredient.text}</li>
          </a>
        </li>
      ) : (
        <li style={{ textDecoration: `none` }}>{ingredient.text}</li>
      )}
    </ul>
  )
}