/** @jsx h */
import { h } from 'preact'

const Video = ({ videoSrc, videoTitle }) => {
  return (
    // Responsive div for embed from https://medium.com/@kevinsimper/full-width-youtube-embed-with-react-js-responsive-embed-509de7e7c3bf
    <div class="video">
      <iframe
        src={videoSrc}
        title={videoTitle}
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
