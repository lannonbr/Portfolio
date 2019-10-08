import React from "react"
import { Link } from "gatsby"

import useOptions from "gatsby-theme-notes/src/use-options"

export default ({ text }) => {
  const { basePath } = useOptions()

  return (
    <Link css={{
      "&:hover": {
        textDecoration: "underline"
      }
    }} to={basePath}>
      {text}
    </Link>
  )
}