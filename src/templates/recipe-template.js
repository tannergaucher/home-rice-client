import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import { Layout, SEO, IngredientsForm, Ingredient } from "../components"

export default function RecipeTemplate({ data, location }) {
  const recipe = data.mdx
  console.log(recipe)

  return (
    <Layout>
      <SEO
        title={recipe.frontmatter.title}
        description={recipe.frontmatter.description}
      />
      <article className="page padding container">
        <h1 style={{ textAlign: `center`, fontSize: `var(--text-xxxl)` }}>
          {recipe.frontmatter.title}
        </h1>
        <Img
          fluid={recipe.frontmatter.featuredImage.childImageSharp.fluid}
          style={{
            boxShadow: `var(--elevation-3)`,
          }}
        />
        <br />
        <h2 style={{ textAlign: `center`, fontSize: `var(--text-lg)` }}>
          {recipe.frontmatter.tastes.map(taste => (
            <span key={taste.taste}>
              <span>{taste.taste} </span>{" "}
              <span style={{ color: `var(--grey)` }}>{taste.from} </span> /{" "}
            </span>
          ))}
        </h2>
        <div className="container">
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
        </div>
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
