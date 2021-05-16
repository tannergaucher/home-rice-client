export default function getSortedIngredients(ingredients) {
  const withImage = []
  const noImage = []

  ingredients.map(ingredient => {
    if (ingredient.image) {
      withImage.push(ingredient)
    } else {
      noImage.push(ingredient)
    }
  })

  return [...withImage, ...noImage]
}
