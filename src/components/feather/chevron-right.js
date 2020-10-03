/** @jsx React.createElement */
import React, { forwardRef } from 'react'

const ChevronRight = forwardRef(
  ({ color = 'currentColor', size = 24, alt, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <title>{alt}</title>
        <polyline points="9 18 15 12 9 6" />
      </svg>
    )
  }
)

ChevronRight.displayName = 'ChevronRight'

export default ChevronRight
