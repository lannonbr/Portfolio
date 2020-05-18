---
title: 'Niche Driven Web Development'
date: '2020-05-18'
description: 'A examination of how I build sites that go outside usual conventions of what people think of when building a website'
---

Over the past few months, I've been diving into some newer usecases for web development. For 90% of websites, the ones that are public facing, there's certain criteria you should account for.

- It should be responsive. Whether you are examining it on a phone or desktop, it should fit the confines of the screen.
- It should work across operating systems and browsers. Firefox, Chrome, Safari. There should be a cohesion where the core functionality works across all of them.
- It should be performant: Most people don't have a macbook pro, so just because it is smooth on your machine doesn't mean it may be choppy on someone's chromebook.

With all of these in mind, what if we threw them out the window. What if we developed for one's self with the freedom of not needing to worry about browser support or tweaks. I have been working on two formats that allow these best practices to be loosened.

<Warning>
These are specifically use cases that go outside the normal bounds and if you're developing a normal site, do keep the things I commented above in mind.
</Warning>

## Example 1: Composition layer for OpenGraph Images

With content being shared more and more, the OpenGraph standard has enhanced what a link can be. For instance, when you are in Twitter and when tweet a link, it sometimes switches over to a card with an image. This can be a static file that was thrown together in something like Photoshop or other image composition programs, but as a developer, we can custom build them for our own usecases.

Many people have been pushing this space in the Web Development field and it shows that it's a very wide and creative field we are making:

- @swyx: [Your Site's Calling Card](https://www.swyx.io/writing/jamstack-og-images/)
- @chrisbiscardi: [Building an OpenGraph image generation API with Cloudinary, Netlify Functions, and React Egghead Collection](https://egghead.io/playlists/building-an-opengraph-image-generation-api-with-cloudinary-netlify-functions-and-react-914e)

At the end of the day, tools like Puppeteer and Playwright can power this where you can build a component in the browser, and then write up a short script to open up that HTML and take a screenshot of this. Here's an example using Firefox in Playwright:

```js
const { firefox } = require('playwright-firefox')

;(async function createOpenGraphImage() {
  const browser = await firefox.launch()
  const page = await browser.newPage()

  page.setViewportSize({
    width: 1200,
    height: 630,
  })

  await page.setContent(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <style>*{ padding: 0; margin: 0; font-family: "Press Start 2P"; }</style>
    </head>
    <body>
      <div id="opengraph">My OpenGraph Image!</div>
    </body>
  </html>
  `)

  await page.screenshot({
    type: 'jpeg',
    path: 'my-og-image.jpg',
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  })
})()
```

Some things to note, the standard size for these images are 1200x630, so I can set the bounds of my container to such and then put whatever I want inside. As well, I can even use expirimental technologies and not have to worry if my userbase's browser supports it given the browser in this context is used to prerender the image. This means if there's a new CSS feature like CSS Houdini, as long as you can load a browser up in Playwright or a similar tool, you are free to use it without any drawbacks. One drawback though is you can't make these interactive given it is outputting just raw images to be loaded in by something like Twitter or Discord, so you can use Javascript, but only to layout the content.

## Example 2: Streaming Layouts

Building a Twitch / YT layout using a website

- Static according to your recording resolution
- Can play video, gifs, etc for a more fluid layout (Warning: will be more taxing on hardware as it needs to composite more things down into the uploaded video)
- Interactable through websockets / other realtime toolchains.
- Dependent on livestreaming software's browser (OBS Studio's is a version of Chromium)
