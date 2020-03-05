import React from 'react'

const IllustrationImg = ({ alt, src, ...props }) => {
  return <img className="mx-0 sm:mr-8" {...props} alt={alt} src={src} />
}

export default IllustrationImg
