import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNav = styled(Navigation)`
  a {
    color: white;
    text-decoration: none;
    margin-left: 30px;
  }

  a:first-child {
    margin-left: 0;
  }
`

function Navigation({ className }) {
  return (
    <nav className={className}>
      <Link to="/projects/">Projects</Link>
      <Link to="/opensource/">Open Source</Link>
      <Link to="/contact/">Contact</Link>
    </nav>
  )
}

export default StyledNav
