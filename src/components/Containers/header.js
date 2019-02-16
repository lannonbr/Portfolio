import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Navigation from './navigation'
import avatar from '../../images/avatar.jpg'

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  padding: 1.45rem 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 0;
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <HeaderContainer>
      <h1
        style={{
          margin: 0,
          fontFamily: 'serif',
          color: '#663399',
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
          <img
            src={avatar}
            alt="avatar"
            style={{
              width: 80,
              height: 'auto',
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

export default Header
