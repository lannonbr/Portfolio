import React from 'react'
import Mail from './feather/mail.js'
import GitHub from './feather/github.js'
import Twitter from './feather/twitter.js'
import Twitch from './feather/twitch.js'

function IconLink({ href, children }) {
  return (
    <a
      href={href}
      className="pr-4 md:pr-5 font-semibold no-underline hover:underline text-rebecca-purple-light dark:text-cyan hover:text-rebecca-purple-lighter dark-hover:text-cyan-light"
    >
      {children}
    </a>
  )
}

function Footer() {
  return (
    <footer
      className="md:flex flex-wrap items-center justify-center text-sm p-2 border-t-2 border-gray-400 flex-shrink-0 bg-rebecca-purple-lightest dark:bg-cyan-transparent min-h-100"
      style={{
        gridColumn: '1 / span 4',
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
              href="https://github.com/christopherbiscardi/toast"
              className="pr-4 font-semibold no-underline hover:underline text-rebecca-purple-light dark:text-cyan hover:text-rebecca-purple-lighter dark-hover:text-cyan-light"
            >
              Toast
            </a>
          </p>
        </div>
        <div>
          <b>Deployed on</b>
          <p className="m-0">
            <a
              href="https://netlify.com"
              className="pr-4 font-semibold no-underline hover:underline text-rebecca-purple-light dark:text-cyan hover:text-rebecca-purple-lighter dark-hover:text-cyan-light"
            >
              Netlify
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <IconLink href="mailto:benjamin@lannonbr.com">
          <Mail alt="Email me" />
        </IconLink>
        <IconLink href="https://github.com/lannonbr">
          <GitHub alt="Visit my GitHub" />
        </IconLink>
        <IconLink href="https://twitter.com/lannonbr">
          <Twitter alt="Visit my Twitter" />
        </IconLink>
        <IconLink href="https://twitch.tv/lannonbr">
          <Twitch alt="Visit my Twitch" />
        </IconLink>
      </div>
    </footer>
  )
}

export default Footer
