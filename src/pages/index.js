import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SplitLayout from '../components/SplitLayout'
import IllustrationImg from '../components/illustrationImg'

import office from '../images/office.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SplitLayout>
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
      <IllustrationImg src={office} alt="Person sitting on desk illustration" marginLeft />
    </SplitLayout>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam omnis
      ratione sit aut accusamus dolorum voluptate, voluptates inventore tempore
      beatae natus explicabo, quam minima, quae quia blanditiis. Commodi, dicta
      unde.
    </p>
  </Layout>
)

export default IndexPage
