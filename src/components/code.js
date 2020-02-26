import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

const getParams = (name = ``) => {
  const [lang, params = ``] = name.split(` `)
  return [
    lang
      .split(`language-`)
      .pop()
      .split(`{`)
      .shift(),
  ].concat(
    params.split(`&`).reduce((merged, param) => {
      const [key, value] = param.split(`=`)
      merged[key] = value
      return merged
    }, {})
  )
}

const Code = ({ codeString, language, className, metastring, ...props }) => {
  const [lang, { title = `` }] = getParams(className + ' ' + metastring)

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={lang}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="codeBlock mb-4 shadow-xl text-sm">
          {title && (
            <div
              className={className + ' text-sm px-5 py-4'}
              style={{ ...style }}
            >
              {title}
            </div>
          )}
          <pre
            className={className + ' p-5 mt-0 overflow-auto'}
            style={{
              ...style,
              borderTop: title ? '1px solid #8BADC1' : 'unset',
            }}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })}></span>
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default Code
