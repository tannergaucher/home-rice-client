import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Layout, SEO, IngredientsForm, Ingredient } from "../components"

export default function RecipeTemplate({ data, location }) {
  const recipe = data.mdx

  return (
    <Layout>
      <SEO
        title={recipe.frontmatter.title}
        description={recipe.frontmatter.description}
      />
      <article className="page padding">
        <h1>{recipe.frontmatter.title}</h1>
        <IngredientsForm>
          {recipe.frontmatter.ingredients.map((ingredient, i) => (
            <Ingredient
              key={ingredient.ASIN}
              text={ingredient.text}
              ASIN={ingredient.ASIN}
              quantity={ingredient.quantity}
              order={i}
            />
          ))}
        </IngredientsForm>
        <MDXRenderer>{recipe.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query POST_MARKDOWN_QUERY($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      ...PostFragment
    }
  }
`
