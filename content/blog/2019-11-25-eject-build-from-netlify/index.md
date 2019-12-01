---
title: 'Ejecting from the Netlify Build Process'
date: '2019-11-25'
description: 'How to build in any CI & deploy to Netlify'
keywords:
  - CI
  - Netlify
  - GitHub Actions
---

Netlify offers a seamless CI/CD process that every time you make a change to a main branch, it will build the site for you and deploy it to their CDN. That said, there are many usecases where you may want to pull the build step out of their toolchain and use your own platform at the builds. Although you wish to still use Netlify's platform to deploy the site. This process can fairly easily be done and y
