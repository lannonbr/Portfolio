import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Navigation from './navigation'

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  padding: 1.45rem 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
    padding-bottom: 0;
    align-items: flex-start;
  }
`

const NavWrapper = styled.div`
  display: flex;

  label {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;

    label {
      margin: 0;
    }
  }
`

const Header = ({ siteTitle }) => {
  const imgQueryResult = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 320, height: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <header>
          <HeaderContainer>
            <h1
              style={{
                margin: 0,
                height: 80,
              }}
            >
              <Link
                to="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'var(--purple)',
                  textDecoration: `none`,
                  fontFamily: 'var(--headerFont)',
                }}
              >
                <Img
                  fixed={imgQueryResult.file.childImageSharp.fixed}
                  critical={true}
                  alt="avatar"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    marginBottom: 0,
                    marginRight: 20,
                    boxShadow: 'inset 0 0 10px #000000',
                  }}
                />
                {siteTitle}
              </Link>
            </h1>
            <NavWrapper>
              <Navigation />
              <label>
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? 'dark' : 'light')
                  }
                  checked={theme === 'dark'}
                />{' '}
                Dark mode
              </label>
            </NavWrapper>
          </HeaderContainer>
        </header>
      )}
    </ThemeToggler>
  )
}

export default Header
