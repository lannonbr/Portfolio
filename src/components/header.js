/** @jsx h */
import { Fragment, h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Transition, Menu } from '@headlessui/react'

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

  const themeOptions = [
    { name: 'Light', value: 'light' },
    { name: 'Dark', value: 'dark' },
    { name: 'System UI', value: 'system' },
  ]

  return (
    <Menu as="div" class="flex-shrink-0 relative">
      {({ open }) => (
        <Fragment>
          <div>
            <Menu.Button class="rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span class="sr-only">Open Theme Settings</span>
              <Moon alt="" class="h-6 w-6 rounded-full" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              class="flex flex-col origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
            >
              {themeOptions.map((opt) => (
                <Menu.Item key={opt.name}>
                  {({ active }) => (
                    <label for={`theme-toggle-${opt.value}`} class="flex ml-2">
                      <input
                        type="radio"
                        name="theme"
                        id={`theme-toggle-${opt.value}`}
                        value={opt.value}
                        checked={theme === opt.value}
                        onClick={() => setTheme(opt.value)}
                      />
                      <span class="ml-2 text-black">{opt.name}</span>
                    </label>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Fragment>
      )}
    </Menu>
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
