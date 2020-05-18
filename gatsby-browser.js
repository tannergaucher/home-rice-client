import React from "react"
import { MDXProvider } from "@mdx-js/react"

import {
  SEO,
  IngredientsForm,
  Ingredient,
  Layout,
  Step,
} from "./src/components"

const components = {
  SEO,
  IngredientsForm,
  Ingredient,
  Layout,
  Step,
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
