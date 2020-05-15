import React from "react"

import { Layout, SEO } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IngredientsForm>
      <Ingredient
        text="Holy Basil Seasoning Paste"
        ASIN="B000EONW02"
        quantity="1"
        order="1"
      />
      <li>Test</li>
    </IngredientsForm>
  </Layout>
)

export default IndexPage

const IngredientsForm = ({ children }) => {
  return (
    <form method="GET" action="https://www.amazon.com/gp/aws/cart/add.html">
      <input type="hidden" name="AWSAccessKeyId" value="Access Key ID" />
      <input type="hidden" name="AssociateTag" value="Associate Tag" />
      {children}
      <input
        className="btn"
        type="submit"
        name="add"
        value="Add to Amazon Cart"
      />
    </form>
  )
}

const Ingredient = ({ text, quantity, ASIN, order }) => {
  return (
    <>
      <input type="hidden" name={`ASIN.${order}`} value={ASIN} />
      <input type="hidden" name={`Quantity.${order}`} value={quantity} />
      <li>{text}</li>
    </>
  )
}
