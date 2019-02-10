import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledNav = styled(Navigation)`
  a {
    color: #404040;
    text-decoration: none;
    margin-left: 30px;
    display: inline-block;
    padding-bottom: 3px;
    border-bottom: 2px solid transparent;
  }

  a:first-child {
    margin-left: 0;
  }

  a:hover,
  a.active {
    border-bottom-color: #663399;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    a {
      text-align: center;
      margin-left: 0;
      margin-bottom: 10px;
    }
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
    </nav>
  )
}

export default StyledNav
