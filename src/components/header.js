import { Link, useStaticQuery, graphql } from 'gatsby'
import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// Components
import Navigation from './navigation'
import MobileNav from './mobileNav'

// SVGs
import MenuSVG from '../images/menu.svg'
import MenuWhiteSVG from '../images/menu-white.svg'
import MoonSVG from '../images/moon.svg'
import SunSVG from '../images/sun.svg'

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  outline: 0;
  color: gray;
  ${(props) =>
    props.navButton &&
    css`
      z-index: 2;
      position: relative;
    `};
  ${(props) =>
    props.open &&
    css`
      position: fixed;
    `};
`

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
          className="py-5 px-3 mx-auto max-w-6xl w-full"
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
              <StyledButton
                onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <img
                  src={theme === 'dark' ? SunSVG : MoonSVG}
                  alt="Dark mode toggler"
                />
              </StyledButton>
            </div>
            <div className="flex items-end md:hidden">
              <MobileNav open={mobileNavOpened} />
              <StyledButton
                onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                <img
                  src={theme === 'dark' ? SunSVG : MoonSVG}
                  alt="Dark mode toggler"
                />
              </StyledButton>
              <StyledButton
                navButton={true}
                open={mobileNavOpened}
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
              </StyledButton>
            </div>
          </div>
        </header>
      )}
    </ThemeToggler>
  )
}

export default Header
