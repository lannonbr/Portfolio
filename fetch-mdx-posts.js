// Code credit to Chris Biscardi

const fs = require('fs').promises
const path = require('path')
const frontmatter = require('gray-matter')
const mdx = require('@mdx-js/mdx')
const rehypeSlug = require('rehype-slug')
const cloudinary = require('rehype-local-image-to-cloudinary')
const rehypePrism = require('./utils/prism-rehype-plugin')

exports.sourceData = async ({ createPage, ...options }) => {
  console.log('sourceData')
  const files = await fs.readdir('./content/blog/')

  return Promise.all(
    files.map(async (filename) => {
      const file = await fs.readFile(
        `./content/blog/${filename}/index.md`,
        'utf-8'
      )
      let compiledMDX

      const { data, content } = frontmatter(file)

      try {
        compiledMDX = await mdx(content, {
          rehypePlugins: [
            rehypePrism,
            rehypeSlug,
            [
              cloudinary,
              {
                baseDir: path.join(__dirname, 'content', 'blog', filename),
                uploadFolder: 'lannonbr.com',
              },
            ],
          ],
        })
      } catch (e) {
        console.log(e)
        throw e
      }

      await createPage({
        module: `/** @jsx mdx */
            import {mdx} from '@mdx-js/preact';
            ${compiledMDX}`,
        slug: `blog/${filename}`,
        data: { ...data, slug: filename },
      })

      // Data to be stored in `mdx-posts.json` file
      return {
        ...data,
        slug: `blog/${filename}`,
      }
    })
  )
}
