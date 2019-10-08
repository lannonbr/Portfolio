# Portfolio-Gatsby

![](https://github.com/lannonbr/Portfolio-Gatsby/workflows/Daily%20Build/badge.svg)

This is the current iteration of my personal portfolio site as of early 2019.

The site is developed in Gatsby.

## What's involved

- Data sourced from GitHub using their v4 GraphQL API

A personal access token for GitHub is required to load in the data on the open source page correctly.

Other tools used include:

- [gatsby-theme-lannonbr](https://github.com/lannonbr/gatsby-theme-lannonbr) (A gatsby theme powering features like dark mode & the layout of this site)
- [gatsby-theme-notes](https://www.gatsbyjs.org/packages/gatsby-theme-notes/)
- MDX
- Styled-components
- React-feather
- MomentJS

## Other Tidbits

The site is deployed on Netlify. Either any time a commit is pushed to the `master` branch or at 12am every day, the site will be rebuilt and redeployed.
