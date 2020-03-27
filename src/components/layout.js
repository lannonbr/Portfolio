import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'

const LayoutContainer = styled.div`
  main a {
    color: var(--bodyLink);
    text-decoration: none;
  }
`

const Layout = ({ location, children }) => (
  <LayoutContainer className="min-h-screen flex flex-col overflow-x-hidden">
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
