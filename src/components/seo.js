import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql, withPrefix } from 'gatsby'

function SEO({
  description,
  lang = `en`,
  meta = [],
  keywords = [],
  title,
  ogImage,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description

        const imageIncluded = []

        if (ogImage) {
          imageIncluded.push({
            name: `twitter:image`,
            content: `https://lannonbr.com/og-images/blog/${ogImage}.png`,
          })
        }

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
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
                content: data.site.siteMetadata.author,
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
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          >
            <link
              rel="shortcut icon"
              type="image/x-icon"
              href={withPrefix('/favicon.ico')}
            />
          </Helmet>
        )
      }}
    />
  )
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
