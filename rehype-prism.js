import { h } from 'preact'
import renderToString from 'preact-render-to-string'
import rangeParser from 'parse-numeric-range'
import Highlight from 'prism-react-renderer'
import visit from 'unist-util-visit'
import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/index.js'
import prismComponents from 'prismjs/components.js'
import { nightOwlTheme } from './src/components/prism-themes.js'

export default function rehypePrismMdx(options) {
  return (ast) => {
    visit(ast, 'element', (node) => {
      if (node.tagName === 'code') {
        const codeString = node.children[0].value
        const language =
          node.properties.className &&
          node.properties.className[0] &&
          node.properties.className[0].split('-')[1]

        const result = renderToString(
          h(Code, {
            codeString: codeString.trim(),
            language: language,
            highlight: node.properties.highlight,
            className: node.properties.className,
            metastring: node.properties.metastring,
            title: node.properties.title,
          })
        )

        node.children = [
          {
            value: result,
            type: 'text',
          },
        ]
      }
    })
  }
}

try {
  // meta doesn't exist in the prismjs package. TOML files are rendered differently with the syntax highlighting so I removed it.
  loadLanguages(
    Object.keys(prismComponents.languages).filter((v) => {
      return v !== 'meta' && v !== 'toml'
    })
  )
} catch (e) {
  // this is here in case prismjs ever removes a language, so we can easily debug
  console.log(e)
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

  return h(
    Highlight.default,
    {
      ...Highlight.defaultProps,
      code: codeString,
      language: language,
      theme: nightOwlTheme,
      Prism: Prism,
    },
    ({ className, style, tokens, getLineProps, getTokenProps }) => {
      return h(
        'div',
        {
          class: 'codeBlock toast-highlight mb-4 shadow-xl text-sm rounded',
        },
        [
          title &&
            h(
              'div',
              {
                class: className + ' text-sm px-5 py-4',
                style,
              },
              title
            ),
          h(
            'pre',
            {
              class: className + ' p-5 mt-0',
              style: {
                ...style,
                borderTop: title ? '1px solid #8BADC1' : 'none',
                minWidth: '100%',
              },
            },
            tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`
              }
              return h(
                'div',
                { style: lineProps.style, class: lineProps.className, key: i },
                line.map((token, key) =>
                  h('span', {
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
