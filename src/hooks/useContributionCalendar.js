import { graphql, useStaticQuery } from 'gatsby'

function useContributionCalendar() {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  color
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.github.viewer.contributionsCollection.contributionCalendar
}

export default useContributionCalendar
