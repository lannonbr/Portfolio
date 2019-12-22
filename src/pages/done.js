import React from 'react'
import SEO from '../components/Utils/seo'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Card = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 0;
  }

  time {
    font-style: italic;
    color: #686868;
  }
`

const DoneList = () => {
  const data = useStaticQuery(graphql`
    {
      allDoneListYaml(sort: { fields: date, order: DESC }) {
        nodes {
          id
          date(formatString: "ll")
          mdxDesc {
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
    let [month, _, year] = entry.date.split(' ')

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

        {Object.entries(months).map(month => {
          return (
            <div
              style={{
                marginBottom: 30,
              }}
            >
              <h2
                style={{
                  color: 'var(--primaryColor)',
                  fontSize: 22,
                  marginTop: 10,
                  marginBottom: 5,
                }}
              >
                {month[0]}
              </h2>
              <hr style={{ color: 'var(--primaryColor)' }} />
              {month[1].map(entry => {
                let descBody = entry.mdxDesc.childMdx.body

                return (
                  <Card key={entry.id}>
                    <MDXRenderer>{descBody}</MDXRenderer>
                    <time>{entry.date}</time>
                  </Card>
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
