import React from "react"

import { IngredientsForm } from "../components"

export default {
  title: "Components/Ingredients-Form",
  component: IngredientsForm,
}

const Template = args => {
  return <IngredientsForm {...args} />
}

export const WithAmazonItems = Template.bind({})

WithAmazonItems.args = {
  ingredients: [
    {
      ASIN: "B00LHD44BK",
      image: null,
      slug: { current: "thai-dried-bird-s-eye-chili-flakes-or-prik-kee-noo" },
      text: "Thai Dried Bird's Eye Chili Flakes | Prik Kee Noo| พริกขี้หนู",
      _id: "cc164eb7-dc83-4031-baa1-c4bc5f1b060f",
    },
    {
      ASIN: "B07NXS2KLF",
      image: { asset: null },
      slug: { current: "toasted-sticky-rice-powder-or-khao-kua" },
      text: "Toasted Sticky Rice Powder | Khao Kua | ข้าวคั่ว",
      _id: "f3ccfc50-b51f-4cae-9252-40df521b4e48",
    },
  ],
  optionalIngredients: [
    {
      ASIN: "B01439WXJY",
      image: null,
      slug: { current: "soy-sauce" },
      text: "Soy Sauce",
      _id: "74740ce7-560f-47f2-9608-f367cbd1fd23",
    },
  ],
}

export const WithNoAmazonItems = Template.bind({})
WithNoAmazonItems.args = {
  ingredients: [
    {
      ASIN: null,
      image: null,
      slug: { current: "thai-dried-bird-s-eye-chili-flakes-or-prik-kee-noo" },
      text: "Thai Dried Bird's Eye Chili Flakes | Prik Kee Noo| พริกขี้หนู",
      _id: "cc164eb7-dc83-4031-baa1-c4bc5f1b060f",
    },
    {
      ASIN: null,
      image: { asset: null },
      slug: { current: "toasted-sticky-rice-powder-or-khao-kua" },
      text: "Toasted Sticky Rice Powder | Khao Kua | ข้าวคั่ว",
      _id: "f3ccfc50-b51f-4cae-9252-40df521b4e48",
    },
  ],
}
