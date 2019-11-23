import React from 'react'

import { SplitLayout } from '../components/Containers'
import SEO from '../components/Utils/seo'
import IllustrationImg from '../components/illustrationImg'

import streamData from '../images/stream-data.svg'

const StreamPage = () => {
  return (
    <>
      <SEO
        title="Stream"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <SplitLayout>
        <div>
          <h1>Live Coding on Twitch</h1>
          <p>
            For years on Twitch, I was an active community member of many
            programming streams. Through all of it, I had the itch to try
            streaming myself and about halfway through 2019, I took the plunge.
          </p>
          <p>
            In June 2019, I began a livestream on Twitch.tv. I tinker around
            with many technologies like Gatsby, React, GitHub Actions, Docker,
            Node, etc. Tune in every Wednesday Evening at 4PM ET (UTC-4) at{' '}
            <a href="https://twitch.tv/lannonbr">https://twitch.tv/lannonbr</a>
          </p>
          <p>
            I am member of the Twitch{` `}
            <a href="https://livecoders.dev">Live Coders</a> team.
          </p>

          <h2>Projects: Gatsby / GitHub Actions</h2>
          <p>
            Ony my stream, you will see a lot of various projects spread out
            between using Gatsby and GitHub Actions. It's the mixture of
            developing applications and websites alongside automations around
            maintainence of these projects that gives a balance between product
            and tooling.
          </p>

          <h2>Stream Notes</h2>
          <p>
            I store notes about my stream up on{' '}
            <a href="https://www.notion.so/">Notion</a>. This allows me to
            publish clean notes about the stream and have them updated in real
            time. If you wish to view them, head over to{' '}
            <a href="https://www.notion.so/Lannonbr-Livestream-Notes-30e76904569b4c9aaebdd8422644fc0d">
              Lannonbr Livestream Notes
            </a>{' '}
            on Notion.
          </p>
        </div>
        <div>
          <IllustrationImg src={streamData} alt="data illustration" />
        </div>
      </SplitLayout>
    </>
  )
}

export default StreamPage
