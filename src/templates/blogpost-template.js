import React from 'react'
import SEO from '../components/Utils/seo'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Home } from 'react-feather'

const BlogPost = ({ data }) => {
  return (
    <article className="max-w-6xl mx-auto">
      <SEO
        title={data.mdx.frontmatter.title}
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
        description={data.mdx.frontmatter.description}
        ogImage={data.mdx.fields.ogFileName}
      />
      <Link className="flex items-center mb-4" to="/blog/">
        <Home className="mr-2" />
        Blog Home
      </Link>
      <h1 style={{ marginBottom: 8 }}>{data.mdx.frontmatter.title}</h1>
      <time style={{ display: 'block', marginBottom: 32 }}>
        {data.mdx.frontmatter.date}
      </time>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </article>
  )
}

export const PageQuery = graphql`
  query MDXPageQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "ll")
        keywords
        description
      }
      fields {
        ogFileName
      }
    }
  }
`

export default BlogPost
