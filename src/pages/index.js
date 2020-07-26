import React from 'react'
import SEO from '../components/seo.js'
import Office from '../images/office.js'
import ChevronRight from '../components/feather/chevron-right.js'

const images = preval`
  const fs = require('fs')
  const path = require('path')

  const imgDir = path.resolve(__dirname, 'src/images/blog-icons')

  let files = fs.readdirSync(imgDir).map(file => {
    return {
      name: file.split(".")[0],
      format: file.split(".")[1],
      image: fs.readFileSync(path.join(imgDir, file), 'base64')
    };
  })

  module.exports = files
`

const Banner = () => {
  return (
    <div
      style={{
        color: 'hsl(0, 0%, 98%)',
        fontSize: 16,
        lineHeight: 1.5,
        padding: 32,
        marginBottom: 16,
        width: '100%',
        backgroundColor: 'hsl(0, 0%, 4%)',
        gridColumn: '1 / span 2',
      }}
    >
      <h1 className="text-2xl md:text-3xl">#BlackLivesMatter</h1>
      <p className="text-base md:text-xl">
        I stand in solidarity with the Black community against racism and
        injustice.
      </p>
      <p className="mb-0">
        <strong>
          <a
            href="https://blacklivesmatters.carrd.co/"
            style={{ color: 'hsl(0, 0%, 86%)' }}
          >
            Go here to find out how <em>you</em> can help.
          </a>
        </strong>
      </p>
    </div>
  )
}

const LogolessLogo = () => (
  <div
    className="inline-block w-6 h-6 rounded-full mr-4"
    style={{
      backgroundImage: 'linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)',
    }}
  />
)

const IndexPage = ({ posts }) => (
  <section className="md:grid md:grid-cols-2 md:gap-8 mb-4">
    <SEO title="Home" />
    <Banner />
    <div className="flex flex-col justify-center">
      <h1 className="text-center text-4xl md:text-left md:text-6xl">
        Hi all, I'm Benjamin
      </h1>
      <p className="lg:text-xl md:leading-loose">
        I'm a web developer in Upstate New York with a passion for exploration
        and continual learning.
      </p>
      <div className="inline-flex items-baseline justify-between">
        <h2>New Posts</h2>
        <a href="/garden" className="flex items-center group">
          All Posts
          <ChevronRight
            className="h-5 w-5 relative right-0 transform transition-transform duration-200 group-hover:translate-x-1"
            alt=""
          />
        </a>
      </div>
      {posts.map((post) => {
        const logo =
          post.logo && images.filter((logo) => logo.name === post.logo)[0]

        return (
          <div className="mb-3">
            <a
              href={`/${post.slug}`}
              className="rounded py-2 px-3 flex items-center transition-all duration-200 ease-in-out hover:text-purple-700 hover:bg-purple-100 dark-hover:bg-cyan-transparent dark-hover:text-cyan-light hover:no-underline"
            >
              {post.logo ? (
                <img
                  src={`data:image/${logo.format};base64,${logo.image}`}
                  alt=""
                  className="w-6 mr-4"
                />
              ) : (
                <LogolessLogo />
              )}
              {post.title}
            </a>
          </div>
        )
      })}
    </div>
    <div className="hidden md:block">
      <Office />
    </div>
  </section>
)

export default IndexPage
