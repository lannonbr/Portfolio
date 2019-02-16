import { useStaticQuery, graphql } from 'gatsby'

function useNavigation() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navigationLinks {
            url
            name
          }
        }
      }
    }
  `)

  return data.site.siteMetadata.navigationLinks
}

export default useNavigation
