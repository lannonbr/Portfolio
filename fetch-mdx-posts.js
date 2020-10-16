// Code credit to Chris Biscardi

import { promises as fs } from 'fs'
import path from 'path'
import frontmatter from 'gray-matter'
import mdx from '@mdx-js/mdx'
import rehypeSlug from 'rehype-slug'
import cloudinary from 'rehype-local-image-to-cloudinary'
import rehypePrism from './utils/prism-rehype-plugin/index.js'

// import beeline from 'honeycomb-beeline'
// beeline()

export const sourceData = async ({ setDataForSlug, ...options }) => {
  console.log('sourceData')
  const files = await fs.readdir('./content/blog/')
  // beeline.addContext({ numMDXFiles: files.length })

  const sourceDataResult = []

  return await Promise.all(
    files.map(async (filename) => {
      // let mdxResult = await beeline.startAsyncSpan(
      //   { name: 'fetchMDX', filename },
      //   async (span) => {
      const file = await fs.readFile(
        `./content/blog/${filename}/index.md`,
        'utf-8'
      )

      let compiledMDX

      const { data, content } = frontmatter(file)

      // let mdxCompileTimer

      try {
        // mdxCompileTimer = beeline.startTimer('mdx_compile')
        compiledMDX = await mdx(content, {
          rehypePlugins: [
            rehypePrism,
            rehypeSlug,
            [
              cloudinary,
              {
                baseDir: path.join('.', 'content', 'blog', filename),
                uploadFolder: 'lannonbr.com',
              },
            ],
          ],
        })
      } catch (e) {
        console.log(e)
        throw e
      }
      // beeline.finishTimer(mdxCompileTimer)

      // let createPageTimer = beeline.startTimer('create_page')
      await setDataForSlug(`blog/${filename}`, {
        component: {
          mode: 'source',
          value: `/** @jsx mdx */
                  import {mdx} from '@mdx-js/preact';
                  ${compiledMDX}`,
        },
        data: { ...data, slug: filename },
      })
      // beeline.finishTimer(createPageTimer)

      // beeline.finishSpan(span)

      // Data to be stored in `mdx-posts.json` file
      return {
        ...data,
        slug: `blog/${filename}`,
      }
      //   }
      // )
    })
  )
}
