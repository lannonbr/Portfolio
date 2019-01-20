import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNav = styled(Navigation)`
  a {
    color: #404040;
    text-decoration: none;
    margin-left: 30px;
  }

  a:first-child {
    margin-left: 0;
  }

  a:hover,
  a.active {
    padding-bottom: 3px;
    border-bottom: 2px solid #663399;
  }
`

function Navigation({ className }) {
  return (
    <nav className={className}>
      <Link to="/work/" activeClassName="active">
        Work
      </Link>
      <Link to="/projects/" activeClassName="active">
        Projects
      </Link>
      <Link to="/opensource/" activeClassName="active">
        Open Source
      </Link>
      <Link to="/contact/" activeClassName="active">
        Contact
      </Link>
    </nav>
  )
}

export default StyledNav
