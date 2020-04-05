import { Link, useStaticQuery, graphql } from 'gatsby'
import React, { useState, useEffect } from 'react'

// Components
import Navigation from './navigation'

// SVGs
import MoonSVG from '../images/moon.svg'
import SunSVG from '../images/sun.svg'

const Header = () => {
  const [mode, setMode] = useState('light')

  useEffect(() => {
    if ([...document.documentElement.classList].includes('mode-dark')) {
      setMode('dark')
    }
  }, [])

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('mode-dark')
    } else {
      document.documentElement.classList.remove('mode-dark')
    }
  }, [mode])

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="py-5 px-4 shadow-lg w-full max-w-7xl mx-auto grid items-center mb-8 md:mb-0 bg-rebecca-purple-lightest dark:bg-cyan-transparent md:bg-transparent md:shadow-none">
      <h1 className="text-2xl md:text-4xl m-0">
        <Link
          className="h-full no-underline text-rebecca-purple dark:text-cyan"
          to="/"
        >
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <div className="spacer"></div>
      <Navigation />
      <button
        className="w-10 h-10 flex justify-center items-center bg-transparent m-0 p-0 border-none outline-none"
        onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      >
        <img src={mode === 'dark' ? SunSVG : MoonSVG} alt="Dark mode toggler" />
      </button>
    </header>
  )
}

export default Header
