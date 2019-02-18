import React from 'react'
import Img from 'gatsby-image'
import moment from 'moment'
import styled from 'styled-components'

import TechCard from './techCard'

const ProjectWrapper = styled.article`
  display: flex;
  padding: 10px;
  margin-bottom: 30px;

  .project__image {
    box-shadow: 0 2px 6px hsla(120, 0%, 20%, 0.3);
    border-radius: 4px;
    margin: 0 20px;
  }

  .project__image-link {
    flex: 1;
  }

  .project__details {
    flex: 1;

    h2 {
      margin-bottom: 0;
    }

    time {
      margin-bottom: 1.45rem;
      display: inline-block;
    }
  }

  .project__links {
    display: flex;
  }

  .project__link {
    margin-right: 20px;
  }

  .project__tech {
    display: flex;
    margin-top: 26px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .project__image {
      margin-bottom: 20px;
    }

    .project__tech {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
      grid-gap: 10px;
    }

    .project__links {
      justify-content: flex-start;
    }
  }
`

function ProjectLink({ url, target, text }) {
  return (
    <a href={url} target={target} className="project__link">
      {text}
    </a>
  )
}

function Project({ project, idx }) {
  const title = project.project_title.text
  const description = project.description.text
  let img = project.main_image.localFile

  let dateObj = moment(project.project_origin_date, 'YYYY-MM-DD')
  let date = dateObj.format(`MMMM YYYY`)

  return (
    <ProjectWrapper idx={idx}>
      <a className="project__image-link" href={project.website_link.url}>
        <Img className="project__image" fluid={img.childImageSharp.fluid} />
      </a>
      <div className="project__details">
        <h2>{title}</h2>
        <time dateTime={project.project_origin_date}>Created {date}</time>
        <p>{description}</p>
        <div className="project__links">
          <ProjectLink
            url={project.website_link.url}
            target={project.website_link.target}
            text="Website Link"
          />
          <ProjectLink
            url={project.github_link.url}
            target={project.github_link.target}
            text="GitHub Link"
          />
        </div>
        <div className="project__tech">
          {project.technologies.map(tech => {
            return (
              <TechCard
                key={tech.technology_field}
                tech={tech.technology_field}
              />
            )
          })}
        </div>
      </div>
    </ProjectWrapper>
  )
}

export default Project
