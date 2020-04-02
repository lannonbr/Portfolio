import { Link, useStaticQuery, graphql } from 'gatsby'
import React, { useState, useEffect } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// Components
import Navigation from './navigation'
import MobileNav from './mobileNav'

// SVGs
import MenuSVG from '../images/menu.svg'
import MenuWhiteSVG from '../images/menu-white.svg'
import MoonSVG from '../images/moon.svg'
import SunSVG from '../images/sun.svg'

const Header = ({ location }) => {
  const [mobileNavOpened, setMobileNavOpened] = useState(false)

  useEffect(() => {
    setMobileNavOpened(false)
    if (window) {
      window.scrollTo({ top: 0 })
    }
  }, [location])

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let title = data.site.siteMetadata.title

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <header
          className="py-5 px-4 w-full mx-auto"
          style={{
            maxWidth: 1600,
          }}
        >
          <div className="px-3 pb-0 md:p-0 flex justify-between items-center">
            <h1 className="h-20 m-0">
              <Link
                className="h-full no-underline flex items-center"
                style={{
                  color: 'var(--primaryColor)',
                }}
                to="/"
              >
                {title}
              </Link>
            </h1>
            <div className="hidden md:flex md:items-center">
              <Navigation />
              <button
                onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <img
                  src={theme === 'dark' ? SunSVG : MoonSVG}
                  alt="Dark mode toggler"
                />
              </button>
            </div>
            <div className="flex items-end md:hidden">
              <MobileNav open={mobileNavOpened} />
              <button
                onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <img
                  src={theme === 'dark' ? SunSVG : MoonSVG}
                  alt="Dark mode toggler"
                />
              </button>
              <button
                className={`navButton ${mobileNavOpened ? 'open' : ''}`}
                onClick={() => {
                  if (mobileNavOpened) {
                    if (window) {
                      window.scrollTo({ top: 0 })
                    }
                  }
                  setMobileNavOpened(!mobileNavOpened)
                }}
              >
                <img
                  src={
                    theme === 'dark' || mobileNavOpened ? MenuWhiteSVG : MenuSVG
                  }
                  alt="Open Mobile Navigation"
                />
              </button>
            </div>
          </div>
        </header>
      )}
    </ThemeToggler>
  )
}

export default Header
