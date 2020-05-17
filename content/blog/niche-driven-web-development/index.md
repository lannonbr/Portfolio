---
title: 'Niche Driven Web Development'
date: '2020-05-16'
description: 'A examination of how I build sites that go outside usual conventions of what people think of when building a website'
---

## Example 1: Composition layer for OpenGraph Images

Programatically building opengraph images

- can use latest web tools even if implemented in just one browser.
- no need for responsive layouts (static 1200x630 and you're set)
- No interactions / JS given it builds down to a static JPG / PNG image

## Example 2: Streaming Layouts

Building a Twitch / YT layout using a website

- Static according to your recording resolution
- Can play video, gifs, etc for a more fluid layout (Warning: will be more taxing on hardware as it needs to composite more things down into the uploaded video)
- Interactable through websockets / other realtime toolchains.
- Dependent on livestreaming software's browser (OBS Studio's is a version of Chromium)
