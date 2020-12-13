const path = require("path")
const fs = require("fs")
const fetch = require("node-fetch")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allVideo = await graphql(`
    query {
      allSanityVideo {
        edges {
          node {
            title
            subtitle
            ingredients {
              ASIN
              text
            }
            slug {
              current
            }
          }
        }
      }
    }
  `)

  // getAmazon()

  // async function getAmazon() {
  //   const res = await fetch(
  //     "https://amazon.com/associates/sitestripe/getShortUrl?longUrl=https%3A%2F%2Fwww.amazon.com%2FMae-Pranom-Cooking-Product-Thailand%2Fdp%2FB00CS96X84%2Fref%3Das_li_ss_tl%3Fdchild%3D1%26keywords%3Dprik%2Bnam%26qid%3D1607883563%26sr%3D8-3%26linkCode%3Dsl1%26tag%3Dtannergaucher-20%26linkId%3Dc22d1b3e204ddcdf6d87b8e866b05977%26language%3Den_US&marketplaceId=1"
  //   )

  //   console.log("res", res)

  //   const data = await res.json()

  //   console.log("data", data)
  // }

  getGuid()

  async function getGuid() {
    const res = await fetch("https://api-ssl.bitly.com/v4/groups", {
      method: "GET",
      headers: {
        Authorization: `Bearer c79746b203469267cc2b52a0be5bf31d1d5b03b1`,
        Accept: "application/json",
        Host: "api-ssl.bitly.com",
      },
    })

    const data = await res.json()

    console.log("data", data)
  }

  async function doStuff() {
    const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: `Bearer c79746b203469267cc2b52a0be5bf31d1d5b03b1`,
        Accept: "application/json",
      },
      body: {
        group_guid: "BkcdfNiwdNn",
        domain: "bit.ly",
        long_url:
          "https://www.amazon.com/gp/product/B00CS96X84/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00CS96X84&linkCode=as2&tag=tannergaucher-20",
      },
    })

    console.log(res)
  }

  doStuff()

  const videos = allVideo.data.allSanityVideo.edges

  videos.forEach(edge => {
    /* 
  Write YT description to a text file 
    
  Description
  
  Ingredients List

  Kit List

  Recommend 

  Closed caption comment
  */

    // Title
    fs.appendFile(
      `video-descriptions/${edge.node.slug.current}.txt`,
      `${edge.node.subtitle}`,

      function (err) {
        if (err) return console.log(err)
      }
    )

    fs.appendFile(
      `video-descriptions/${edge.node.slug.current}.txt`,
      `\r\n \r\n`,
      function (err) {
        if (err) return console.log(err)
      }
    )

    // Subtitle
    fs.appendFile(
      `video-descriptions/${edge.node.slug.current}.txt`,
      `${edge.node.subtitle}`,

      function (err) {
        if (err) return console.log(err)
      }
    )

    edge.node.ingredients.map(ingredient => {
      fs.appendFile(
        `video-descriptions/${edge.node.slug.current}.txt`,
        `${ingredient.text} LINK TODO`,

        function (err) {
          if (err) return console.log(err)
        }
      )

      fs.appendFile(
        `video-descriptions/${edge.node.slug.current}.txt`,
        `\r\n`,
        function (err) {
          if (err) return console.log(err)
        }
      )
    })

    createPage({
      path: `/${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/video-template.js`),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })
}
