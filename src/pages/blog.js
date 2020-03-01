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
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.allMdx.nodes.map(node => {
          return (
            <Link
              key={node.fields.slug}
              to={node.fields.slug}
              className="inline-block h-64 rounded-md flex flex-col justify-end pb-5 px-3 text-2xl shadow-xl hover:shadow-2xl transition-all duration-200 ease-in-out transform translate-y-0 hover:-translate-y-1"
              style={{
                color: 'white',
                backgroundImage:
                  'linear-gradient(0deg, hsl(272.6, 64.5%, 42%) 1%, hsl(290.7, 50.2%, 52%) 72%)',
              }}
            >
              {node.frontmatter.title}
              <time className="text-lg mt-3">{node.frontmatter.date}</time>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default BlogIndexPage

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
