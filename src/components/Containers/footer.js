import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: #66339906;
  border-top: 1px solid #ddd;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #404040;
  font-size: 14px;

  div {
    margin-right: 60px;
  }

  p {
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

function Footer() {
  return (
    <StyledFooter>
      <div>
        <b>© {new Date().getFullYear()}</b>
        <p>Benjamin Lannon</p>
      </div>
      <div>
        <b>Contact</b>
        <p>
          <a href="mailto:benjamin@lannonbr.com">benjamin@lannonbr.com</a>
        </p>
      </div>
      <div>
        <b>Social</b>
        <p>
          <a href="https://github.com/lannonbr">GitHub</a>
          {` `}/{` `}
          <a href="https://twitter.com/lannonbr">Twitter</a>
        </p>
      </div>
      <div>
        <b>Built with</b>
        <p>
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </div>
      <div>
        <b>Deployed on</b>
        <p>
          <a href="https://netlify.com">Netlify</a>
        </p>
      </div>
    </StyledFooter>
  )
}

export default Footer
