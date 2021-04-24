const fs = require("fs")

const { YT_DESCRIPTIONS_DIRNAME } = require("./constants")
const getAmazonAffiliateLink = require("./get-amazon-affiliate-link")

function createYTDescription(edge) {
  const stream = fs.createWriteStream(
    `${YT_DESCRIPTIONS_DIRNAME}/${edge.node.slug.current}.txt`,
    {
      flags: "a",
    }
  )

  // subtitle should be named description
  stream.write(`${edge.node.title}. ${edge.node.subtitle}`)
  stream.write("\n")
  stream.write("\n")

  // TODO: check for ingredients length
  stream.write("*INGREDIENTS")
  stream.write("\n")

  edge.node.ingredients.forEach(ingredient => {
    if (ingredient.ASIN) {
      stream.write(
        `${ingredient.text} ${getAmazonAffiliateLink(ingredient.ASIN)}`
      )
      stream.write("\n")
    }
  })

  if (edge.node.gear.length) {
    stream.write("\n")
    stream.write("*GEAR")
    stream.write("\n")

    edge.node.gear.forEach(gear => {
      stream.write(`${gear.text} ${getAmazonAffiliateLink(gear.ASIN)}`)
      stream.write("\n")
    })
  }

  // View full post
  stream.write("\n")
  stream.write(`VIEW FULL POST`)
  stream.write("\n")
  stream.write(`https://homerice.app/${edge.node.slug.current}`)

  // Post body
  function toPlainText(blocks = []) {
    return blocks
      .map(block => {
        if (block._type !== "block" || !block.children) {
          return ""
        }

        return block.children.map(child => child.text).join("")
      })

      .join("\n\n")
  }

  // Write post body
  if (edge.node._rawBody) {
    stream.write("\n")
    stream.write("\n")

    const postText = toPlainText(edge.node._rawBody)

    stream.write(postText)
  }

  // Write Music credit
  if (edge.node.videoMusicCredit) {
    stream.write("\n")
    stream.write("\n")
    stream.write(edge.node.videoMusicCredit)
  }

  stream.write("\n")
  stream.write("\n")
  stream.write("*NOTE")
  stream.write("\n")
  stream.write(
    "Amazon affiliate links. This means the channel may earn a small commission from Amazon, at absolutely no extra cost to you."
  )

  stream.end()
}

module.exports = createYTDescription
