import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Home } from 'react-feather'
import Layout from './layout'
import useOptions from 'gatsby-theme-notes/src/use-options'

const HomeLink = styled(Link)`
  margin-bottom: 16px;

  && {
    display: flex;
    align-items: center;
  }

  & > svg {
    margin-right: 5px;
  }
`

const WikiPage = ({
  data: {
    note: { body },
  },
  ...props
}) => {
  const options = useOptions()
  return (
    <Layout {...props}>
      <HomeLink to={options.basePath}>
        <Home />
        Notes Home
      </HomeLink>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default WikiPage
