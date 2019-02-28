import React from 'react'

import { SplitLayout } from '../components/Containers'

import SEO from '../components/Utils/seo'
import IllustrationImg from '../components/illustrationImg'

import office from '../images/office.svg'

import styled from 'styled-components'

const FrontpageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 70px;
  }

  p {
    font-size: 30px;
    line-height: 50px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
      text-align: center;
    }

    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
    />
    <SplitLayout>
      <FrontpageDiv>
        <h1>Hi all, I'm Benjamin</h1>
        <p>
          I'm a web developer in Upstate New York with a passion for exploration
          and continual learning.
        </p>
      </FrontpageDiv>
      <div>
        <IllustrationImg
          src={office}
          alt="Person sitting on desk illustration"
        />
      </div>
    </SplitLayout>
  </>
)

export default IndexPage
