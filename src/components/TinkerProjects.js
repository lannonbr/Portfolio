/** @jsx h */
import { h } from 'preact'

function TinkerProjects({ projects }) {
  return (
    <div id="tinker-projects">
      {projects.map((project) => (
        <section key={project.name} class="tinker-project">
          <h3>{project.name}</h3>
          <h4>As of {project.created_date}</h4>
          <p>{project.desc}</p>
          <div class="links">
            {project.links &&
              project.links.map((link, idx) => {
                return (
                  <a key={idx} href={link.url}>
                    {link.name}
                  </a>
                )
              })}
          </div>
        </section>
      ))}
    </div>
  )
}

export default TinkerProjects
