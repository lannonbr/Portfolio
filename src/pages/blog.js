import React from 'react'
import SEO from '../components/Utils/seo'
import { graphql, Link } from 'gatsby'

const BlogIndexPage = ({ data }) => {
  return (
    <>
      <SEO
        title="Blog"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <h1>Blog</h1>
      <h2>All Posts</h2>
      <ul>
        {data.allMdx.nodes.map(node => {
          console.log(node)
          return (
            <li>
              <Link to={node.fields.slug}>
                {node.frontmatter.title} - {node.frontmatter.date}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default BlogIndexPage

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "ll")
        }
      }
    }
  }
`
