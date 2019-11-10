import React from 'react'

export default ({ date, title }) => {
  return (
    <div
      style={{
        width: 1280,
        height: 720,
        padding: 30,
        paddingBottom: 0,
        boxSizing: 'border-box',
        overflowX: 'hidden',
        backgroundImage: 'linear-gradient(270deg, #747dbc 21%, #8CB5D9 92%)',
        color: 'white',
        fontFamily: 'Oswald, Arial, Helvetica, sans-serif',
      }}
    >
      <div
        style={{
          fontSize: 60,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h1
          style={{
            fontSize: '1.4em',
            marginBottom: 0,
          }}
        >
          {title}
        </h1>
        <h2 style={{ fontSize: '1em', flexGrow: 1 }}>{date}</h2>
        <h2 style={{ fontSize: '1em', textAlign: 'right', marginRight: 30 }}>
          Lannonbr.com
        </h2>
      </div>
    </div>
  )
}
