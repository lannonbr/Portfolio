/** @jsx h */
import { h } from 'preact'

function Navigation() {
  let navLinks = [
    { url: '/work', name: 'Work' },
    { url: '/projects', name: 'Projects' },
    { url: '/garden', name: 'Garden' },
    { url: '/stream', name: 'Stream' },
    { url: '/talks', name: 'Talks' },
  ]

  return (
    <nav class="w-full grid grid-cols-2 gap-2 items-center md:block md:px-3">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          class="text-center no-underline inline-block border-b-2 border-transparent hover:border-purple-700 focus:border-purple-700 dark:hover:border-cyan-light dark:focus:border-cyan-light md:mx-2 text-gray-900 dark:text-gray-100"
        >
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
