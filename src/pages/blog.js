import React, { useState } from 'react'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'

const LogolessLogo = () => (
  <div
    className="inline-block w-6 h-6 rounded-full mr-2"
    style={{
      backgroundImage: 'linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)',
    }}
  />
)

const CuratedButton = ({ logo, name, handleClick, isSelected }) => {
  return (
    <button
      className={`border border-black px-2 py-3 md:py-2 flex items-center rounded text-sm mb-4 md:mr-3 md:mb-0 hover:shadow-md ${
        isSelected
          ? 'shadow-in bg-purple-200 dark:bg-gray-900'
          : 'dark:bg-cyan-transparent'
      }`}
      style={{
        color: 'var(--bodyLink)',
      }}
      onClick={handleClick}
    >
      <img src={logo} alt="" className="w-5 mr-3" />
      <span>{name}</span>
    </button>
  )
}

const BlogIndexPage = ({ data }) => {
  const [category, setCategory] = useState('')
  const [titleFilter, setTitleFilter] = useState('')

  const handleTitleFilterChange = (evt) => {
    setTitleFilter(evt.target.value)
  }

  const categories = [
    { name: 'GitHub Actions', cat: 'github-actions' },
    { name: 'WebAssembly', cat: 'wasm' },
    { name: 'Gatsby', cat: 'gatsby' },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <SEO
        title="Blog"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <h1>Posts</h1>
      <div className="flex flex-col md:items-center md:flex-row">
        <strong className="mr-3">Search:</strong>
        <input
          type="text"
          name="titleFilter"
          id="titleFilter"
          onChange={handleTitleFilterChange}
          className="border border-black p-2 w-full rounded"
          placeholder="Search for a post"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center my-4 md:my-8">
        <strong className="mr-3">Categories:</strong>
        {categories.map(({ cat, name }) => (
          <CuratedButton
            name={name}
            isSelected={!!(category === cat)}
            logo={
              data.blogLogos.nodes.filter((logo) => logo.name === cat)[0]
                .publicURL
            }
            handleClick={() => {
              if (category === '') {
                setCategory(cat)
              } else if (category === cat) {
                setCategory('')
              } else {
                setCategory(cat)
              }
            }}
          />
        ))}
      </div>
      <div>
        {data.allMdx.nodes
          .filter((post) => {
            if (category === '') return true
            else return post.frontmatter.logo === category
          })
          .filter((post) => {
            if (titleFilter === '') return true
            else
              return post.frontmatter.title
                .toLowerCase()
                .includes(titleFilter.toLowerCase())
          })
          .map((node) => {
            const logo =
              node.frontmatter.logo &&
              data.blogLogos.nodes.filter(
                (logo) => logo.name === node.frontmatter.logo
              )[0].publicURL

            return (
              <article className="py-2 px-3 transition-all duration-200 ease-in-out hover:text-purple-700 hover:bg-purple-100 dark-hover:bg-cyan-transparent dark-hover:text-cyan-light mb-2">
                <Link
                  key={node.fields.slug}
                  to={node.fields.slug}
                  className="flex items-center text-md md:text-xl rounded-sm mb-3 hover:no-underline"
                >
                  {node.frontmatter.logo ? (
                    <img src={logo} alt="" className="w-6 mr-2" />
                  ) : (
                    <LogolessLogo />
                  )}
                  <span>{node.frontmatter.title}</span>
                  <br />
                </Link>
                <p className="text-sm md:text-base mb-0">
                  {node.frontmatter.description}
                </p>
              </article>
            )
          })}
      </div>
    </div>
  )
}

export default BlogIndexPage

export const query = graphql`
  query {
    blogLogos: allFile(filter: { relativePath: { regex: "/^blog-icons/" } }) {
      nodes {
        name
        publicURL
      }
    }

    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "ll")
          logo
          description
        }
      }
    }
  }
`
