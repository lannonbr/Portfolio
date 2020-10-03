/** @jsx h */
import { h } from 'preact'
import SEO from '../components/seo.js'
import Office from '../images/office.js'
import ChevronRight from '../components/feather/chevron-right.js'

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
      <h1 class="text-2xl md:text-3xl">#BlackLivesMatter</h1>
      <p class="text-base md:text-xl">
        I stand in solidarity with the Black community against racism and
        injustice.
      </p>
      <p class="mb-0">
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
    class="inline-block w-6 h-6 rounded-full mr-4"
    style={{
      backgroundImage: 'linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)',
    }}
  />
)

const IndexPage = ({ posts, images }) => (
  <section class="md:grid md:grid-cols-2 md:gap-8 mb-4">
    <SEO title="Home" />
    <Banner />
    <div class="flex flex-col justify-center">
      <h1 class="text-center text-4xl md:text-left md:text-6xl">
        Hi all, I'm Benjamin
      </h1>
      <p class="lg:text-xl md:leading-loose">
        I'm a web developer in Upstate New York with a passion for exploration
        and continual learning.
      </p>
      <div class="inline-flex items-baseline justify-between">
        <h2>New Posts</h2>
        <a href="/garden" class="flex items-center group">
          All Posts
          <ChevronRight
            class="h-5 w-5 relative right-0 transform transition-transform duration-200 group-hover:translate-x-1"
            alt=""
          />
        </a>
      </div>
      {posts.map((post) => {
        const logo =
          post.logo && images.filter((logo) => logo.name === post.logo)[0]

        return (
          <div class="mb-3">
            <a
              href={`/${post.slug}`}
              class="rounded py-2 px-3 flex items-center transition-all duration-200 ease-in-out hover:text-purple-700 hover:bg-purple-100 dark-hover:bg-cyan-transparent dark-hover:text-cyan-light hover:no-underline"
            >
              {post.logo ? (
                <img src={logo.src} alt="" class="w-6 mr-4" />
              ) : (
                <LogolessLogo />
              )}
              {post.title}
            </a>
          </div>
        )
      })}
    </div>
    <div class="hidden md:block">
      <Office />
    </div>
  </section>
)

export default IndexPage
