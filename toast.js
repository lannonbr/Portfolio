// Code credit to Chris Biscardi
import { promises as fs } from 'fs'
import * as MDXPostsSource from './fetch-mdx-posts.js'
import * as TinkerProjectsSource from './fetch-tinker-projects.js'
import * as FeaturedProjectsSource from './fetch-featured-projects.js'

export const sourceData = async ({ setDataForSlug }) => {
  const [mdxPosts, tinkerProjects, featuredProjects] = await Promise.all([
    MDXPostsSource.sourceData({ setDataForSlug }),
    TinkerProjectsSource.sourceData(),
    FeaturedProjectsSource.sourceData(),
  ])

  let images = await fs.readdir('./static/blog-icons')
  images = images.map((image) => {
    return {
      name: image.split('.')[0],
      src: `/blog-icons/${image}`,
    }
  })

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

  await setDataForSlug('/garden', {
    data: { posts: allPostsData, images },
  })
  await setDataForSlug('/work', { data: { projects: tinkerProjects } })
  await setDataForSlug('/projects', {
    data: { projects: featuredProjects },
  })

  await setDataForSlug('/posts', {
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

  await setDataForSlug('/', { data: { posts: topPostsData, images } })

  return
}
