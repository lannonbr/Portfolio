import { useStaticQuery, graphql } from 'gatsby'

function useFeaturedProjects() {
  const data = useStaticQuery(graphql`
    {
      allFeaturedProjectsYaml(sort: { fields: created_date, order: DESC }) {
        nodes {
          id
          name
          created_date(formatString: "MMMM YYYY")
          origin_date: created_date
          desc
          github_link
          website_link
          technologies
          img {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return data.allFeaturedProjectsYaml
}

export default useFeaturedProjects
