import React from 'react'
import SEO from '../components/Utils/seo'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Home } from 'react-feather'

const Note = ({ data }) => {
  return (
    <article className="max-w-6xl mx-auto">
      <SEO
        title={data.file.relativePath.slice(0, -3)}
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <Link className="flex items-center mb-4" to="/notes/">
        <Home className="mr-2" />
        Notes Home
      </Link>
      <MDXRenderer>{data.file.childMdx.body}</MDXRenderer>
    </article>
  )
}

export const PageQuery = graphql`
  query NotePageQuery($pagePath: String!) {
    file(relativePath: { eq: $pagePath }) {
      relativePath
      childMdx {
        body
      }
    }
  }
`

export default Note
