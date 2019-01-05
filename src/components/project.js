import React from 'react'
import Img from 'gatsby-image'

function Project({ project }) {
  return (
    <div
      className="project"
      style={{
        border: '1px solid black',
        marginBottom: 5,
        padding: 10,
      }}
    >
      <h1>{project.project_title.text}</h1>
      <Img fluid={project.main_image.localFile.childImageSharp.fluid} />
      <p>{project.description.text}</p>
      {project.technologies.map(tech => {
        return <p key={tech.technology_field}>Tech: {tech.technology_field}</p>
      })}
    </div>
  )
}

export default Project
