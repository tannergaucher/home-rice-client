import React from "react"

import getAmazonAffiliateLink from "../utils/get-amazon-affiliate-link"

export default function IngredientsFormItem({ ingredient, order, optional }) {
  console.log(`optional`, optional)
  return (
    <>
      {ingredient.ASIN ? (
        <a
          href={getAmazonAffiliateLink(ingredient.ASIN)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <input type="hidden" name={`ASIN.${order}`} value={ingredient.ASIN} />
          <input type="hidden" name={`Quantity.${order}`} value={1} />
          <li style={{ textDecoration: `none` }}>
            {ingredient.text}{" "}
            {optional && (
              <span className="text--sm" style={{ color: `var(--grey)` }}>
                optional
              </span>
            )}
          </li>
        </a>
      ) : (
        <li style={{ textDecoration: `none` }}>
          {ingredient.text}{" "}
          {optional && (
            <span className="text--sm" style={{ color: `var(--grey)` }}>
              optional
            </span>
          )}
        </li>
      )}
    </>
  )
}
