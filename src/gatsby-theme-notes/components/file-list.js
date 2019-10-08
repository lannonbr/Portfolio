import React from 'react'
import { Link } from 'gatsby'

export default ({ files }) => (
  <ul css={{ padding: '0 20px' }}>
    {files
      .sort((a, b) => a.localeCompare(b))
      .map(url => (
        <li key={url}>
          <Link to={url} css={{
            "&:hover": {
              textDecoration: "underline"
            }
          }}>
            {url}
          </Link>
        </li>
      ))}
  </ul>
)
