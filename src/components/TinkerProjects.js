/** @jsx h */
import { h } from 'preact'

function TinkerProjects({ projects }) {
  return (
    <div class="grid gap-5 grid-cols-1 md:grid-cols-2">
      {projects.map((project) => (
        <section
          key={project.name}
          class="border border-gray-400 p-4 rounded flex flex-col"
        >
          <h3>{project.name}</h3>
          <h5>As of {project.created_date}</h5>
          <p class="flex-grow">{project.desc}</p>
          <div class="flex flex-col md:flex-row">
            {project.links &&
              project.links.map((link, idx) => {
                return (
                  <a key={idx} href={link.url} class="md:mr-4">
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
