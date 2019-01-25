import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: #66339922;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #404040;

  p {
    text-align: center;
    margin: 0;
  }

  a {
    color: #66339988;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    color: #663399dd;
    text-decoration: underline;
  }
`

function Footer(props) {
  return (
    <StyledFooter>
      <p>
        © {new Date().getFullYear()} Benjamin Lannon{` • `}Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        {` • `}Deployed on{` `}
        <a href="https://netlify.com">Netlify</a>
        {` • `}
        <Link to="/uses/">Uses</Link>
      </p>
    </StyledFooter>
  )
}

export default Footer
