import React from 'react'
import styled from 'styled-components'
import { Mail, GitHub, Twitter } from 'react-feather'
import Twitch from '../../components/twitchLogo'

const StyledFooter = styled.footer`
  background: var(--footerBackground);
  border-top: 1px solid #ddd;
  min-height: 100px;
  color: var(--bodyTextColor);

  div {
    margin-right: 60px;
  }
  div:last-child {
    margin-right: 0;
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
    div {
      margin-right: 0;
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
`

function Footer() {
  return (
    <StyledFooter className="md:flex flex-wrap items-center justify-center text-sm p-2">
      <div className="flex justify-around md:justify-start">
        <div>
          <b>© {new Date().getFullYear()}</b>
          <p>Benjamin Lannon</p>
        </div>

        <div>
          <b>Built with</b>
          <p>
            <a href="https://www.gatsbyjs.org" className="pr-4">
              Gatsby
            </a>
          </p>
        </div>
        <div>
          <b>Deployed on</b>
          <p>
            <a href="https://netlify.com" className="pr-4">
              Netlify
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <a href="mailto:benjamin@lannonbr.com" className="pr-4 md:pr-5">
          <Mail />
        </a>
        <a href="https://github.com/lannonbr" className="pr-4 md:pr-5">
          <GitHub />
        </a>
        <a href="https://twitter.com/lannonbr" className="pr-4 md:pr-5">
          <Twitter />
        </a>
        <a href="https://twitch.tv/lannonbr">
          <Twitch />
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer
