const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { createPrinterNode } = require('gatsby-plugin-printer')
const { parse, format } = require('date-fns')
const crypto = require('crypto')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create blogposts
  const blogPostTemplate = path.resolve(`src/templates/blogpost-template.js`)

  const { data, errors } = await graphql(`
    query {
      blogposts: allMdx(
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

  data.blogposts.edges.forEach(({ node }) => {
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

    // Create og-images with gatsby-plugin-printer
    let filePathSplit = node.fileAbsolutePath.split('/')
    let fileName = filePathSplit[filePathSplit.length - 2]

    createPrinterNode({
      id: node.id,
      fileName,
      outputDir: 'og-images/blog',
      data: {
        title: node.frontmatter.title,
        date: format(
          parse(node.frontmatter.date, 'yyyy-MM-dd', new Date()),
          'LLL do, yyyy'
        ),
      },
      component: require.resolve('./src/printer-components/blogpost.js'),
    })

    actions.createNodeField({
      node,
      name: 'ogFileName',
      value: fileName,
    })
  }

  // Create a child node for the descriptions of the Done List
  if (node.internal.type === 'DoneListYaml') {
    let childNode = {
      id: `${node.id}-mdx-desc`,
      parent: node.id,
      children: [],
      internal: {
        type: `CustomMdxStringNode`,
        contentDigest: crypto.createHash('md5').update(node.desc).digest('hex'),
        mediaType: `text/markdown`,
        content: node.desc,
        description: 'Custom MDX Node',
      },
    }
    createNode(childNode)
    node.children.push(childNode.id)
  }
}
