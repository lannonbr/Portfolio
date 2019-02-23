import { graphql, useStaticQuery } from 'gatsby'

function useStarredRepos() {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          starredRepositories(last: 5) {
            edges {
              node {
                id
                nameWithOwner
                url
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

  return data.github.viewer.starredRepositories
}

export default useStarredRepos
