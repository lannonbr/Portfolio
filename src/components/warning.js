/** @jsx h */
import { h } from 'preact'

const Warning = (props) => {
  return (
    <div class="warning">
      <span>Warning: </span>
      {props.children}
    </div>
  )
}

export default Warning
