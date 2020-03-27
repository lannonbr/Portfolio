/**
 * useNavigation React Hook. Grabs the navigation links from the gatsby-config.js file and returns them as an array
 */
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
  let navLinks = data.site.siteMetadata.navigationLinks

  return navLinks
}

export default useNavigation
