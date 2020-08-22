import React, { useState } from 'react'
import SEO from '../components/seo.js'
import EmptyStreet from '../images/empty-street.js'

const images = preval`
  const fs = require('fs')
  const path = require('path')

  const imgDir = path.resolve(__dirname, '../images/blog-icons')

  let files = fs.readdirSync(imgDir).map(file => {
    return {
      name: file.split(".")[0],
      format: file.split(".")[1],
      image: fs.readFileSync(path.join(imgDir, file), 'base64')
    };
  })

  module.exports = files
`

const statusMap = {
  budding: '🌱',
  'fully-grown': '🌲',
}

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
      <img
        src={`data:image/${logo.format};base64,${logo.image}`}
        alt=""
        className="w-5 mr-3"
      />
      <span>{name}</span>
    </button>
  )
}

const NoPosts = (props) => {
  return (
    <div className="flex items-center flex-col">
      <span className="hidden md:block">
        <EmptyStreet />
      </span>
      <p className="md:text-2xl md:mt-4">
        Sorry, No posts came up with those search terms or categories.
      </p>
    </div>
  )
}

const BlogIndexPage = ({ posts }) => {
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

  const visiblePosts = posts
    .filter((post) => {
      if (category === '') return true
      else return post.logo === category
    })
    .filter((post) => {
      if (titleFilter === '') return true
      else return post.title.toLowerCase().includes(titleFilter.toLowerCase())
    })

  return (
    <div className="max-w-6xl mx-auto">
      <SEO title="Blog" />
      <h1>Digital Garden</h1>
      <p>
        This is a evergrowing garden of content. Some pieces are budding while
        others are fully grown.
      </p>
      <div className="flex flex-col md:items-center md:flex-row">
        <strong className="mr-3">Search:</strong>
        <input
          type="text"
          aria-label="Search for a post"
          name="titleFilter"
          id="titleFilter"
          onChange={handleTitleFilterChange}
          className="border border-black p-2 w-full rounded dark:bg-cyan-transparent"
          placeholder="Search for a post"
          style={{
            color: 'var(--bodyText)',
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center my-4 md:my-8">
        <strong className="mr-3">Categories:</strong>
        {categories.map(({ cat, name }) => (
          <CuratedButton
            name={name}
            isSelected={!!(category === cat)}
            logo={images.filter((logo) => logo.name === cat)[0]}
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
        {visiblePosts.length > 0 ? (
          visiblePosts.map((post) => {
            const logo =
              post.logo && images.filter((logo) => logo.name === post.logo)[0]

            return (
              <article className="py-2 px-3 transition-all duration-200 ease-in-out hover:text-purple-700 hover:bg-purple-100 dark-hover:bg-cyan-transparent dark-hover:text-cyan-light mb-2">
                <a
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="flex items-center text-md md:text-xl rounded-sm mb-3 hover:no-underline"
                >
                  {post.logo ? (
                    <img
                      src={`data:image/${logo.format};base64,${logo.image}`}
                      alt=""
                      className="w-6 mr-2"
                    />
                  ) : (
                    <LogolessLogo />
                  )}
                  <span className="flex-grow">{post.title}</span>
                  {post.status && <span>{statusMap[post.status]}</span>}
                  <br />
                </a>
                <p className="text-sm md:text-base mb-0">{post.description}</p>
              </article>
            )
          })
        ) : (
          <NoPosts />
        )}
      </div>
    </div>
  )
}

export default BlogIndexPage
