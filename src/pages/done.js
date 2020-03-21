import React from 'react'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const DoneList = () => {
  const data = useStaticQuery(graphql`
    {
      allDoneListYaml(sort: { fields: date, order: DESC }) {
        nodes {
          id
          date(formatString: "ll")
          childCustomMdxStringNode {
            childMdx {
              body
            }
          }
        }
      }
    }
  `)

  let months = {}

  data.allDoneListYaml.nodes.forEach(entry => {
    let [month, , year] = entry.date.split(' ')

    if (!Object.keys(months).includes(`${month} ${year}`)) {
      months[`${month} ${year}`] = []
    }
    months[`${month} ${year}`].push(entry)
  })

  return (
    <>
      <SEO
        title="Done List"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <div>
        <h1>Done List</h1>
        <p>This is a listing of things I've accomplished.</p>

        {Object.entries(months).map(([month, events]) => {
          return (
            <div key={month} className="mb-8">
              <h2
                className="text-2xl mt-3 mb-1"
                style={{
                  color: 'var(--primaryColor)',
                }}
              >
                {month}
              </h2>
              <hr className="border-purple-800" />
              {events.map(entry => {
                let descBody = entry.childCustomMdxStringNode.childMdx.body

                return (
                  <div key={entry.id} className="mb-5">
                    <MDXRenderer>{descBody}</MDXRenderer>
                    <time className="-mt-4 block text-gray-600 italic">
                      {entry.date}
                    </time>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DoneList
