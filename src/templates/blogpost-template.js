import React from 'react'
import SEO from '../components/Utils/seo'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import { Home } from 'react-feather'

const BlogPostContainer = styled.article`
  max-width: 80rem;
  margin: 0 auto;

  figcaption {
    text-align: center;
    font-style: italic;
  }

  a.home {
    display: flex;
    align-items: center;

    & > svg {
      margin-right: 5px;
    }
  }
`

const BlogPost = ({ data }) => {
  return (
    <BlogPostContainer>
      <SEO
        title={data.mdx.frontmatter.title}
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
        description={data.mdx.frontmatter.description}
      />
      <Link
        className="home"
        to="/blog/"
        style={{
          marginBottom: 16,
        }}
      >
        <Home />
        Blog Home
      </Link>
      <h1 style={{ marginBottom: 8 }}>{data.mdx.frontmatter.title}</h1>
      <time style={{ display: 'block', marginBottom: 32 }}>
        {data.mdx.frontmatter.date}
      </time>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </BlogPostContainer>
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
    }
  }
`

export default BlogPost
