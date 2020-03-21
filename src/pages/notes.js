import React from 'react'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import IllustrationImg from '../components/illustrationImg'
import notesIllustration from '../images/taking-notes.svg'

export default ({ data }) => {
  return (
    <>
      <SEO
        title="Notes"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <section className="md:grid md:grid-cols-2 md:gap-8 mb-4">
        <div>
          <h1>Notes</h1>
          <p>
            {' '}
            This is a collection of personal notes that may not be fully
            organized, but just is a place to write down ideas before moving it
            into either a blogpost or a page on{' '}
            <a href="https://lannonbr.dev/">lannonbr.dev</a>.
          </p>
          <ul>
            {data.allFile.nodes.map((node) => {
              const file = node.relativePath.slice(0, -3)

              return (
                <li>
                  <Link to={`/notes/${file}`}>{file}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <IllustrationImg
            src={notesIllustration}
            alt="Taking Notes illustration"
          />
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "notes" }, extension: { eq: "md" } }
    ) {
      nodes {
        id
        relativePath
        childMdx {
          body
        }
      }
    }
  }
`
