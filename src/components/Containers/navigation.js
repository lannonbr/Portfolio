import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useNavigation from '../../hooks/useNavigation'

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
  let navLinks = useNavigation()

  return (
    <nav className={className}>
      {navLinks.map(link => (
        <Link key={link.name} to={link.url} activeClassName="active">
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default StyledNav
