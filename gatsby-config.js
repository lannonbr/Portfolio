module.exports = {
  siteMetadata: {
    title: `Benjamin Lannon`,
    description: `Benjamin Lannon's Portfolio website`,
    author: `@lannonbr`,
    navigationLinks: [
      { url: '/work/', name: 'Work' },
      { url: '/projects/', name: 'Projects' },
      { url: '/blog/', name: 'Posts' },
      { url: '/stream/', name: 'Stream' },
      { url: '/talks/', name: 'Talks' },
    ],
  },
  plugins: [
    // Other Plugins
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-printer`,
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
        path: `${__dirname}/content/blog`,
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
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Inter'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/layout.js'),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        rehypePlugins: [require('./utils/prism-rehype-plugin')],
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        whitelist: ['mode-dark'],
      },
    },
  ],
}
