// Load Environment variables locally
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Benjamin Lannon`,
    description: `Benjamin Lannon's Portfolio website`,
    author: `@lannonbr`,
    navigationLinks: [
      { url: '/work/', name: 'Work' },
      { url: '/projects/', name: 'Projects' },
      { url: '/opensource/', name: 'Open Source' },
      { url: '/talks/', name: 'Talks' },
      { url: '/blog/', name: 'Blog' },
      { url: '/notes/', name: 'Notes' },
      { url: '/stream/', name: 'Stream' },
    ],
  },
  plugins: [
    // Themes
    `gatsby-theme-lannonbr`,
    {
      resolve: `gatsby-theme-notes`,
      options: {
        basePath: '/notes',
        mdx: false,
      },
    },

    // Other Plugins
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
        // Refactor this when gatsby#15486 is resolved
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
  ],
}
