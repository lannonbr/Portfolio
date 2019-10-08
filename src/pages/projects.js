import React from 'react'

import SEO from '../components/Utils/seo'
import Project from '../components/project'
import useFeaturedProjects from '../hooks/useFeaturedProjects'

const ProjectsPage = () => {
  const projects = useFeaturedProjects()

  return (
    <>
      <SEO
        title="Projects"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <h1>Projects</h1>
      <p>Here are a few larger scale projects I've created.</p>
      {projects.nodes.map((project, idx) => (
        <Project project={project} idx={idx} key={idx} />
      ))}
    </>
  )
}

export default ProjectsPage
