const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { createPrinterNode } = require('gatsby-plugin-printer')
const moment = require('moment')
const crypto = require('crypto')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create blogposts
  const blogPostTemplate = path.resolve(`src/templates/blogpost-template.js`)

  const { data, errors } = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (errors) {
    throw errors
  }

  data.allMdx.edges.forEach(({ node }) => {
    createPage({
      component: blogPostTemplate,
      path: node.fields.slug,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField, createNode } = actions

  // Create slug for blogposts
  if (
    node.internal.type === 'Mdx' &&
    node.fileAbsolutePath &&
    node.fileAbsolutePath.includes('/blog/')
  ) {
    const slug = createFilePath({
      node,
      getNode,
    })

    createNodeField({ node, name: 'slug', value: `/blog${slug}` })

    let filePathSplit = node.fileAbsolutePath.split('/')
    let fileName = filePathSplit[filePathSplit.length - 2]

    createPrinterNode({
      id: node.id,
      fileName,
      outputDir: 'og-images/blog',
      data: {
        title: node.frontmatter.title,
        date: moment(node.frontmatter.date).format('MMM, Do, YYYY'),
      },
      component: require.resolve('./src/printer-components/blogpost.js'),
    })

    actions.createNodeField({
      node,
      name: 'ogFileName',
      value: fileName,
    })
  }

  if (node.internal.type === 'DoneListYaml') {
    createNode({
      id: `${node.id}-mdx-desc`,
      parent: null,
      children: [],
      internal: {
        type: `CustomMdxStringNode`,
        contentDigest: crypto
          .createHash('md5')
          .update(node.desc)
          .digest('hex'),
        mediaType: `text/markdown`,
        content: node.desc,
        description: 'Custom MDX Node',
      },
    })

    node.mdxDesc___NODE = `${node.id}-mdx-desc`
  }
}
