/** @jsx h */
import { h } from 'preact'

function Link({ href, children }) {
  return (
    <a
      href={href}
      class="pr-4 md:pr-5 font-semibold no-underline hover:underline text-rebecca-purple-light dark:text-cyan hover:text-rebecca-purple-lighter dark-hover:text-cyan-light"
    >
      {children}
    </a>
  )
}

function Footer() {
  return (
    <footer
      class="grid grid-cols-2 gap-y-4 py-8 md:flex md:flex-wrap md:items-start md:justify-center md:space-x-2 lg:space-x-8 text-sm px-2 md:py-4 border-t-2 border-gray-400 bg-rebecca-purple-lightest dark:bg-cyan-transparent min-h-150"
      style={{
        gridColumn: '1 / span 4',
      }}
    >
      <div>
        <b>© {new Date().getFullYear()}</b>
        <p class="m-0">Benjamin Lannon</p>
      </div>
      <div>
        <b>Built with</b>
        <p class="m-0">
          <a
            href="https://www.toast.dev/"
            class="pr-4 font-semibold no-underline hover:underline text-rebecca-purple-light dark:text-cyan hover:text-rebecca-purple-lighter dark-hover:text-cyan-light"
          >
            Toast
          </a>
        </p>
      </div>
      <div>
        <b>Deployed on</b>
        <p class="m-0">
          <a
            href="https://netlify.com"
            class="pr-4 font-semibold no-underline hover:underline text-rebecca-purple-light dark:text-cyan hover:text-rebecca-purple-lighter dark-hover:text-cyan-light"
          >
            Netlify
          </a>
        </p>
      </div>
      <div>
        <b>Main Navigation</b>
        <div class="flex flex-col space-y-2 md:space-y-0">
          <Link href="/work">Work</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/garden">Digital Garden</Link>
          <Link href="/stream">Stream</Link>
          <Link href="/talks">Talks</Link>
        </div>
      </div>
      <div>
        <b>Misc Pages</b>
        <div class="flex flex-col space-y-2 md:space-y-0">
          <Link href="/uses">Uses</Link>
          <Link href="/music-production">Music Production</Link>
        </div>
      </div>
      <div>
        <b>Socials</b>
        <div class="flex flex-col space-y-2 md:space-y-0">
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
