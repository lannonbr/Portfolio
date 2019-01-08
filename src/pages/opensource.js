import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const OpenSourcePage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Open Source</h1>
    <p>I'm heavily involved in the Open Source community.</p>
    <p>
      This site is even open sourced on github:{' '}
      <a href="https://github.com/lannonbr/portfolio-gatsby">
        lannonbr/portfolio-gatsby
      </a>
    </p>
  </Layout>
)

export default OpenSourcePage
