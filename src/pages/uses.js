import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const UsesPage = () => (
  <Layout>
    <SEO title="Uses" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Uses</h1>
    <p>
      With inspiration from <a href="https://wesbos.com/uses/">Wes Bos</a>, this
      page is going to list hardware / software I use on a daily basis
    </p>
    <h2>Hardware</h2>
    <p>
      2015 Macbook Pro, Azio Retro Classic (Blue Switches) Mechanical Keyboard,
      Basic Dell Mouse, 2x Dell UltraSharp U2715H Monitors.
    </p>
    <h2>Software</h2>
    <p>
      MacOS, Visual Studio Code, Fira Code, iTerm, Firefox, Chrome, Notion,
      Apple Notes, Octobox, Todoist, Slack, Discord, Adobe XD
    </p>
  </Layout>
)

export default UsesPage
