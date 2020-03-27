import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useNavigation from '../hooks/useNavigation'

const StyledNav = styled.nav`
  margin-right: 30px;
  a {
    color: var(--bodyTextColor);
    margin-left: 30px;
  }
  a:first-child {
    margin-left: 0;
  }
  a:hover,
  a.active {
    border-bottom-color: var(--primaryColor);
  }
`

function Navigation() {
  let navLinks = useNavigation()

  return (
    <StyledNav className="mr-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.url}
          activeClassName="active"
          className="no-underline inline-block pb-1 border-b-2 border-transparent"
        >
          {link.name}
        </Link>
      ))}
    </StyledNav>
  )
}

export default Navigation
