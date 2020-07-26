---
title: 'GitHub Actions: Small abstractions with massive scope'
date: '2019-10-15'
description: 'A high-level look at how one should use GitHub Actions'
keywords:
  - GitHub Actions
  - Automation
  - GitHub
logo: github-actions
status: fully-grown
---

GitHub Actions is nothing new, yet the scale and placement is changing how we use GitHub. With a month away from the general availability of Actions, I've been interacting with it over the past year and through the various stages that it's been made, Actions is providing a way to run code that automates workflows around your repos on GitHub's servers. It's a mindshift that rather than being limited to GitHub's toolchain, you can rather expand how GitHub works.

## Actions is for CI/CD? Right?

![Actions CI Templates](./ci-templates.png)

Something that I've picked up over the past few months with the new v2 beta of Actions is a lot of people seem to be using it to do your regular CI/CD process. This can include running tests on PRs, to deploying code or resources out to external services after a merge or push to master. These tools are great, and it can be fulfilling to take these toolchains that had to be run on an external service until the v2 beta came out, but I feel this isn't the whole story with Actions. It's like going to an ice cream parlor and only getting vanilla or chocolate when there are 20 other flavors to taste.

When thinking about automating things in a development workflow, teams likely start out with setting up CI/CD. Most projects can have a safety net of tests, and most projects have that code deployed somewhere whether it is code running on some server or artifacts that can be downloaded onto other machines. Given Actions gives you full VMs on all three primary desktop operating systems, you can build your applications, test them, and deploy on the infrastructure you work around. Doing these things in an automated fashion is empowering to developers as you can make difficult tasks or workflows smoother by letting the computer simplify the workflow.

CI/CD is great, and I recommend setting it up in whatever environment serves your project, but where GitHub shines compared to usual vendors is the ecosystem is more in-depth on GitHub itself. There's a ton more _triggers_ that kick off these workflows, where compared to a few triggers mainly used for CI/CD, GitHub has almost 30 triggers that you can act upon. Want to do something when a new contributor gets their first PR merged, there's a workflow for that. How about when an issue is opened, have another trigger. What if someone wants to watch when pages are changed in a repo's wiki, trigger. For the full listing and details on each of these triggers, head over to the official documentation: [Events that trigger workflows](https://help.github.com/en/articles/events-that-trigger-workflows).

Actions allows many more opportunities to automate things done in or around a repo. 9 out of 10 times, if you can think of a workflow, it is likely able to be automated into GitHub Actions. Explore what you wish to automate rather than what the GitHub platform gives you by default.

## Building for your repo, not everyone else's

Although it would be great to create automations that could be used in thousands to millions of repos, more than often not you'll hit a point where your specific project is has a particular thing that needs to be automated.

I'll give an example. In the Gatsby project, there's a site showcase that has hundreds of sites that use the framework. I had in mind that it would be appropriate to develop some kind of validator to go through each site on a frequent basis to check if they are still up and still using Gatsby. If either of those are invalid, then we should handle it by checking with the submitter if the site is invalid intentionally or accidentally and take action accordingly.

![Gatsby Site Showcase](./gatsby-showcase.jpg)

This resulted in a [GitHub Action](https://github.com/gatsbyjs/gatsby/tree/master/.github/actions/gatsby-site-showcase-validator) that checks sites one-by-one and validates that there aren't any issues and log any issues out otherwise. It was a niche use case for a particular project, and digging into it, you could possibly abstract it to be used for other projects, but I didn't need to. It solved the problem it's job in the Gatsby repo which is what it was intended for.

If a GitHub Actions workflow solves a problem for your repo, then your job is done. when you start copying that workflow to other repos or share it with colleagues, then you can start thinking about abstractions and how to set it up to be used in a wider set of repos, but it is best to solve your problems first and then abstract if need be rather than prematurely abstracting.

## Expanding GitHub's ecosystem with Actions

As well, GitHub Actions feels like an API to very directly extend the platform itself. For instance, I wanted to manage issue labels with git, so I generated an [action](https://github.com/lannonbr/issue-label-manager-action) to do such. By generating a JSON file at `.github/labels.json` and a workflow to watch it on various events like `push` or `pull_request`, I can manage the issues with a single file.

![GitHub Actions Labels](./labels.png)

Upon this, if I stay consistent and only change labels by using this toolchain, then it adds an auditing system and I can see exactly when a new label was added to a repo. If there was a way to disable manual changes outside of using GitHub's API to change labels, then I could allow a complete way to takes a system of GitHub itself and rework it in a more manageable way. If this mindset is continued across the platform, I could see a way where on top of accessing GitHub and some of the internals through their API currently, you as well could further shape how GitHub works for your team or project.

## It's not new, yet completely different

Taking a step back, the CI/CD portion of Actions could mimic similar to something like CircleCI or other CI vendors. The integration with the GitHub API can be found either with GitHub Apps or their webhook toolchain. Scheduled tasks are based on crontab, a pre-existing solution for scheduled tasks on linux. None of this at the surface seems new, yet diving into it has a very different tone. Where previously separate infrastructure needed to be set up to manage things around your repo whether it is deployment or tests, scheduled tasks or other flows, it's a centralization of hosting and execution. `git push` is all that is needed to add new flows. GitHub used to be just a place to host your code and have some project management, but I truly feel Actions is changing the game with how you should think about GitHub. GitHub allowing you to run code on their servers enters a space encompassed by many players including VPS's like DigitalOcean, CI vendors like CircleCI, Serverless FaaS like Azure Functions or AWS Lambda, and many others. GitHub is empowering the developer to work and manage the projects how they want to by expanding how their platform works at a fundamental level by centralizing more and more of the workflows of software development, and take that how you will, it will be an interesting few upcoming years to see how developers define it.
