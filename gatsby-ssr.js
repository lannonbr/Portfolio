import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Code from './src/components/code'
import { preToCodeBlock } from 'mdx-utils'
import Warning from './src/components/warning'
import Video from './src/components/video'

const components = {
  inlineCode: ({ children }) => {
    return (
      <code
        style={{
          backgroundColor: 'rgb(1, 22, 39)',
          padding: 3,
          margin: 3,
          borderRadius: 5,
          color: '#f0f0f0',
        }}
      >
        {children}
      </code>
    )
  },
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)

    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
  Warning,
  Video,
}

export const wrapPageElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      key: 'tailwind-dark-mode',
      dangerouslySetInnerHTML: {
        __html: `
function checkDarkMode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  }
  return false;
}

if (checkDarkMode()) {
  document.documentElement.classList.add('mode-dark');
} else {
  document.documentElement.classList.remove('mode-dark');
}       
        `,
      },
    }),
  ])
}
