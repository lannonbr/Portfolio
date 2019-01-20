import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import conversation from '../images/conversation.svg'
import SplitLayout from '../components/SplitLayout'
import IllustrationImg from '../components/illustrationImg'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <SplitLayout>
      <div>
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
      </div>
      <IllustrationImg
        src={conversation}
        alt="People conversing illustration"
        marginLeft
      />
    </SplitLayout>
  </Layout>
)

export default ContactPage
