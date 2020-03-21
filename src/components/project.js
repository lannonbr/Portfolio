import React from 'react'
import Img from 'gatsby-image'

function Project({ project, idx }) {
  const title = project.name
  const description = project.desc
  let img = project.img
  let date = project.created_date

  return (
    <article idx={idx} className="flex flex-col md:flex-row p-3 mb-6">
      <a className="flex-1" href={project.website_link}>
        <Img
          className="mb-5 md:mb-0 md:mx-5 rounded shadow-lg"
          fluid={img.childImageSharp.fluid}
        />
      </a>
      <div className="flex-1">
        <h2 className="mb-0">{title}</h2>
        <time className="mb-6 inline-block" dateTime={project.origin_date}>
          Created {date}
        </time>
        <p>{description}</p>
        <div className="flex">
          <a href={project.website_link} className="mr-5">
            Website Link
          </a>
          <a href={project.github_link}>GitHub Link</a>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-6 md:flex md:flex-wrap">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 border border-solid border-gray-400 mr-2 text-sm inline-block rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default Project
