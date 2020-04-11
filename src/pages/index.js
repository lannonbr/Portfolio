import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import IllustrationImg from '../components/illustrationImg'

import office from '../images/office.svg'
import { ChevronRight } from 'react-feather'

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
          <Link
            to="/blog/"
            className="flex items-center transform transition-transform duration-200 hover:translate-x-1"
          >
            All Posts
            <ChevronRight className="h-5 w-5 relative right-0 " />
          </Link>
        </div>
        {data.newBlogposts.nodes.map((post) => {
          return (
            <div className="mb-3">
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
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
    newBlogposts: allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`
