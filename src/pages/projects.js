import React from 'react'

import { Layout } from '../components/Containers'
import SEO from '../components/Utils/seo'
import Project from '../components/project'
import useProjects from '../hooks/useProjects'

const ProjectsPage = () => {
  const projects = useProjects()

  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Projects</h1>
      {projects.edges.map((projectObj, idx) => (
        <Project project={projectObj.node.data} idx={idx} key={idx} />
      ))}
    </Layout>
  )
}

export default ProjectsPage
