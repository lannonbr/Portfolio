import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: var(--footerBackground);
  border-top: 1px solid #ddd;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: var(--bodyTextColor);
  font-size: 14px;
  padding: 5px;

  div {
    margin-right: 60px;
  }

  p {
    margin: 0;
  }

  a {
    color: var(--footerLink);
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    color: var(--footerLinkHover);
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 20px;

    div {
      flex-basis: 50%;
      margin-right: 0;
      font-size: 12px;
      margin-bottom: 20px;
    }
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
