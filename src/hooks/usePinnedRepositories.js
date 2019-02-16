import { graphql, useStaticQuery } from 'gatsby'

function usePinnedRepositories() {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          pinnedRepositories(first: 6) {
            edges {
              node {
                nameWithOwner
                description
                url
                forkCount
                primaryLanguage {
                  color
                  name
                }
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.github.viewer.pinnedRepositories
}

export default usePinnedRepositories
