import React from 'react'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'

const LogolessLogo = () => (
  <div
    className="inline-block w-6 h-6 rounded-full mr-2"
    style={{
      backgroundImage: 'linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)',
    }}
  />
)

const BlogIndexPage = ({ data }) => {
  return (
    <>
      <SEO
        title="Blog"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <h1>Blog</h1>
      <div className="">
        {data.allMdx.nodes.map((node) => {
          const logo =
            node.frontmatter.logo &&
            data.blogLogos.nodes.filter(
              (logo) => logo.name === node.frontmatter.logo
            )[0].publicURL

          return (
            <Link
              key={node.fields.slug}
              to={node.fields.slug}
              className="inline-block flex items-center py-2 px-3 text-xl rounded-sm transition-all duration-200 ease-in-out hover:text-purple-700 hover:bg-purple-100 mb-3"
            >
              {node.frontmatter.logo ? (
                <img src={logo} alt="" className="w-6 mr-2" />
              ) : (
                <LogolessLogo />
              )}
              <span>{node.frontmatter.title}</span>
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
    blogLogos: allFile(filter: { relativePath: { regex: "/^blog-icons/" } }) {
      nodes {
        name
        publicURL
      }
    }

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
          logo
        }
      }
    }
  }
`
