import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Warning from './src/components/warning'
import Video from './src/components/video'

import './src/styles/tailwind-include.css'

const preToCodeBlock = (preProps) => {
  if (
    // children is code element
    preProps.children &&
    // code props
    preProps.children.props &&
    // if children is actually a <code>
    preProps.children.props.mdxType === 'code'
  ) {
    // we have a <pre><code> situation
    const {
      children: codeString,
      className = '',
      ...props
    } = preProps.children.props

    const match = className.match(/language-([\0-\uFFFF]*)/)

    return {
      codeString: codeString.trim(),
      className,
      language: match != null ? match[1] : '',
      ...props,
    }
  }
  return undefined
}

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
      return <div dangerouslySetInnerHTML={{ __html: props.codeString }} />
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
