import React from 'react'
import styled from 'styled-components'
import Header from 'gatsby-theme-lannonbr/src/components/header'
import Footer from 'gatsby-theme-lannonbr/src/components/footer'
import GlobalStyles from 'gatsby-theme-lannonbr/src/utils/globalStyles'

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  main {
    flex: 1 0 auto;
  }
  main a {
    color: var(--bodyLink);
    text-decoration: none;
  }
  > header,
  main {
    padding: 20px 10px;
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;
  }
  footer {
    flex-shrink: 0;
  }
`

const Layout = ({ location, children }) => (
  <LayoutContainer>
    <GlobalStyles />
    <Header location={location} />
    <main>{children}</main>
    <Footer />
  </LayoutContainer>
)

export default Layout
