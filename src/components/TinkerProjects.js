import React from 'react'
import styled from 'styled-components'
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
      {tinkerProjects.nodes.map(project => {
        let title = project.name
        let date = project.created_date
        let links = project.links

        return (
          <TinkerCard key={project.id}>
            <h3>{title}</h3>
            <h5>As of {date}</h5>
            <p className="description">{project.desc}</p>
            <div className="links">
              {links.map((link, idx) => {
                return (
                  <a className="link" key={idx} href={link.url}>
                    {link.name}
                  </a>
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
