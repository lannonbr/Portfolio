/** @jsx h */
import { h } from 'preact'

const Warning = (props) => {
  return (
    <div className="bg-yellow-200 text-yellow-900 p-2 mb-6">
      <span className="font-bold">Warning: </span>
      {props.children}
    </div>
  )
}

export default Warning
