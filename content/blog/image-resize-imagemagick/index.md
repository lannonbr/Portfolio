---
title: 'Resizing images with ImageMagick ZSH function'
date: '2020-06-13'
description: 'A look at a zsh function I wrote to quickly resize images using the imagemagick convert command'
status: fully-grown
---

If I want to optimize an image by solely shrinking the dimensions, [ImageMagick](https://imagemagick.org/index.php) has a command to do this.

```shell
convert image.png -resize 50% image.png # This will shrink the image by 50% and overwrite itself
```

Although, I wanted to generate a shorter version of this where I always know I want to replace the image inplace and I don't have to remember the syntax for the `-resize` flag, as it is non-standard (Where single letter flags have a single dash and words have two dashes). I wrote a simple zsh function that I put in my `~/.zshrc` file to do this:

```shell
img-resize(){
	convert $1 -resize $2 $1
}
```

Now that previous command can be shorted to

```shell
img-resize image.png 50%
```
