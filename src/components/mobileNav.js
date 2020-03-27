import React from 'react'
import { Link } from 'gatsby'
import useNavigation from '../hooks/useNavigation'
import styled, { css } from 'styled-components'

const StyledNav = styled.nav`
  display: none;
  z-index: 1;
  background: transparent;
  ${(props) =>
    props.open &&
    css`
      overflow: hidden;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0px;
      left: 0px;
      background: var(--primaryColor);
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding-right: 30px;
      a {
        font-size: 30px;
        line-height: 40px;
        color: white;
        text-decoration: none;
        border-right: 4px solid transparent;
        padding-right: 10px;
        &:hover,
        &.active {
          border-right-color: white;
        }
      }
    `}
`

function MobileNav(props) {
  let navLinks = useNavigation()

  return (
    <StyledNav open={props.open}>
      {navLinks.map((link) => {
        return (
          <Link key={link.name + '-m'} to={link.url} activeClassName="active">
            {link.name}
          </Link>
        )
      })}
    </StyledNav>
  )
}

export default MobileNav
