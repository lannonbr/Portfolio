// Code credit to Chris Biscardi

const { promises: fs } = require('fs')
const path = require('path')
const MDXPostsSource = require('./fetch-mdx-posts')
const TinkerProjectsSource = require('./fetch-tinker-projects')
const FeaturedProjectsSource = require('./fetch-featured-projects')

exports.sourceData = async ({ withCache, createPage }) => {
  return Promise.all([
    withCache('mdx-posts', MDXPostsSource.sourceData({ createPage })),
    withCache('tinker-projects', TinkerProjectsSource.sourceData()),
    withCache('featured-projects', FeaturedProjectsSource.sourceData()),
  ])
}

exports.prepData = async ({ cacheDir, publicDir }) => {
  // have to make sure the directory we want to write in exists
  // We can probably avoid this by offering some kind of "non-filesystem"-based
  // API for adding data to paths
  await fs.mkdir(path.resolve(publicDir, 'src/pages'), { recursive: true })

  // prep page data for index and post pages
  const mdxPostsData = require(path.resolve(cacheDir, 'mdx-posts.json'))
  const {
    data: { projects: tinkerProjects },
  } = require(path.resolve(cacheDir, 'tinker-projects.json'))
  const {
    data: { projects: featuredProjects },
  } = require(path.resolve(cacheDir, 'featured-projects.json'))

  const allPostsData = mdxPostsData.map(
    ({ title, date, slug, description, keywords, logo, status }) => ({
      title,
      updatedAt: date,
      slug,
      description,
      keywords,
      logo,
      contentType: 'post',
      status,
    })
  )
  await fs.writeFile(
    path.resolve(publicDir, 'src/pages/garden.json'),
    JSON.stringify({ posts: allPostsData })
  )

  await fs.writeFile(
    path.resolve(publicDir, 'src/pages/work.json'),
    JSON.stringify({ projects: tinkerProjects })
  )
  await fs.writeFile(
    path.resolve(publicDir, 'src/pages/projects.json'),
    JSON.stringify({ projects: featuredProjects })
  )

  await fs.writeFile(
    path.resolve(publicDir, 'posts.json'),
    JSON.stringify({
      items: allPostsData.map((post) => ({
        title: post.title,
        subtitle: `https://lannonbr.com/${post.slug}`,
        arg: `https://lannonbr.com/${post.slug}`,
      })),
    })
  )

  // index.html
  const topPostsData = allPostsData
    .sort((b, a) => {
      const da = new Date(a.updatedAt).getTime()
      const db = new Date(b.updatedAt).getTime()
      if (da < db) return -1
      if (da === db) return 0
      if (da > db) return 1
    })
    .filter(({ contentType }) => contentType === 'post')
    .slice(0, 5)

  await fs.writeFile(
    path.resolve(publicDir, 'src/pages/index.json'),
    JSON.stringify({ posts: topPostsData })
  )
}
