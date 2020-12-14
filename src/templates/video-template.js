import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import { Link } from "gatsby"

import { Layout, SEO, IngredientsForm, Ingredient, Brand } from "../components"

export default function RecipeTemplate({ data }) {
  return (
    <Layout>
      <SEO
        title={`${data.sanityVideo.title}`}
        description={data.sanityVideo.subtitle}
      />
      <article className="page">
        <div className="responsive-container">
          <iframe
            title={data.sanityVideo.title}
            className="responsive-iframe"
            id="player"
            type="text/html"
            src={`https://www.youtube.com/embed/${data.sanityVideo.youtubeVideoId}?enablejsapi=1&origin=https://tg-platform.netlify.app&cc_load_policy=1&autoplay=1&rel=0`}
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className="container">
          <section className="container  only-mobile-padding ">
            <h1 className="title" style={{ marginBlockEnd: `var(--space-md)` }}>
              {data.sanityVideo.title}
            </h1>
            <h2 className="text--md subtitle" style={{ marginBlockStart: 0 }}>
              {" "}
              {data.sanityVideo.subtitle}
            </h2>
            <hr />
            <IngredientsForm>
              <ul>
                {data.sanityVideo.ingredients.map((ingredient, i) => (
                  <Ingredient
                    key={ingredient.id}
                    ingredient={ingredient}
                    order={i + 1}
                  />
                ))}
              </ul>
            </IngredientsForm>

            {/* <a
            href={`https://www.youtube.com/watch?v=${data.sanityVideo.youtubeVideoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="btn"
              style={{ width: `100%`, fontFamily: `var(--serif)` }}
            >
              Watch on YouTube
            </button>
          </a> */}
            {/* {isShare && (
            <a href="">
              <button
                className="btn"
                style={{ width: `100%`, fontFamily: `var(--serif)` }}
                onClick={e => {
                  e.preventDefault()
                  if (window.navigator.share) {
                    window.navigator.share({
                      title: data.sanityVideo.title,
                      text: data.sanityVideo.title,
                      url: window.location.origin,
                    })
                  }
                }}
              >
                Share Link
              </button>\
            </a>
          )} */}
            <hr />
            <section>
              <BlockContent blocks={data.sanityVideo._rawBody} />
            </section>
            <hr />
          </section>
        </div>
        <section>
          <Link to="/">
            <Brand />
          </Link>
        </section>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query VIDEO_QUERY($slug: String!) {
    sanityVideo(slug: { current: { eq: $slug } }) {
      title
      subtitle
      _rawBody
      youtubeVideoId
      ingredients {
        id
        text
        ASIN
      }
    }
  }
`
