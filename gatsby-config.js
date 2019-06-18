// Load Environment variables locally
require('dotenv').config()

module.exports = {
  __experimentalThemes: [
    {
      resolve: `gatsby-theme-lannonbr`,
      options: {},
    },
  ],
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
    ],
  },
  plugins: [
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `lannonbrportfoliodata`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        lang: `*`,
        shouldNormalizeImage: () => {
          return true
        },
      },
    },
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
      },
    },
  ],
}
