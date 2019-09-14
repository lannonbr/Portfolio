import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Home, ArrowLeft } from 'react-feather'
import Layout from './layout'
import useOptions from 'gatsby-theme-notes/src/use-options'

const NavigationLink = styled(Link)`
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
  let backPath = props.path
    .split('/')
    .slice(0, -1)
    .join('/')

  const options = useOptions()
  return (
    <Layout {...props}>
      <div
        style={{
          display: 'flex',
        }}
      >
        {backPath !== options.basePath && (
          <NavigationLink to={backPath} style={{ marginRight: 20 }}>
            <ArrowLeft />
            Back
          </NavigationLink>
        )}
        <NavigationLink to={options.basePath}>
          <Home />
          Notes Home
        </NavigationLink>
      </div>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default WikiPage
