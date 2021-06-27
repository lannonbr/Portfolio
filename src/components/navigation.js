/** @jsx h */
import { h } from 'preact'

function Navigation() {
  let navLinks = [
    { url: '/work', name: 'Work' },
    { url: '/projects', name: 'Projects' },
    { url: '/garden', name: 'Garden' },
    { url: '/talks', name: 'Talks' },
  ]

  return (
    <nav class="navigation">
      {navLinks.map((link) => (
        <a key={link.name} href={link.url}>
          {link.name}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
