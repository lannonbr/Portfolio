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
        <div
          className="codeBlock"
          style={{ boxShadow: '0px 4px 8px rgba(0,0,0,0.4)' }}
        >
          {title && (
            <div
              className={className}
              style={{ ...style, padding: '10px 20px', fontSize: 14 }}
            >
              {title}
            </div>
          )}
          <pre
            className={className}
            style={{
              ...style,
              padding: '20px',
              marginTop: 0,
              borderTop: title ? '1px solid #8BADC1' : 'unset',
              overflow: 'auto',
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
