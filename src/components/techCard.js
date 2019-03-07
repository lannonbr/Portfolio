import React from 'react'
import styled from 'styled-components'

const TechCardWrapper = styled.span`
  padding: 4px 6px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 8px;
  display: inline-block;
  font-size: 14px;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`

function TechCard({ tech }) {
  return <TechCardWrapper>{tech}</TechCardWrapper>
}

export default TechCard
