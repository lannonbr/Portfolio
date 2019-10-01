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

const NewBlogComponent = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  border: 1px solid #d1d5da;
  display: inline-block;
  padding: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;

  a {
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO
      title="Home"
      keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
    />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <NewBlogComponent>
        <Coffee style={{ marginRight: 5 }} />
        New Blogpost:{' '}
        <Link to={data.newestBlogpost.nodes[0].fields.slug}>
          {data.newestBlogpost.nodes[0].frontmatter.title}
        </Link>
      </NewBlogComponent>
    </div>
    <SplitLayout>
      <FrontpageDiv>
        <h1>Hi all, I'm Benjamin</h1>
        <p>
          I'm a web developer in Upstate New York with a passion for exploration
          and continual learning.
        </p>
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
    newestBlogpost: allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
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
