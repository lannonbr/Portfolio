import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import IllustrationImg from '../components/illustrationImg'

import streamData from '../images/stream-data.svg'

const StreamPage = () => {
  return (
    <section className="md:grid md:grid-cols-2 md:gap-8 mb-4">
      <SEO
        title="Stream"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <div>
        <h1>Live Coding on Twitch</h1>
        <p>
          For years on Twitch, I was an active community member of many
          programming streams. Through all of it, I had the itch to try
          streaming myself and about halfway through 2019, I took the plunge.
        </p>
        <p>
          In June 2019, I began livestreaming on Twitch.tv. I tinker around with
          many technologies like Gatsby, React, GitHub Actions, Docker, Node,
          etc. Tune in every Wednesday Evening at 4PM ET (UTC-4) at{' '}
          <a href="https://twitch.tv/lannonbr">https://twitch.tv/lannonbr</a>
        </p>
        <p>
          I am member of the Twitch{` `}
          <a href="https://livecoders.dev">Live Coders</a> team, an outgoing and
          enthusiastic group of devs that write code, teach about technology,
          and promote the technical community.
        </p>

        <p>
          If you want to learn about how I run the show, take a read through my{' '}
          <Link to="/blog/2020-04-12-stream-setup/">Streaming Setup</Link> post.
        </p>

        <h2>Stream Projects</h2>
        <p>
          On my stream, you will see a lot of various projects spread out
          focusing around three main topics: Frontend Development, Data
          Vizualization, and Automation. From websites and frontend resources to
          data collection and vizualization, I try to balance my content between
          developing products and tooling.
        </p>
      </div>
      <div className="hidden md:block">
        <IllustrationImg src={streamData} alt="data illustration" />
      </div>
    </section>
  )
}

export default StreamPage
