import React from 'react'

function TechCard({ tech }) {
  return (
    <span
      style={{
        padding: 4,
        background: 'lightgrey',
        margin: 2,
      }}
    >
      {tech}
    </span>
  )
}

export default TechCard
