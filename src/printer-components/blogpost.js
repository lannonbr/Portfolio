import React from 'react'

export default ({ date, title }) => {
  return (
    <div
      style={{
        width: 1280,
        height: 720,
        padding: 50,
        boxSizing: 'border-box',
        overflowX: 'hidden',
        backgroundImage: 'linear-gradient( 135deg, #3B2667 10%, #BC78EC 100%)',
        color: 'white',
        fontFamily: 'Inter, Arial, Helvetica, sans-serif',
      }}
    >
      <div
        style={{
          fontSize: 60,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <h1
          style={{
            fontSize: '1.2em',
            marginBottom: 30,
          }}
        >
          {title}
        </h1>
        <h2 style={{ fontSize: '1em', flexGrow: 1 }}>{date}</h2>\
        <h2 style={{ fontSize: '1em', textAlign: 'right', marginBottom: 0 }}>
          Lannonbr.com
        </h2>
      </div>
    </div>
  )
}
