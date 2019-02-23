import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

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

const Header = ({ siteTitle }) => {
  const imgQueryResult = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header>
      <HeaderContainer>
        <h1
          style={{
            margin: 0,
            fontFamily: 'serif',
            color: '#663399',
            height: 80,
          }}
        >
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: `#663399`,
              textDecoration: `none`,
              fontFamily: 'Oswald',
            }}
          >
            <Img
              fixed={imgQueryResult.file.childImageSharp.fixed}
              critical={true}
              alt="avatar"
              style={{
                borderRadius: 40,
                marginBottom: 0,
                marginRight: 20,
                boxShadow: 'inset 0 0 10px #000000',
              }}
            />
            {siteTitle}
          </Link>
        </h1>
        <Navigation />
      </HeaderContainer>
    </header>
  )
}

export default Header
