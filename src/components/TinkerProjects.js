import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import useTinkerProjects from '../hooks/useTinkerProjects'

const TinkerCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TinkerCard = styled.section`
  border: 1px solid #d1d5da;
  padding: 16px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;

  .description {
    flex-grow: 1;
  }

  .links {
    display: flex;
  }

  .link {
    margin-right: 16px;
  }

  @media (max-width: 768px) {
    .links {
      flex-direction: column;
    }
    .link {
      margin-right: 0;
    }
  }
`

function TinkerProjects() {
  const tinkerProjects = useTinkerProjects()

  return (
    <TinkerCardGrid>
      {tinkerProjects.edges.map(({ node: project }) => {
        let title = project.data.title.text
        let time = moment(project.data.start_time, 'YYYY-MM-DD')
        let date = time.format('MMMM YYYY')
        let links = project.data.links

        return (
          <TinkerCard key={project.prismicId}>
            <h3>{title}</h3>
            <h5>As of {date}</h5>
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: project.data.description.html,
              }}
            />
            <div className="links">
              {links.map(({ link }, idx) => {
                return (
                  <span
                    className="link"
                    key={idx}
                    dangerouslySetInnerHTML={{ __html: link.html.slice(3, -4) }}
                  />
                )
              })}
            </div>
          </TinkerCard>
        )
      })}
    </TinkerCardGrid>
  )
}

export default TinkerProjects
