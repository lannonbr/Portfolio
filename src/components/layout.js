import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ location, children }) => (
  <div className="min-h-screen flex flex-col overflow-x-hidden">
    <Header location={location} />
    <main
      className="flex-grow flex-shrink-0 py-5 px-4 w-full mx-auto"
      style={{ maxWidth: 1600 }}
    >
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
