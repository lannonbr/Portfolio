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

  box-shadow: rgba(0, 0, 0, 0.16) 0px 20px 80px;
  transition: transform 200ms ease-in-out 0s, box-shadow 200ms ease-in-out 0s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 20px 80px;
  }

  &.link {
    color: white;
  }
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
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.allMdx.nodes.map(node => {
          return (
            <StyledBlogPostCard
              key={node.fields.slug}
              to={node.fields.slug}
              className="link inline-block h-64 rounded-md flex flex-col justify-end pb-5 px-3 text-2xl"
            >
              {node.frontmatter.title}
              <time className="text-lg mt-3">{node.frontmatter.date}</time>
            </StyledBlogPostCard>
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
