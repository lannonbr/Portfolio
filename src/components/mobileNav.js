import React from 'react'
import { Link } from 'gatsby'
import useNavigation from '../hooks/useNavigation'

function MobileNav(props) {
  let navLinks = useNavigation()

  let classes = ''

  if (props.open) {
    classes =
      'flex overflow-hidden w-full h-full fixed top-0 left-0 flex-col justify-center items-end pr-6 bg-red-300 z-10'
  } else {
    classes = 'hidden z-10'
  }

  return (
    <nav
      className={classes}
      open={props.open}
      style={{
        backgroundColor: props.open ? 'var(--primaryColor)' : 'transparent',
      }}
    >
      {navLinks.map((link) => {
        return (
          <Link
            key={link.name + '-m'}
            to={link.url}
            className="text-4xl leading-relaxed text-white no-underline border-r-4 pr-2 border-transparent hover:border-white"
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default MobileNav
