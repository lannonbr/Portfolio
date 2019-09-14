/** @jsx jsx */

import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Home, ArrowLeft } from 'react-feather'
import Layout from './layout'
import useOptions from 'gatsby-theme-notes/src/use-options'
import { jsx } from 'theme-ui'

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
          <NavigationLink
            to={backPath}
            css={{
              marginRight: 20,
              borderBottom: '2px solid transparent',
              ':hover': {
                borderBottomColor: 'var(--blueLink)',
              },
            }}
          >
            <ArrowLeft />
            Back
          </NavigationLink>
        )}
        <NavigationLink
          to={options.basePath}
          css={{
            marginRight: 20,
            borderBottom: '2px solid transparent',
            ':hover': {
              borderBottomColor: 'var(--blueLink)',
            },
          }}
        >
          <Home />
          Notes Home
        </NavigationLink>
      </div>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default WikiPage
