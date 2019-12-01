import React from 'react'
import styled from 'styled-components'
import { Mail, GitHub, Twitter } from 'react-feather'
import Twitch from '../../components/twitchLogo'

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
    display: block;
    div {
      margin-right: 0;
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
`

const TextContainer = styled.div`
  display: flex;

  a {
    padding-right: 20px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`

const IconContainer = styled.div`
  a {
    padding-right: 20px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;

    a {
      margin-right: 20px;
    }
  }
`

function Footer() {
  return (
    <StyledFooter>
      <TextContainer>
        <div>
          <b>© {new Date().getFullYear()}</b>
          <p>Benjamin Lannon</p>
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
      </TextContainer>
      <IconContainer>
        <a href="mailto:benjamin@lannonbr.com">
          <Mail />
        </a>
        <a href="https://github.com/lannonbr">
          <GitHub />
        </a>
        <a href="https://twitter.com/lannonbr">
          <Twitter />
        </a>
        <a href="https://twitch.tv/lannonbr">
          <Twitch />
        </a>
      </IconContainer>
    </StyledFooter>
  )
}

export default Footer
