import React from 'react'
import Img from 'gatsby-image'
import moment from 'moment'
import TechCard from '../components/techCard'

import './project.css'

function Project({ project, idx }) {
  const title = project.project_title.text
  const description = project.description.text
  let img = project.main_image.localFile

  let dateObj = moment(project.project_origin_date, 'YYYY-MM-DD')
  let date = dateObj.format(`MMMM YYYY`)

  return (
    <article
      className="project"
      style={{
        marginBottom: 30,
        padding: 10,
        display: 'flex',
        flexDirection: idx % 2 === 0 ? 'unset' : 'row-reverse',
      }}
    >
      <Img
        style={{
          flex: 1,
          boxShadow: '0 2px 6px hsla(120, 0%, 20%, 0.3)',
          borderRadius: 4,
          marginLeft: 20,
          marginRight: 20,
        }}
        fluid={img.childImageSharp.fluid}
      />
      <div style={{ flex: 1 }}>
        <h2>{title}</h2>
        <time>Created: {date}</time>
        <p>{description}</p>
        <a
          className="project-link"
          href={project.github_link.url}
          target={project.github_link.target}
        >
          GitHub Link
        </a>
        <a
          className="project-link"
          href={project.website_link.url}
          target={project.website_link.target}
        >
          Website Link
        </a>
        {project.technologies.map(tech => {
          return (
            <TechCard
              key={tech.technology_field}
              tech={tech.technology_field}
            />
          )
        })}
      </div>
    </article>
  )
}

export default Project
