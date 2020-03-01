import React from 'react'
import styled from 'styled-components'
import Header from 'gatsby-theme-lannonbr/src/components/header'
import Footer from 'gatsby-theme-lannonbr/src/components/footer'
import GlobalStyles from 'gatsby-theme-lannonbr/src/utils/globalStyles'

const LayoutContainer = styled.div`
  main a {
    color: var(--bodyLink);
    text-decoration: none;
  }

  > header {
    padding: 20px 10px;
    max-width: 1600px;
    width: 100%;
    margin: 0 auto;
  }
`

const Layout = ({ location, children }) => (
  <LayoutContainer className="min-h-screen flex flex-col overflow-x-hidden">
    <GlobalStyles />
    <Header location={location} />
    <main
      className="flex-grow flex-shrink-0 py-5 px-2 w-full mx-auto"
      style={{ maxWidth: 1600 }}
    >
      {children}
    </main>
    <Footer />
  </LayoutContainer>
)

export default Layout
