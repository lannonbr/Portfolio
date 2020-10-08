/** @jsx h */
import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'

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
      class="bg-rebecca-purple-lightest dark:bg-cyan-transparent md:bg-transparent mb-8 md:mb-0"
      style={{
        gridColumn: '1 / span 4',
      }}
    >
      <header class="pb-2 pt-2 md:pt-2 px-4 md:px-0 shadow-lg w-full max-w-7xl mx-auto grid items-center md:shadow-none">
        <h1 class="text-2xl m-0 pl-2 2xl:pl-0">
          <a
            class="h-full no-underline bg-repeat bg-scroll bg-left-top bg-clip-text bg-transparent"
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
        <div class="spacer"></div>
        <Navigation />
      </header>
    </div>
  )
}

export default Header
