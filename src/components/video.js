import React from 'react'

const Video = ({ videoSrc, videoTitle }) => {
  return (
    // Responsive div for embed from https://medium.com/@kevinsimper/full-width-youtube-embed-with-react-js-responsive-embed-509de7e7c3bf
    <div
      className="video"
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        src={videoSrc}
        title={videoTitle}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
}

export default Video
