---
title: 'Working in Public Notes'
date: '2020-08-09'
description: 'Notes for the book Working In Public by Nadia Eghbal'
status: budding
---

This is going to be notes for myself for the book [Working In Public](https://press.stripe.com/#working-in-public). The contents and thoughts on this page are mine on the topic unless it is a direct quote from the book.

## Introduction

- How can open source be sustainable, both financially and emotionally.
- what does it mean to create a community open to contributors and how can you retain those community members to contribute more?

> Open source code is public, but it doesn't have to be participatory. ~ Nadia (page 9)

This hits hard at home for many communities I've been a part of where there may be hundreds or thousands of people who "contribute" but active contribution is a much lower number.

> This distribution-where one or a few developers do most of the work, followed by a long tail of casual contributors, and many more passive users-is now the norm, not the exception, in Open Source. ~ Nadia (page 10)

Nadia is bringing up the developer ecosystem is becoming modularized, away from the monolithic structure of the past.

> ...These developers aren't building communities; they're directing air traffic ~ Nadia (page 13)

Nadia's commenting the maintainers have to balance the seesaw between making progress of their projects and the swath of people learning about said tool / needing help. The price of maintainers is their time.

They (users) at screaming at you, not for you for your time.

Open source was supposed to be collaborative, but it's become far from it.

### Thoughts on Introduction

Open Source in many instances is this one-to-many scenario where you can think at least in the web developer community, Kent C Dodds is synonomous with Testing, Dan Abramov is synonomous with React, and it goes to that even though there are tons of people making and creating things, we've entered a "consumption" world where there's always more users than creators.

Open Source touts "Oh anyone can submit issues or code contributions" but how accurate is that and how does that affect both someone coming into Open Source as well as the people managing the projects?

## Part 1 - How People Make: 01 - GitHub as a Platform

Git as a tool is relatively new in comparison to other version control systems (Created in 2005). Beforehand were centralized systems.

Origins of FOSS were in terms of free access to code, less about free in terms of cost. Brought forward through the 80s hacker culture.

Three pioneers in the day:

- Richard Stallman: Founder of the Free Software movement & GNU Project
- Eric S. Raymond: Writer of "The Cathedral and the Bazaar"
- Linus Torvalds: Creator of the Linux Kernel

Open source doesn't have a possesive sense (Which for particular projects I feel may be actually the opposite).

Permissive vs Copyleft licenses can arise to issues in the commercial space.

> "they (OSS devs) prioritize _convienence_ over freedom" ~ Nadia (page 30)

People care about the workflow more rather than having access to the source code of the cloud service. This reminds me of the debate of do you want something very custom, or something that works and lets you quickly solve your issues.

> Software licenses regulate _distribution_, but cannot _regulate_ production... ~ Steve Klabnik (page 33)

> "Coding became like tweeting" ~ Nadia (page 34)

I find it interesting Nadia introduces NPM as JavaScript's package manager on page 36, as it has become the defacto for frontend, backend, ui, etc, that is involved with JS. no longer just for node.

The big JS devs are known for the people they are, not the tools they build.

Funny enough, I wrote about Dan & Kent above and of course Nadia is bringing this up directly now.

## Thoughts on GitHub as a Platform

GitHub really transitioned "Open Source" to be a public space for people to contribute to software, rather than the traditional sense of it being a licensing / distribution tool. With GitHub exploding in popularity, it became a social network for devs, and with such, the cliques form, the celebs rise and fall, and the things we thought were stable may not be anymore.

## Part 1 - How People Make: 02 - The Structure of an Open Source Project

Being part of an open source community may not have all the technical / social norms of "The Open Source Community" as there are so many different subcommunities beneath that things differ from group to group.

The core of contribution is that anyone can suggest changes, but not everyone can approve said changes.

New features can span from a GitHub Issue, to a RFC (Request for Comments) to discuss if the feature _should_ be added, less on if it can be added.

"Maintainers" could be people who have merge access, or as well, those who just have influence. For some OSS projects, this could equate to "core maintainers" or "community maintainers". how one gains access to merge / commit access can vary based on leinent or strict guidelines & trust.

> At the time, [Lorenzo Sciandra] did not feel "good enough" to contribute to React Native ~ Nadia (page 48)

What does it even mean to be "good enough"? to contribute. People I've personally talked to sometimes see a big number of issues or pull requests and it seems daunting to contribute. It may be interesting to think why that's the case.

A repo is not just the code, but the community, discussions, and evolution of the project at large.

Other venues are also used in the process of using, creating, and discussing OSS projects: Slack, Discord, Stack Overflow, etc.

Early timelines of OSS Projects usually go in the order of:

1. Few people developing the project fairly privately / closed off. (Experimental tools may be open source but not always taking contributions from the outside yet)
2. promotion / growth of a Stablized version of the software. Getting more people involved both in using the tool as well as maybe contributing to it as well.

It's interesting Nadia comments that maintainence of a project (Issues, PRs, etc) is less fun than actually writing code. I could see the flip side of the phase of discussion could be invigorating at certain points.

Users are more familiar with GitHub's project management tools, so when projects move issues to other platforms, people can be put off.

Four Production Models

- High User Growth, High Contributor Growth: Federations (ex: Rust)
- High User Growth, Low Contributor Growth: Stadiums (ex: Babel)
- Low User Growth, High Contributor Growth: Clubs (ex: Astropy)
- Low User Growth, Low Contributor Growth: Toys (ex: ssh-chat)

Federations: The big & open & approachable projects, but given the scale are more complex in governance

Clubs: Niche projects where the people maintaining it are mainly the people using it

Toys: Self-explainitory, not used by many, also described in circles as "Pet projects"

Stadiums: The big projects, but sometimes daunting which lead to smaller contributor growth. Nadia makes a parallel with this to big twitch streamers.

The debate of whether the community should be centralized vs decentralized. should there be a small group calling the shots, or should it be more representative of it's audience.

### Thoughts on The Structure of an Open Source Project

At large, open source is a very diverse thing due to the nature of how different projects are. Do you have a project a few people are working on and they'll likely only be the only users, or do you have a small 12-line node script used by millions. What are the ramifications for strong / weak governance, and what happens when a project that should have a strong governance doesn't? Why do you think of an open source project as "daunting" or "approachable"?
