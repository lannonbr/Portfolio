import React from 'react'

import { Layout } from '../components/Containers'
import SEO from '../components/Utils/seo'
import { Link } from 'gatsby'

const WorkPage = () => (
  <Layout>
    <SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Work</h1>
    <p>
      I am currently employed as a web developer, but I am always wanting to
      learn new technologies and ways to build new things.
    </p>
    <p>
      If you want to see the hardware / software I use, head over to my{' '}
      <Link to="/uses/">Uses Page</Link>.
    </p>
    <h2>Community Involvement</h2>
    <p>
      I am an active member of the Syracuse Developer community and go to events
      such as Open Hack or the Syracue JS meetup. You can find out more at{' '}
      <a href="https://syracuse.io">Syracuse.io</a>.
    </p>
    <p>
      As well, I am heavily active on GitHub. If you want to learn more about my
      open source work, head over to the{' '}
      <Link to="opensource">Open Source Page</Link> or my{' '}
      <a href="https://github.com/lannonbr">Github</a>.
    </p>
    <p>
      Finally, I've found a haven in the Twitch Dev community of individuals
      livestreaming and learning with others. You may often see me in the chats
      of <a href="https://twitch.tv/noopkat">Suz Hinton</a>,{' '}
      <a href="https://twitch.tv/clarkio">Brian Clark</a>,{' '}
      <a href="https://twitch.tv/csharpfritz">Jeff Fritz</a>, and plenty of
      others.
    </p>
    <h2>Currently tinkering with</h2>
    <TinkeringItems />
  </Layout>
)

const TinkeringItems = props => {
  return (
    <ul>
      <li>Gatsby</li>
      <li>GitHub Actions</li>
      <li>VS Code Extensions</li>
    </ul>
  )
}

export default WorkPage
