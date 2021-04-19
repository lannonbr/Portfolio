/** @jsx h */
import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Transition } from '@headlessui/react'

import Navigation from './navigation.js'
import Moon from './feather/moon.js'

function ThemeToggle({ theme, setTheme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if ('theme' in localStorage) {
      setTheme(localStorage.theme)
    }
  }, [])

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC

    if (theme === 'light' || theme === 'dark') {
      localStorage.theme = theme
    } else {
      localStorage.removeItem('theme')
    }

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    console.log(localStorage.theme)
  }, [theme])

  return (
    <div class="mx-3 relative" id="themeToggle">
      <div>
        <button
          class="max-w-xs bg-white dark:bg-transparent flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="user-menu"
          aria-haspopup="true"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <span class="sr-only">Open Theme Menu</span>
          <Moon alt="" />
        </button>
      </div>

      <Transition
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => {
          return (
            <div
              ref={ref}
              class={
                'flex flex-col origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5' +
                (open
                  ? ' transform opacity-100 scale-100'
                  : ' transform opacity-0 scale-95')
              }
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <label class="text-black">
                <input
                  type="radio"
                  name="theme"
                  id="option-light"
                  value="light"
                  checked={theme === 'light'}
                  onClick={() => setTheme('light')}
                />
                <span class="ml-2">Light</span>
              </label>
              <label class="text-black">
                <input
                  type="radio"
                  name="theme"
                  id="option-dark"
                  value="dark"
                  checked={theme === 'dark'}
                  onClick={() => setTheme('dark')}
                />
                <span class="ml-2">Dark</span>
              </label>
              <label class="text-black">
                <input
                  type="radio"
                  name="theme"
                  id="option-system"
                  value="system"
                  checked={theme === 'system'}
                  onClick={() => setTheme('system')}
                />
                <span class="ml-2">System UI</span>
              </label>
            </div>
          )
        }}
      </Transition>
    </div>
  )
}

const Header = () => {
  const [theme, setTheme] = useState('system')

  const [isSystemDark, setSystemDark] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setSystemDark(true)
    } else {
      setSystemDark(false)
    }
  }, [theme])

  function gradientColor(theme, isSystemDark) {
    if (theme === 'dark' || (theme === 'system' && isSystemDark)) {
      return 'linear-gradient(to left, #50c9c3, #96deda)'
    } else if (theme === 'light' || (theme === 'system' && !isSystemDark)) {
      return 'linear-gradient(to right, #9d50bb, #6e48aa)'
    }
  }

  return (
    <div
      class="bg-rebecca-purple-lightest dark:bg-cyan-transparent md:dark:bg-transparent md:bg-transparent mb-8 md:mb-0"
      style={{
        gridColumn: '1 / span 4',
      }}
    >
      <header class="pb-2 pt-2 md:py-4 px-4 md:px-0 shadow-lg w-full max-w-7xl mx-auto grid items-center md:shadow-none">
        <h1 class="text-2xl m-0 pl-2 2xl:pl-0">
          <a
            class="h-full no-underline bg-repeat bg-scroll bg-left-top bg-clip-text bg-transparent"
            style={{
              backgroundOrigin: 'padding-box',
              backgroundImage: gradientColor(theme, isSystemDark),
              WebkitTextFillColor: 'transparent',
            }}
            href="/"
          >
            Benjamin Lannon
          </a>
        </h1>
        <div class="spacer"></div>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <Navigation />
      </header>
    </div>
  )
}

export default Header
