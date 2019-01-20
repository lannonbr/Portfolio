import React from 'react'
import styled from 'styled-components'

const ImgWrapper = styled.img`
  margin-left: ${props => (props.marginLeft ? '30px' : 'unset')};
  margin-right: ${props => (props.marginRight ? '30px' : 'unset')};

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`

const IllustrationImg = props => {
  return <ImgWrapper {...props} />
}

export default IllustrationImg
