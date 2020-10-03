/** @jsx h */
import { h } from 'preact'
import TalkIllustration from '../images/talk.js'
import SEO from '../components/seo.js'
import Youtube from '../components/feather/youtube.js'
import File from '../components/feather/file.js'
import dayjs from 'dayjs'
import { Fragment } from 'preact'

const talks = [
  {
    name: 'Caching Jamstack Sites With GitHub Actions',
    date: '2020-07-09',
    event: 'Learn With Jason',
    location: 'Online',
    recording:
      'https://www.learnwithjason.dev/caching-jamstack-sites-with-github-actions',
  },
  {
    name: 'Getting up to speed with GitHub Actions',
    date: '2020-03-17',
    event: 'Reactadelphia (Remote)',
    location: 'Philidelphia, PA',
    slides: 'https://lannonbr-phl-mar20.netlify.com',
    recording: 'https://www.youtube.com/watch?v=bpkXQ_pCWLM',
  },
  {
    name: 'Intro to GitHub Actions Workshop',
    date: '2019-11-19',
    event: 'Syracuse JS Meetup',
    location: 'Syracuse, NY',
    recording: 'https://www.youtube.com/watch?v=M_UG7jlUglA',
  },
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

const TalksPage = () => {
  return (
    <Fragment>
      <section className="md:grid md:grid-cols-2 md:gap-8 mb-4">
        <SEO title="Talks" />
        <div>
          <h1>Talks</h1>
          <p>
            Since 2019, I've been starting to give presentations and workshops
            about technologies and tools that I use or interest me.
          </p>
        </div>
        <div className="hidden md:block">
          <TalkIllustration />
        </div>
      </section>
      <section>
        <h2>List of Talks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {talks.map((talk) => {
            let formattedDate = dayjs(talk.date).format('MMM D, YYYY')

            return (
              <article className="border border-solid border-gray-400 rounded p-4 flex flex-col">
                <header className="p-0 md:flex justify-between items-start">
                  <h3>{talk.name}</h3>
                  <div className="mb-4">
                    <p className="mt-0 mb-1 md:text-right">{formattedDate}</p>
                    <p className="mt-0 mb-1 md:text-right">{talk.event}</p>
                    <p className="mt-0 md:text-right">{talk.location}</p>
                  </div>
                </header>
                <ul className="m-0 pl-0">
                  {talk.slides && (
                    <li className="flex items-center">
                      <File alt="" />
                      <a href={talk.slides} className="ml-2">
                        Slides
                      </a>
                    </li>
                  )}
                  {talk.recording && (
                    <li className="flex items-center">
                      <Youtube alt="YouTube Recording" />
                      <a href={talk.recording} className="ml-2">
                        Recording
                      </a>
                    </li>
                  )}
                </ul>
              </article>
            )
          })}
        </div>
      </section>
    </Fragment>
  )
}

export default TalksPage
