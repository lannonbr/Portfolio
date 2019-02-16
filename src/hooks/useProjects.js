import { useStaticQuery, graphql } from 'gatsby'

function useProjects() {
  const data = useStaticQuery(graphql`
    {
      allPrismicProject(
        sort: { fields: data___project_origin_date, order: DESC }
      ) {
        edges {
          node {
            data {
              project_title {
                text
              }
              project_origin_date
              description {
                text
              }
              description {
                text
              }
              website_link {
                url
                target
              }
              github_link {
                url
                target
              }
              technologies {
                technology_field
              }
              main_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allPrismicProject
}

export default useProjects
