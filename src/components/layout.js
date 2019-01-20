import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

import styled from 'styled-components'

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1 0 auto;
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    padding: 20px 0;
  }

  main a {
    color: #2574a9;
    text-decoration: none;
  }

  main a:hover {
    text-decoration: underline;
  }

  footer {
    flex-shrink: 0;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </LayoutContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
