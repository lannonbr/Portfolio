---
title: 'Advent of Code 2020 Timelapse Behind the Scenes'
date: '2021-04-19'
description: 'Behind the scenes of creating a timelapse for the Stats page of the 2020 Advent of Code event'
status: fully-grown
---

This past December, I created a project to capture the progress of people completing the [Advent of Code](https://adventofcode.com) event. With it, I leveraged GitHub Actions and AWS to manage the data collection and then rendered the video out with ffmpeg.

If you want to see the final result, I shared the video in a [Tweet](https://twitter.com/lannonbr/status/1342961875714252802?s=21).

## Screenshot Collection

I've previously made a GitHub Action which [Takes screenshots of webpages using Puppeteer](https://github.com/lannonbr/puppeteer-screenshot-action/). With this, I set up a GitHub Actions workflow that would visit [https://adventofcode.com/2020/stats](https://adventofcode.com/2020/stats) every 20 minutes and save the screenshot off to an AWS S3 Bucket using the AWS CLI.

```yaml
name: Advent of Code Stats Screenshot
on:
  schedule:
    - cron: '*/20 * * * *' # every 20 minutes
jobs:
  run_puppeteer:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Screenshot
        uses: 'lannonbr/puppeteer-screenshot-action@1.3.1'
        with:
          url: https://adventofcode.com/2020/stats
          width: 1440
          height: 1024
      - name: Push to S3
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AOC_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AOC_KEY_SECRET }}
          BUCKET_URL: ${{ secrets.AOC_BUCKET_URL }}
        run: aws s3 cp $GITHUB_WORKSPACE/screenshots/ $BUCKET_URL --recursive
```

I set this up on December 2nd so I didn't get the full overview, but rather the majority of it. From here, I waited it out while the data was being collected through the month.

## Data transform

When December 26th came around, I downloaded all of the images stored in the S3 bucket down to my local machine to do some processing on them. To be able to stitch the images into a video format, I had to make sure that the images were ordered numberically rather than by their timestamp (ex: screenshot-0001.png, screenshot-0002.png, etc). I had over 1300 images across the month so I needed to make sure to pad the numbers to have a max of 3 0's up front.

I wrote a short Node.js script to handle the file conversion.

```js
import fs from 'fs'

const files = fs.readdirSync('./orig')

files.sort(
  (a, b) =>
    // Extract timestamp from string (screenshot-1618881742.png -> 1618881742)
    parseInt(a.split('-')[1].split('.')[0]) -
    parseInt(a.split('-')[1].split('.')[0])
)

files.forEach((file, i) => {
  let formattedIdx = (i + 1).toString().padStart(4, '0')

  fs.copyFileSync(`./orig/${file}`, `./new/screenshot-${formattedIdx}.png`)
})
```

## Image Stitching

Finally, I searched a ffmpeg command to take a series of screenshots into a video. ([Credit to Hammad Mazhar](https://hamelot.io/visualization/using-ffmpeg-to-convert-a-set-of-images-into-a-video/)).

```
ffmpeg -r 60 -f image2 -s 1440x1024 -i screenshot-%04d.png -vcodec libx264 -crf 20 -pix_fmt yuv420p out-60fps.mp4
```

Deconstructing the various arguments:

- `-r 60`: FPS of 60.
- `-f image2`: the image demuxer (converts the image files into frames for the video).
- `-s 1440x1024`: the resolution of the images (as saved with the puppeteer action).
- `-i screenshot-%04d.png`: the name of all of the files. `%04d` is a format string for a decimal number with 4 digits.
- `-vcodec libx264`: The video codec to render the video with, x264 in this instance.
- `-crf 20`: video quality. 0 is lossless, 51 is the worst quality. Moving the number towards 0 increases the bitrate & file size.
- `-pix_fmt yuv420p`: pixel format (In this case, planar YUV 4:2:0).

Once this was done, I had an mp4 file with the outputted video.
