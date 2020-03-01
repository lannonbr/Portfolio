import React from 'react'
import styled from 'styled-components'
import { Mail, GitHub, Twitter } from 'react-feather'
import Twitch from '../../components/twitchLogo'

const StyledFooter = styled.footer`
  a {
    color: var(--footerLink);
  }

  a:hover {
    color: var(--footerLinkHover);
  }
`

function Footer() {
  return (
    <StyledFooter
      className="md:flex flex-wrap items-center justify-center text-sm p-2 border border-gray-400 text-sm flex-shrink-0"
      style={{
        backgroundColor: 'var(--footerBackground)',
        color: 'var(--bodyTextColor)',
        minHeight: 100,
      }}
    >
      <div className="flex justify-around md:justify-start mb-5 md:mb-0 md:mr-16">
        <div className="md:mr-16">
          <b>© {new Date().getFullYear()}</b>
          <p className="m-0">Benjamin Lannon</p>
        </div>

        <div className="md:mr-16">
          <b>Built with</b>
          <p className="m-0">
            <a
              href="https://www.gatsbyjs.org"
              className="pr-4 font-semibold no-underline hover:underline"
            >
              Gatsby
            </a>
          </p>
        </div>
        <div>
          <b>Deployed on</b>
          <p className="m-0">
            <a
              href="https://netlify.com"
              className="pr-4 font-semibold no-underline hover:underline"
            >
              Netlify
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="mailto:benjamin@lannonbr.com"
          className="pr-4 md:pr-5 font-semibold no-underline hover:underline"
        >
          <Mail />
        </a>
        <a
          href="https://github.com/lannonbr"
          className="pr-4 md:pr-5 font-semibold no-underline hover:underline"
        >
          <GitHub />
        </a>
        <a
          href="https://twitter.com/lannonbr"
          className="pr-4 md:pr-5 font-semibold no-underline hover:underline"
        >
          <Twitter />
        </a>
        <a
          href="https://twitch.tv/lannonbr"
          className="font-semibold no-underline hover:underline"
        >
          <Twitch />
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer
