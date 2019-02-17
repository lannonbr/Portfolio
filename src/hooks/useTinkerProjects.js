import { useStaticQuery, graphql } from 'gatsby'

function useTinkerProjects() {
  const { allPrismicTinkerproject: tinkerProjects } = useStaticQuery(graphql`
    {
      allPrismicTinkerproject(
        sort: { fields: data___start_time, order: DESC }
      ) {
        edges {
          node {
            prismicId
            data {
              title {
                text
              }
              start_time
              description {
                html
              }
              links {
                link {
                  html
                }
              }
            }
          }
        }
      }
    }
  `)

  return tinkerProjects
}

export default useTinkerProjects
