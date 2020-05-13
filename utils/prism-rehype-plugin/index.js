const { createElement } = require('react')
const { renderToString } = require('react-dom/server')
const rangeParser = require('parse-numeric-range')
const Highlight = require('prism-react-renderer')
const theme = require('prism-react-renderer/themes/nightOwl')
const visit = require('unist-util-visit')

module.exports = (options) => (ast) => {
  visit(ast, 'element', (node) => {
    if (node.tagName === 'code') {
      const codeString = node.children[0].value
      const language =
        node.properties.className &&
        node.properties.className[0] &&
        node.properties.className[0].split('-')[1]

      const result = renderToString(
        createElement(Code, {
          codeString: codeString.trim(),
          language: language,
          highlight: node.properties.highlight,
          className: node.properties.className,
          metastring: node.properties.metastring,
          title: node.properties.title,
        })
      )

      node.children[0].value = result
    }
  })
}

const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    return (index) => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

const Code = ({
  codeString,
  language,
  className,
  metastring,
  highlight,
  title,
  ...props
}) => {
  const shouldHighlightLine = calculateLinesToHighlight(highlight)

  return createElement(
    Highlight.default,
    {
      ...Highlight.defaultProps,
      code: codeString,
      language: language,
      theme: theme,
    },
    ({ className, style, tokens, getLineProps, getTokenProps }) => {
      return createElement(
        'div',
        {
          className: 'codeBlock gatsby-highlight mb-4 shadow-xl text-sm',
        },
        [
          title &&
            createElement(
              'div',
              {
                className: className + ' text-sm px-5 py-4',
                style: style,
              },
              title
            ),
          createElement(
            'pre',
            {
              className: className + ' p-5 mt-0 overflow-auto',
              style: {
                ...style,
                borderTop: title ? '1px solid #8BADC1' : 'unset',
              },
            },
            tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`
              }
              return createElement(
                'div',
                { ...lineProps, key: i },
                line.map((token, key) =>
                  createElement('span', {
                    ...getTokenProps({ token, key }),
                    key,
                  })
                )
              )
            })
          ),
        ]
      )
    }
  )
}
