import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import IllustrationImg from '../components/illustrationImg'

import office from '../images/office.svg'
import { ChevronRight } from 'react-feather'

const LogolessLogo = () => (
  <div
    className="inline-block w-6 h-6 rounded-full mr-2"
    style={{
      backgroundImage: 'linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)',
    }}
  />
)

const IndexPage = ({ data }) => (
  <>
    <SEO
      title="Home"
      keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
    />
    <section className="md:grid md:grid-cols-2 md:gap-8 mb-4">
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-4xl md:text-left md:text-6xl">
          Hi all, I'm Benjamin
        </h1>
        <p className="lg:text-xl md:leading-loose">
          I'm a web developer in Upstate New York with a passion for exploration
          and continual learning.
        </p>
        <div className="inline-flex items-baseline justify-between">
          <h2>New Posts</h2>
          <Link to="/blog/" className="flex items-center group">
            All Posts
            <ChevronRight className="h-5 w-5 relative right-0 transform transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
        {data.newBlogposts.nodes.map((post) => {
          const logo =
            post.frontmatter.logo &&
            data.blogLogos.nodes.filter(
              (logo) => logo.name === post.frontmatter.logo
            )[0].publicURL

          return (
            <div className="mb-3">
              <Link
                to={post.fields.slug}
                className="rounded py-2 px-3 flex items-center transition-all duration-200 ease-in-out hover:text-purple-700 hover:bg-purple-100 dark-hover:bg-cyan-transparent dark-hover:text-cyan-light hover:no-underline"
              >
                {post.frontmatter.logo ? (
                  <img src={logo} alt="" className="w-6 mr-4" />
                ) : (
                  <LogolessLogo />
                )}
                {post.frontmatter.title}
              </Link>
            </div>
          )
        })}
      </div>
      <div className="hidden md:block">
        <IllustrationImg
          src={office}
          alt="Person sitting on desk illustration"
        />
      </div>
    </section>
  </>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    blogLogos: allFile(filter: { relativePath: { regex: "/^blog-icons/" } }) {
      nodes {
        name
        publicURL
      }
    }

    newBlogposts: allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
      nodes {
        frontmatter {
          title
          logo
        }
        fields {
          slug
        }
      }
    }
  }
`
