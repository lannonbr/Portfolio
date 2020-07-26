---
title: 'Granular staging with "git add --patch"'
date: '2019-10-26'
description: 'How to selectively add what you want to stage for a git commit using the --patch flag'
keywords:
  - Git
status: fully-grown
---

When working with Git, a practice in the terminal is adding entire files using `git add` or the all-powerful `git add .` to just grab all unstaged things and commit it on a whim. That said, it may be better to be more granular when you add content to be committed as there's a variety of reasons to be more thoughtful when committing. You may accidentally have some secrets you don't have behind a `.gitignore`. You may have dozens of files that all touch different things, and maybe said files have different things in them and you don't want to commit everything at once.

To do staging more carefully in the terminal, `git add --patch` allows an interactive workflow for such.

![Git Add patch example](./patch.png)

It shows you chunks (or `hunk` in git's terminology) of code where you can add it, skip it, or other things. If you are unsure of how to go through such, if you type in `?`, it will print out what each letter does.

![Git add patch help](./patch-help.png)

This is a tool that instead of going through the motions with Git, you can think less about "just committing" code or files, and think more about why you are making a commit or what the commit's purpose is. A lot of our toolchains can come second nature, but stepping back for a second can allow for some deeper understanding of not just _how_ we use a tool, but more _why_ we use these tools.

Shoutout to [IlluminatedSpace](https://twitter.com/lizcodes/) for teaching this
