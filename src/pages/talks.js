import React from 'react'
import talk from '../images/talk.svg'
import { SplitLayout } from '../components/Containers'
import SEO from '../components/Utils/seo'
import IllustrationImg from '../components/illustrationImg'
import styled from 'styled-components'
import { Youtube, File } from 'react-feather'
import moment from 'moment'

const talks = [
  {
    name: "Open Source Community Involvement: It's not just about the code",
    date: '2019-09-28',
    event: 'GDG Capital Reigon DevFest',
    location: 'Albany, NY',
    slides: 'https://lannonbr-gdg-2019.netlify.com/',
  },
  {
    name: 'OSS - Development in the Open',
    date: '2019-08-06',
    event: 'Careers in Code Bootcamp',
    location: 'Syracuse, NY',
    slides: 'https://cic-oss-talk.netlify.com/',
  },
  {
    name: 'OSS Development Talk and Q&A',
    date: '2019-07-16',
    event: 'Syracuse JS Meetup',
    location: 'Syracuse, NY',
    slides: 'https://syrjs-oss-talk.netlify.com',
  },
  {
    name: 'Cypress Workshop',
    date: '2019-04-16',
    event: 'Syracuse JS Meetup',
    location: 'Syracuse, NY',
    slides: 'https://syrjs-cypress.netlify.com',
    recording: 'https://youtu.be/qZbW9WKKUl0?t=1207',
  },
  {
    name: 'Gatsby Intro Workshop',
    date: '2019-01-15',
    event: 'Syracuse JS Meetup',
    location: 'Syracuse, NY',
    slides: 'https://gatsby-syrjs.netlify.com',
  },
]

const TalkCard = styled.article`
  border: 1px solid #d1d5da;
  border-radius: 3px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    @media (max-width: 768px) {
      display: block;
    }
  }

  ul {
    margin: 0;
    padding-left: 0;
  }

  li {
    display: flex;
    align-items: center;

    a {
      margin-left: 10px;
    }
  }
`

const TalksPage = () => {
  return (
    <>
      <SEO
        title="Talks"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <SplitLayout>
        <div>
          <h1>Talks</h1>
          <p>
            Through 2019, I've been starting to give presentations and workshops
            about technologies and tools that I use or interest me.
          </p>
          <h2>List of Talks</h2>
          {talks.map(talk => {
            return (
              <TalkCard>
                <header>
                  <h3>{talk.name}</h3>
                  <p>
                    {moment(talk.date).format('ll')} | {talk.event} |{' '}
                    {talk.location}
                  </p>
                </header>
                <ul>
                  {talk.slides && (
                    <li>
                      <File />
                      <a href={talk.slides}>Slides</a>
                    </li>
                  )}
                  {talk.recording && (
                    <li>
                      <Youtube />
                      <a href={talk.recording}>Recording</a>
                    </li>
                  )}
                </ul>
              </TalkCard>
            )
          })}
        </div>
        <div>
          <IllustrationImg src={talk} alt="speaking illustration" />
        </div>
      </SplitLayout>
    </>
  )
}

export default TalksPage
