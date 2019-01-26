import React from 'react'

import { Layout, SplitLayout } from '../components/Containers'

import SEO from '../components/Utils/seo'
import IllustrationImg from '../components/illustrationImg'

import office from '../images/office.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SplitLayout>
      <div>
        <h1>Hi all, I'm Benjamin</h1>
        <p>
          I'm a software engineer in Upstate New York with a passion for Web
          Development.
        </p>
      </div>
      <div>
        <IllustrationImg
          src={office}
          alt="Person sitting on desk illustration"
          marginLeft
        />
      </div>
    </SplitLayout>
  </Layout>
)

export default IndexPage
