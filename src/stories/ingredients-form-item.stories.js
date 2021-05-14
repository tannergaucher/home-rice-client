import React from "react"

import { IngredientsFormItem } from "../components"

export default {
  title: "Components/Ingredients-Form-Item",
  component: IngredientsFormItem,
}

const Template = args => {
  return <IngredientsFormItem {...args} />
}

export const AmazonIngredient = Template.bind({})

AmazonIngredient.args = {
  ingredient: {
    ASIN: "B084ZWPRKS",
    _id: "07e07edd-f89d-45f4-9221-7292c4f254ed",
    text: "Tamarind",
    slug: { current: "tamarind" },
    image: null,
  },
  order: 1,
  optional: false,
}

export const OptionalAmazonIngredient = Template.bind({})
OptionalAmazonIngredient.args = {
  ingredient: {
    ASIN: "B084ZWPRKS",
    _id: "07e07edd-f89d-45f4-9221-7292c4f254ed",
    text: "Tamarind",
    slug: { current: "tamarind" },
    image: null,
  },
  order: 2,
  optional: true,
}

export const NonAmazonIngredient = Template.bind({})

NonAmazonIngredient.args = {
  ingredient: {
    ASIN: null,
    _id: "07e07edd-f89d-45f4-9221-7292c4f254ed",
    text: "Tamarind",
    slug: { current: "tamarind" },
    image: null,
  },
  order: 3,
  optional: false,
}

export const OptionalNonAmazonIngredient = Template.bind({})
OptionalNonAmazonIngredient.args = {
  ingredient: {
    ASIN: null,
    _id: "07e07edd-f89d-45f4-9221-7292c4f254ed",
    text: "Tamarind",
    slug: { current: "tamarind" },
    image: null,
  },
  order: 4,
  optional: true,
}
