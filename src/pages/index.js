import React from 'react'

import { Layout, SplitLayout } from '../components/Containers'

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
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SplitLayout>
      <FrontpageDiv>
        <h1>Hi all, I'm Benjamin</h1>
        <p>
          I'm a web developer in Upstate New York with a passion for continually
          learning.
        </p>
      </FrontpageDiv>
      <div>
        <IllustrationImg
          src={office}
          alt="Person sitting on desk illustration"
        />
      </div>
    </SplitLayout>
  </Layout>
)

export default IndexPage
