import React from 'react'
import { Link } from 'gatsby'
import useTinkerProjects from '../hooks/useTinkerProjects'

function TinkerProjects() {
  const tinkerProjects = useTinkerProjects()

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
      {tinkerProjects.nodes.map((project) => (
        <section
          key={project.id}
          className="border border-gray-400 p-4 rounded flex flex-col"
        >
          <h3>{project.name}</h3>
          <h5>As of {project.created_date}</h5>
          <p className="flex-grow">{project.desc}</p>
          <div className="flex flex-col md:flex-row">
            {project.links.map((link, idx) => {
              if (link.url.startsWith('https')) {
                return (
                  <a key={idx} href={link.url} className="md:mr-4">
                    {link.name}
                  </a>
                )
              } else {
                return (
                  <Link key={idx} to={link.url} className="md:mr-4">
                    {link.name}
                  </Link>
                )
              }
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

export default TinkerProjects
