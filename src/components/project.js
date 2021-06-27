/** @jsx h */
import { h } from 'preact'

function Project({ project, idx }) {
  const title = project.name
  const description = project.desc
  let img = project.img
  let date = project.created_date

  return (
    <article idx={idx} class="project">
      <a class="img-preview" href={project.website_link}>
        <img src={img} />
      </a>
      <div class="details">
        <h2 class="mb-0">{title}</h2>
        <p class="creation-date">Created {date}</p>
        <p>{description}</p>
        <div class="links">
          <a href={project.website_link}>Website Link</a>
          <a href={project.github_link}>GitHub Link</a>
        </div>
        <div class="technologies">
          {project.technologies
            ? project.technologies.map((tech) => (
                <span key={tech} class="tech-card">
                  {tech}
                </span>
              ))
            : ''}
        </div>
      </div>
    </article>
  )
}

export default Project
