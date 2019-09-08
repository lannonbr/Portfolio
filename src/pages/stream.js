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
            I've been a frequent community member of the Live Coders team on
            Twitch and the broader live programming community. I've always had
            the urge to give it a shot myself, but never got to doing such until
            now.
          </p>
          <p>
            Starting in June 2019, I began a livestream on Twitch.tv. I am
            likely to tinker around with many technologies like Gatsby, React,
            GitHub Actions, Docker, Node, etc. Tune in every Wednesday Evening
            at 4PM ET (UTC-4) at{' '}
            <a href="https://twitch.tv/lannonbr">https://twitch.tv/lannonbr</a>
          </p>

          <h2>Current Project: Tinkering with GitHub Actions</h2>
          <p>
            The second beta of GitHub Actions has been out for a bit now, and
            for the past few weeks I've been showcasing workflows I've been
            developing using the new ecosystem that is based on a YAML syntax
            for workflow files.
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
