import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Contact</h1>
    <p>Contact me here</p>
    <ul>
      <li>
        <a href="https://github.com/lannonbr">GitHub</a>
      </li>
      <li>
        <a href="https://twitter.com/lannonbr">Twitter</a>
      </li>
    </ul>
  </Layout>
)

export default ContactPage
