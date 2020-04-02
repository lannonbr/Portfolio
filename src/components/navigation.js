import React from 'react'
import { Link } from 'gatsby'
import useNavigation from '../hooks/useNavigation'

function Navigation() {
  let navLinks = useNavigation()

  return (
    <nav className="px-4 desktop">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.url}
          activeClassName="active"
          className="no-underline inline-block mb-2 border-b-2 border-transparent"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
