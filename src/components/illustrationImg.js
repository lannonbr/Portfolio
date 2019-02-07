import React from 'react'
import styled from 'styled-components'

const ImgWrapper = styled.img`
  margin-left: 30px;
  margin-right: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`

const IllustrationImg = props => {
  return <ImgWrapper {...props} />
}

export default IllustrationImg
