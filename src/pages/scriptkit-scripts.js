/** @jsx h */
import { h } from 'preact'

const Scripts = (props) => {
  return (
    <div>
      <p class="font-bold text-center text-2xl">
        This page is a Work in Progress
      </p>
      <header>
        <h2>Scripts</h2>
        <p>This is a listing of all the scripts I use with Script Kit</p>
      </header>
      <div class="grid grid-cols-2">
        {props.scriptsData.map((script) => {
          return (
            <div class="bg-gray-500 m-5 self-start">
              <h2 class="py-4 pl-4 m-0">{script.fileName}</h2>
              <pre class="bg-gray-400 text-black p-2">
                <code>{script.content}</code>
              </pre>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Scripts
