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
    <nav className="w-full grid grid-cols-2 gap-3 items-center md:block md:px-4">
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className="text-center no-underline inline-block border-b-2 border-transparent hover:border-purple-700 focus:border-purple-700 dark-hover:border-teal-200 dark-focus:border-teal-200 md:mx-4 text-gray-900 dark:text-gray-100"
        >
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
