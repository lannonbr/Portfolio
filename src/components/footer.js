import React from 'react'

function Link({ href, children }) {
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
      className="grid grid-cols-3 row-gap-4 py-8 md:flex md:flex-wrap md:items-start md:justify-center md:space-x-2 lg:space-x-8 text-sm px-2 md:py-4 border-t-2 border-gray-400 bg-rebecca-purple-lightest dark:bg-cyan-transparent min-h-150"
      style={{
        gridColumn: '1 / span 4',
      }}
    >
      <div>
        <b>© {new Date().getFullYear()}</b>
        <p className="m-0">Benjamin Lannon</p>
      </div>
      <div>
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
      <div>
        <b>Main Navigation</b>
        <div className="flex flex-col space-y-2 md:space-y-0">
          <Link href="/work">Work</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/garden">Digital Garden</Link>
          <Link href="/stream">Stream</Link>
          <Link href="/talks">Talks</Link>
        </div>
      </div>
      <div>
        <b>Misc Pages</b>
        <div className="flex flex-col space-y-2 md:space-y-0">
          <Link href="/uses">Uses</Link>
          <Link href="/music-production">Music Production</Link>
        </div>
      </div>
      <div>
        <b>Socials</b>
        <div className="flex flex-col space-y-2 md:space-y-0">
          <Link href="mailto:benjamin@lannonbr.com">Email me</Link>
          <Link href="https://github.com/lannonbr">Visit my GitHub</Link>
          <Link href="https://twitter.com/lannonbr">Visit my Twitter</Link>
          <Link href="https://twitch.tv/lannonbr">Visit my Twitch</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
