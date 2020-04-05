import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col overflow-x-hidden">
    <Header />
    <main className="flex-grow flex-shrink-0 py-5 px-4 w-full mx-auto max-w-7xl">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
