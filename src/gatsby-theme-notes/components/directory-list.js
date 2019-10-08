import React from 'react'
import isPresent from 'is-present'
import { Box } from 'theme-ui'
import { Link } from 'gatsby'
import { Folder } from 'react-feather'

export default ({ directories }) =>
  isPresent(directories) ? (
    <>
      <Box py={3} style={{ display: `flex`, flexWrap: `wrap` }}>
        {Object.entries(directories).map(([key, value]) => (
          <Link css={{
            "&:hover": {
              textDecoration: "underline"
            }
          }} key={key} to={value[0].pagePath}>
            <Box
              w={[1, 2, 2]}
              p={3}
              key={key}
              style={{
                display: `flex`,
                alignItems: `center`,
              }}
            >
              <Folder style={{ marginRight: `5px` }} />
              <span style={{ marginRight: `30px` }}>{key}</span>
            </Box>
          </Link>
        ))}
      </Box>
      <hr />
    </>
  ) : null
