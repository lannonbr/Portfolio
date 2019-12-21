import React from 'react'
import SEO from '../components/Utils/seo'
import { useStaticQuery, graphql } from 'gatsby'

const DoneList = () => {
  const data = useStaticQuery(graphql`
    {
      allDoneListYaml(sort: { fields: date, order: ASC }) {
        nodes {
          id
          date(formatString: "ll")
          desc
        }
      }
    }
  `)

  return (
    <>
      <SEO
        title="Done List"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <div>
        <h1>Done List</h1>
        <p>This is a listing of things I've accomplished.</p>
        <ul>
          {data.allDoneListYaml.nodes.map(entry => {
            return (
              <li key={entry.id}>
                {entry.date} | {entry.desc}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default DoneList
