import React, { Fragment } from 'react'

import SEO from '../components/seo'
import Project from '../components/project'
import useFeaturedProjects from '../hooks/useFeaturedProjects'

const ProjectsPage = () => {
  const projects = useFeaturedProjects()

  return (
    <Fragment>
      <SEO
        title="Projects"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <h1>Projects</h1>
      <p>Here are a few larger scale projects I've created.</p>
      {projects.nodes.map((project, idx) => (
        <Project project={project} idx={idx} key={idx} />
      ))}
    </Fragment>
  )
}

export default ProjectsPage
