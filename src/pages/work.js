import React from 'react'

import { SplitLayout } from '../components/Containers'
import SEO from '../components/Utils/seo'
import { Link } from 'gatsby'
import IllustrationImg from '../components/illustrationImg'
import conversation from '../images/conversation.svg'
import TinkerProjects from '../components/TinkerProjects'

const WorkPage = () => (
  <>
    <SEO
      title="Work"
      keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
    />
    <SplitLayout>
      <div>
        <h1>Work</h1>
        <p>
          I am currently employed as a web developer, but I am always learning
          new technologies and building new things. As a developer, I strive to
          create products and solutions that can empower other developers.
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
      such as Open Hack and the Syracue JS meetup. It's a place that I've found
      local dev opportunities and a place to help out / get answers in the tech
      community. You can find out more at{' '}
      <a href="https://syracuse.io">Syracuse.io</a>.
    </p>
    <p>
      As well, I am heavily active on GitHub. If you want to learn more about my
      open source work, head over to the{' '}
      <Link to="/opensource/">Open Source Page</Link> or my{' '}
      <a href="https://github.com/lannonbr">Github</a>.
    </p>
    <p>
      Finally, I've found a haven in the Twitch Dev community of individuals
      livestreaming and learning with others. I enjoy partaking in discussions
      with streamers and community members in the chatroom and getting involved
      with projects they're building and putting up on GitHub. You may often see
      me in the chats of <a href="https://twitch.tv/noopkat">Suz Hinton</a>,{' '}
      <a href="https://twitch.tv/clarkio">Brian Clark</a>,{' '}
      <a href="https://twitch.tv/csharpfritz">Jeff Fritz</a>, and plenty of
      others.
    </p>
    <h2>Currently Tinkering With</h2>
    <p>
      These are a few technologies I am tinkering with by building side projects
    </p>
    <TinkerProjects />
  </>
)

export default WorkPage
