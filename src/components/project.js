/** @jsx h */
import { h } from 'preact'

function Project({ project, idx }) {
  const title = project.name
  const description = project.desc
  let img = project.img
  let date = project.created_date

  return (
    <article idx={idx} class="flex flex-col md:flex-row p-3 pl-0 mb-6">
      <a class="flex-1" href={project.website_link}>
        <img class="mb-5 md:mb-0 rounded shadow-lg" src={img} />
      </a>
      <div class="flex-1 md:ml-5">
        <h2 class="mb-0">{title}</h2>
        <p class="mb-6 inline-block">Created {date}</p>
        <p>{description}</p>
        <div class="flex">
          <a href={project.website_link} class="mr-5">
            Website Link
          </a>
          <a href={project.github_link}>GitHub Link</a>
        </div>
        <div class="grid grid-cols-3 gap-2 mt-6 md:flex md:flex-wrap">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              class="px-2 py-1 border border-solid border-gray-400 mr-2 text-sm inline-block rounded"
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
