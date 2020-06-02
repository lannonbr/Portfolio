import React from 'react'
import { Link } from 'gatsby'
import useNavigation from '../hooks/useNavigation'

function Navigation() {
  let navLinks = useNavigation()

  return (
    <nav className="w-full grid grid-cols-2 gap-3 items-center md:block md:px-4">
      {/* {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.url}
          className="text-center no-underline inline-block border-b-2 border-transparent hover:border-purple-700 focus:border-purple-700 dark-hover:border-teal-200 dark-focus:border-teal-200 md:mx-4 text-gray-900 dark:text-gray-100"
        >
          {link.name}
        </Link>
      ))} */}
    </nav>
  )
}

export default Navigation
