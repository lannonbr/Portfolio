import React from 'react'

import { Layout, SplitLayout } from '../components/Containers'
import SEO from '../components/Utils/seo'
import { Link } from 'gatsby'
import styled from 'styled-components'
import IllustrationImg from '../components/illustrationImg'
import conversation from '../images/conversation.svg'

const TinkerCard = styled.section`
  border: 1px solid #d1d5da;
  padding: 16px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;

  p {
    flex-grow: 1;
  }
`

const TinkeringContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const WorkPage = () => (
  <Layout>
    <SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
    <SplitLayout>
      <div>
        <h1>Work</h1>
        <p>
          I am currently employed as a web developer, but I am always wanting to
          learn new technologies and ways to build new things. As a developer, I
          strive to create products and solutions that can lift up others.
        </p>
        <p>
          If you want to see the hardware / software I use, head over to my{' '}
          <Link to="/uses/">Uses Page</Link>.
        </p>
      </div>
      <div>
        <IllustrationImg
          src={conversation}
          alt="Two people having a conversation"
        />
      </div>
    </SplitLayout>
    <h2>Community Involvement</h2>
    <p>
      I am an active member of the Syracuse Developer community and go to events
      such as Open Hack or the Syracue JS meetup. It's a place that I've found
      local dev opportunities and a place to help out / get answers in the tech
      community. You can find out more at{' '}
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
      livestreaming and learning with others. As I've been community members of
      these channels, I enjoy partaking in discussions with the streamer and
      community members in the chatroom and getting involved with projects
      they're building and putting up on GitHub. You may often see me in the
      chats of <a href="https://twitch.tv/noopkat">Suz Hinton</a>,{' '}
      <a href="https://twitch.tv/clarkio">Brian Clark</a>,{' '}
      <a href="https://twitch.tv/csharpfritz">Jeff Fritz</a>, and plenty of
      others.
    </p>
    <h2>Currently tinkering with</h2>
    <p>
      These are a few technologies I am tinkering with by building side projects
    </p>
    <TinkeringItems />
  </Layout>
)

const TinkeringItems = props => {
  return (
    <TinkeringContainer>
      <TinkerCard>
        <h3>Gatsby</h3>
        <h5>As of August 2018</h5>
        <p>
          A React based Web Framework. I've been building this site as well as
          my <a href="https://vscode.rocks">VS Code blog</a> with Gatsby. As
          well, given Gatsby is Open Source, I've been actively contributing to
          their repo through issues and PRs. and making the experience of
          developing with Gatsby more enjoyable and easier to comprehend
        </p>
        <a href="https://gatsby.org">Gatsby.org</a>
      </TinkerCard>
      <TinkerCard>
        <h3>GitHub Actions</h3>
        <h5>As of November 2018</h5>
        <p>
          GitHub Actions allow developers to integrate workflows into GitHub.
          It's a step beyond normal{' '}
          <abbr title="Continuous Integration / Continuous Delivery">
            CI/CD
          </abbr>{' '}
          and I'm testing ways of expanding ideas on how I can create tools to
          extend GitHub.
        </p>
        <a href="https://github.com/features/actions">
          GitHub Actions Splash page
        </a>
        <a href="https://developer.github.com/actions/">GitHub Actions Docs</a>
      </TinkerCard>
      <TinkerCard>
        <h3>VS Code Extensions</h3>
        <h5>As of August 2018</h5>
        <p>
          Microsoft's VS Code text editor can be enhanced with additional
          features through extensions. I particularly have built an extension to
          add parameter annotations into JS-based files:{' '}
          <a href="https://marketplace.visualstudio.com/items?itemName=lannonbr.vscode-js-annotations">
            JS Parameter Annotations
          </a>
        </p>
        <a href="https://code.visualstudio.com/api/">
          VS Code Extension API Docs
        </a>
      </TinkerCard>
      <TinkerCard>
        <h3>Stream Deck SDK</h3>
        <h5>As of February 2019</h5>
        <p>
          Although I do not stream, the{' '}
          <a href="https://www.elgato.com/en/gaming/stream-deck">
            Elgato Stream Deck
          </a>{' '}
          is becoming useful for non-streamers as a productivity device.
          Recently, they've created a SDK for developers to build new plugins
          for the device. There's been devs making plugins to toggle Wi-Fi light
          bulbs, trigger DevOps deployment scripts, view statistics, and I am
          interested in thinking of how I could use it to benefit my workflows.
        </p>
        <a href="https://developer.elgato.com/documentation/stream-deck/sdk/overview/">
          Elgato SDK Docs
        </a>
      </TinkerCard>
    </TinkeringContainer>
  )
}

export default WorkPage
