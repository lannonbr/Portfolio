import React from 'react'
import { render } from 'react-dom'
import { Textfit } from 'react-textfit'

const OGImageComponent = (props) => {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        padding: 40,
        paddingBottom: 0,
        boxSizing: 'border-box',
        backgroundImage: 'linear-gradient( 135deg, #3B2667 10%, #BC78EC 100%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
          height: 550,
          padding: 32,
          boxSizing: 'border-box',
          borderRadius: 20,
          boxShadow: `
          0 2.8px 2.2px rgba(0, 0, 0, 0.02),
          0 6.7px 5.3px rgba(0, 0, 0, 0.028),
          0 12.5px 10px rgba(0, 0, 0, 0.035),
          0 22.3px 17.9px rgba(0, 0, 0, 0.042),
          0 41.8px 33.4px rgba(0, 0, 0, 0.05),
          0 100px 80px rgba(0, 0, 0, 0.07)`,
        }}
      >
        <h1
          style={{
            flexGrow: 1,
          }}
        >
          <Textfit
            min={24}
            max={256}
            style={{ width: '100%', minHeight: '80%', maxHeight: '80%' }}
          >
            {window.postTitle}
          </Textfit>
        </h1>
        <h2
          style={{
            fontSize: 40,
            textAlign: 'right',
            marginBottom: 0,
          }}
        >
          Lannonbr.com
        </h2>
      </div>
    </div>
  )
}

render(<OGImageComponent />, document.getElementById('opengraph'))
