import React from 'react'
import { Link } from 'gatsby'

export default ({ files }) => (
  <ul className="py-0 px-5 list-disc">
    {files
      .sort((a, b) => a.localeCompare(b))
      .map(url => (
        <li key={url}>
          <Link
            to={url}
            css={{
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {url}
          </Link>
        </li>
      ))}
  </ul>
)
