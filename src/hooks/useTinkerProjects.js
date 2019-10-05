import { useStaticQuery, graphql } from 'gatsby'

function useTinkerProjects() {
  const data = useStaticQuery(graphql`
    {
      allTinkerProjectsYaml(sort: { fields: created_date, order: DESC }) {
        nodes {
          id
          name
          created_date(formatString: "MMMM YYYY")
          origin_date: created_date
          desc
          links {
            name
            url
          }
        }
      }
    }
  `)

  return data.allTinkerProjectsYaml
}

export default useTinkerProjects
