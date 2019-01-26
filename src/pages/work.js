import React from 'react'

import { Layout } from '../components/Containers'
import SEO from '../components/Utils/seo'

const WorkPage = () => (
  <Layout>
    <SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Work</h1>
    <p>Talk about professional career</p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
      asperiores incidunt veniam ratione, placeat perspiciatis enim deleniti
      beatae est sint debitis id ipsum eligendi animi a, cupiditate earum alias
      quaerat.
    </p>
  </Layout>
)

export default WorkPage
