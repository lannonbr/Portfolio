import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Project from '../components/project'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <StaticQuery
      query={graphql`
        {
          allPrismicProject {
            edges {
              node {
                id
                data {
                  project_title {
                    text
                  }
                  project_origin_date
                  description {
                    text
                  }
                  description {
                    text
                  }
                  technologies {
                    technology_field
                  }
                  main_image {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 1600) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            {data.allPrismicProject.edges.map(projectObj => {
              return <Project project={projectObj.node.data} />
            })}
          </>
        )
      }}
    />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
