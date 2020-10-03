/** @jsx h */
import { h } from 'preact'
import { Helmet } from 'react-helmet'

function SEO({ description, lang = `en`, meta = [], title, ogImage }) {
  const metaDescription = description

  const imageIncluded = []

  if (ogImage) {
    imageIncluded.push({
      name: `twitter:image`,
      content: `https://lannonbr.com/og-images/blog/${ogImage}.jpg`,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Benjamin Lannon`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: ogImage ? `summary_large_image` : `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'lannonbr',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...imageIncluded,
      ].concat(meta)}
    />
  )
}

export default SEO
