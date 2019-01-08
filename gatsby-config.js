// Load Environment variables locally
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Benjamin Lannon`,
    description: `Benjamin Lannon's Portfolio website`,
    author: `@lannonbr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Oswald', 'Lato'],
        },
      },
    },
  ],
}
