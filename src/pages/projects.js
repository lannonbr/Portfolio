import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'

const prismicProjectsQuery = graphql`
  {
    allPrismicProject(
      sort: { fields: data___project_origin_date, order: DESC }
    ) {
      edges {
        node {
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
            website_link {
              url
              target
            }
            github_link {
              url
              target
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
`

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Projects</h1>
    <StaticQuery
      query={prismicProjectsQuery}
      render={data => {
        return (
          <>
            {data.allPrismicProject.edges.map((projectObj, idx) => {
              return <Project project={projectObj.node.data} idx={idx} key={idx} />
            })}
          </>
        )
      }}
    />
  </Layout>
)

export default ProjectsPage
