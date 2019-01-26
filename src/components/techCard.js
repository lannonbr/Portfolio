import React from 'react'
import styled from 'styled-components'

const TechCardWrapper = styled.span`
  padding: 8px 12px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 10px;
  display: inline-block;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

function TechCard({ tech }) {
  return <TechCardWrapper>{tech}</TechCardWrapper>
}

export default TechCard
