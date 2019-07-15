import React from 'react'
import SEO from '../components/Utils/seo'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

const StyledBlogPostCard = styled(Link)`
  background-image: linear-gradient(
    0deg,
    hsl(272.6, 64.5%, 42%) 1%,
    hsl(290.7, 50.2%, 52%) 72%
  );
  /* width: 500px; */
  height: 300px;
  display: inline-block;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 20px 80px;
  transition: transform 200ms ease-in-out 0s, box-shadow 200ms ease-in-out 0s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 20px 80px;
  }

  &.link {
    color: white;
    font-size: 24px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;

    time {
      margin-top: 10px;
      font-size: 18px;
    }
  }
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`

const BlogIndexPage = ({ data }) => {
  return (
    <>
      <SEO
        title="Blog"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <h1>Blog</h1>
      <h2>All Posts</h2>
      <BlogGrid>
        {data.allMdx.nodes.map(node => {
          return (
            <StyledBlogPostCard
              key={node.fields.slug}
              to={node.fields.slug}
              className="link"
            >
              {node.frontmatter.title}
              <time>{node.frontmatter.date}</time>
            </StyledBlogPostCard>
          )
        })}
      </BlogGrid>
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
