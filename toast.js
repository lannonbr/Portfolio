// Code credit to Chris Biscardi
import * as MDXPostsSource from './fetch-mdx-posts.js'
import * as TinkerProjectsSource from './fetch-tinker-projects.js'
import * as FeaturedProjectsSource from './fetch-featured-projects.js'

export const sourceData = async ({ setData, createPage }) => {
  const [mdxPosts, tinkerProjects, featuredProjects] = await Promise.all([
    MDXPostsSource.sourceData({ createPage }),
    TinkerProjectsSource.sourceData(),
    FeaturedProjectsSource.sourceData(),
  ])

  const allPostsData = mdxPosts.map(
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

  allPostsData.sort((b, a) => {
    const da = new Date(a.updatedAt).getTime()
    const db = new Date(b.updatedAt).getTime()
    if (da < db) return -1
    if (da === db) return 0
    if (da > db) return 1
  })

  await setData({ slug: '/garden', data: { posts: allPostsData } })
  await setData({ slug: '/work', data: { projects: tinkerProjects } })
  await setData({ slug: '/projects', data: { projects: featuredProjects } })

  await setData({
    slug: '/posts',
    data: {
      items: allPostsData.map((post) => ({
        title: post.title,
        subtitle: `https://lannonbr.com/${post.slug}`,
        arg: `https://lannonbr.com/${post.slug}`,
      })),
    },
  })

  const topPostsData = allPostsData
    .filter(({ contentType }) => contentType === 'post')
    .slice(0, 5)

  await setData({ slug: '/', data: { posts: topPostsData } })

  return
}
