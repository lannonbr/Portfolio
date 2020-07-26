---
title: Caching in GitHub Actions
date: '2020-07-26'
description: How to cache data between workflow runs in GitHub Actions
keywords:
  - GitHub Actions
logo: github-actions
status: budding
---

## Use case - Caching Jamstack Sites

For example, I joined Jason on his livestream to discuss how to use this to cache build assets between builds. The end result was a Gatsby site that initally takes around 3 minutes to build from scratch was reduced down to under 30 seconds. This is beneficial as on image-heavy sites, you won't need to rebuild all of them on every build.

for an archive of our stream, take a look below:

<Video videoSrc="https://www.youtube.com/embed/zklDIAcbM-I" videoTitle="Caching Jamstack Sites With GitHub Actions (with Benjamin Lannon) - Learn With Jason" />

To learn more about what we did and resources / code, visit Jason's site for the episode at [lwj.dev](https://www.learnwithjason.dev/caching-jamstack-sites-with-github-actions)
