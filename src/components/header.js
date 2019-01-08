import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Navigation from './navigation'

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <HeaderContainer>
      <h1 style={{ margin: 0, fontFamily: 'serif' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontFamily: 'Oswald',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navigation />
    </HeaderContainer>
  </header>
)

export default Header
