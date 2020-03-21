import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import IllustrationImg from '../components/illustrationImg'

import office from '../images/office.svg'
import { Coffee } from 'react-feather'

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
        <h2 className="inline-flex items-center">
          <Coffee className="mr-3" />
          New Posts
        </h2>
        {data.newBlogposts.nodes.map(post => {
          return (
            <div className="mb-2">
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              <time dateTime={post.frontmatter.fullDate} className="ml-3">
                {post.frontmatter.date}
              </time>
            </div>
          )
        })}
      </div>
      <div>
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
          date(formatString: "ll")
          fullDate: date
        }
        fields {
          slug
        }
      }
    }
  }
`
