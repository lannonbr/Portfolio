import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavContainer = styled.nav`
  a {
    color: white;
    text-decoration: none;
    margin-left: 30px;
  }

  a:first-child {
    margin-left: 0;
  }
`

const Navigation = () => (
  <NavContainer>
    <Link to="/projects/">Projects</Link>
    <Link to="/opensource/">Open Source</Link>
    <Link to="/contact/">Contact</Link>
  </NavContainer>
)

export default Navigation
