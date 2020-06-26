import React from 'react'
import Mail from './feather/mail.js'
import GitHub from './feather/github.js'
import Twitter from './feather/twitter.js'
import Twitch from './feather/twitch.js'

function Footer() {
  return (
    <footer className="md:flex flex-wrap items-center justify-center text-sm p-2 border-t-2 border-gray-400 text-sm flex-shrink-0 bg-rebecca-purple-lightest dark:bg-cyan-transparent min-h-100">
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
        <a
          href="mailto:benjamin@lannonbr.com"
          className="pr-4 md:pr-5 font-semibold no-underline hover:underline text-rebecca-purple-light dark:text-cyan hover:text-rebecca-purple-lighter dark-hover:text-cyan-light"
        >
          <Mail />
        </a>
        <a
          href="https://github.com/lannonbr"
          className="pr-4 md:pr-5 font-semibold no-underline hover:underline text-rebecca-purple-light dark:text-cyan hover:text-rebecca-purple-lighter dark-hover:text-cyan-light"
        >
          <GitHub />
        </a>
        <a
          href="https://twitter.com/lannonbr"
          className="pr-4 md:pr-5 font-semibold no-underline hover:underline text-rebecca-purple-light dark:text-cyan hover:text-rebecca-purple-lighter dark-hover:text-cyan-light"
        >
          <Twitter />
        </a>
        <a
          href="https://twitch.tv/lannonbr"
          className="font-semibold no-underline hover:underline text-rebecca-purple-light dark:text-cyan hover:text-rebecca-purple-lighter dark-hover:text-cyan-light"
        >
          <Twitch />
        </a>
      </div>
    </footer>
  )
}

export default Footer
