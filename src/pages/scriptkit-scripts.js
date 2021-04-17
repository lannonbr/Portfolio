/** @jsx h */
import { h } from 'preact'
import * as Prism from 'prism-react-renderer'
import { nightOwlTheme } from '../components/prism-themes.js'
const defaultProps = Prism.defaultProps

// Because of the differing modules between node & browser I have to do a conditional to get the default export
let Highlight
if (typeof window === 'undefined') {
  Highlight = Prism.default.default
} else {
  Highlight = Prism.default
}

const Scripts = (props) => {
  return (
    <div>
      <header>
        <h2>Scripts</h2>
        <p>This is a listing of all the scripts I use with Script Kit</p>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {props.scriptsData.map((script) => {
          return (
            <div class="bg-rebecca-purple text-white dark:bg-cyan dark:text-black shadow rounded-lg flex flex-col">
              <h2 class="py-4 pl-4 m-0 text-xl">{script.fileName}</h2>
              <Code language="jsx" code={script.content} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Code({ code, language }) {
  return (
    <Highlight
      {...defaultProps}
      theme={nightOwlTheme}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          class={className + ' overflow-x-scroll p-2 flex-grow'}
          style={style}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Scripts
