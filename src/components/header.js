import React, { useState, useEffect } from 'react'
import Navigation from './navigation.js'

const Header = () => {
  const [mode, setMode] = useState('light')

  useEffect(() => {
    if ([...document.documentElement.classList].includes('mode-dark')) {
      setMode('dark')
    }
  }, [])

  return (
    <div
      className="bg-rebecca-purple-lightest dark:bg-cyan-transparent md:bg-transparent mb-8 md:mb-0"
      style={{
        gridColumn: '1 / span 4',
      }}
    >
      <header className="pb-5 pt-2 md:pt-5 px-4 shadow-lg w-full max-w-7xl mx-auto grid items-center md:shadow-none">
        <h1 className="text-2xl md:text-3xl m-0">
          <a
            className="h-full no-underline bg-repeat bg-scroll bg-left-top bg-clip-text bg-transparent"
            style={{
              backgroundOrigin: 'padding-box',
              backgroundImage:
                mode !== 'dark'
                  ? 'linear-gradient(to right, #9d50bb, #6e48aa)'
                  : 'linear-gradient(to left, #50c9c3, #96deda)',
              WebkitTextFillColor: 'transparent',
            }}
            href="/"
          >
            Benjamin Lannon
          </a>
        </h1>
        <div className="spacer"></div>
        <Navigation />
      </header>
    </div>
  )
}

export default Header
