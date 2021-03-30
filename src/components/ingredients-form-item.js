import React from "react"

import getAmazonAffiliateLink from "../utils/get-amazon-affiliate-link"

export default function IngredientsFormItem({
  ingredient,
  order,
  optional,
  gearItem,
}) {
  return (
    <div style={{ display: `flex`, justifyContent: `` }}>
      {ingredient && ingredient.ASIN && (
        <a
          href={getAmazonAffiliateLink(ingredient.ASIN)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {gearItem === undefined && (
            <>
              <input
                type="hidden"
                name={`ASIN.${order}`}
                value={ingredient.ASIN}
              />
              <input type="hidden" name={`Quantity.${order}`} value={1} />
            </>
          )}

          <li style={{ textDecoration: `none` }}>{ingredient.text} </li>
        </a>
      )}

      {ingredient && !ingredient.ASIN && gearItem !== true && (
        <li style={{ textDecoration: `none` }}>{ingredient.text}</li>
      )}

      {optional && (
        <small
          style={{
            color: `var(--grey)`,
            marginLeft: `8px`,
            fontStyle: `italic`,
          }}
        >
          optional
        </small>
      )}
    </div>
  )
}
