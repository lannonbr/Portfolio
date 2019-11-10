const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { createPrinterNode } = require('gatsby-plugin-printer')
const moment = require('moment')

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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Create slug for blogposts
  if (
    node.internal.type === 'Mdx' &&
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
}
