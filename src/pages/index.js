import React from 'react'
import { graphql, Link } from 'gatsby'
import { SplitLayout } from '../components/Containers'

import SEO from '../components/Utils/seo'
import IllustrationImg from '../components/illustrationImg'

import office from '../images/office.svg'
import { Coffee } from 'react-feather'

import styled from 'styled-components'

const FrontpageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 70px;
  }

  p {
    font-size: 30px;
    line-height: 50px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
      text-align: center;
    }

    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO
      title="Home"
      keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
    />
    <SplitLayout>
      <FrontpageDiv>
        <h1>Hi all, I'm Benjamin</h1>
        <p>
          I'm a web developer in Upstate New York with a passion for exploration
          and continual learning.
        </p>
        <h2 style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Coffee style={{ marginRight: 5 }} />
          New Posts
        </h2>
        {data.newBlogposts.nodes.map(post => {
          return (
            <div style={{ marginBottom: 10 }}>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              <time
                dateTime={post.frontmatter.fullDate}
                style={{ marginLeft: 10 }}
              >
                {post.frontmatter.date}
              </time>
            </div>
          )
        })}
      </FrontpageDiv>
      <div>
        <IllustrationImg
          src={office}
          alt="Person sitting on desk illustration"
        />
      </div>
    </SplitLayout>
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
