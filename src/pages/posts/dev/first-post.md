---
title: "This is my first post, and I published it on Dev.to and my blog"
date: "2020-10-18"
excerpt: "When I heard about Github Actions and what you can do with it I decided that I will use it someday. This day has come."
featuredImage: ./assets/sprout.jpg
---

I was using Gatsby for some time when I heard about Github Actions. Then the light bulb went on in my head that I can use Github Actions to publish my posts on the blog without effort. Without CMS and only using git and command line. When I joined this community, my objectives have changed slightly. From this time I wanted to publish my posts on blog and dev.to and share a few thoughts about it with you.

The first step to do that was choosing Gatsby's starter or creating a template from scratch. And then put content in it. I chose a second option, creating my template from scratch. Mainly because I wanted to get to know Gatsby framework and I like DIYing things. As a base of my site I used [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world). [Gatsby.js tutorial](https://www.gatsbyjs.com/tutorial/) helped a lot in learning the framework basics and how to customize a starter. If you choose the use of a starter created by someone else here's a vast [collection](https://www.gatsbyjs.com/starters/?v=2) of starters. 

The next step was creating a Github Actions workflow. Someone already made appropriate action for this task.  To build and deploy the Gatsby site as github page I used the [Gatsby Publish](https://github.com/marketplace/actions/gatsby-publish). It has a nice documentation on how to use it and a lot of options to help customize workflow using this action.

Don't forget to add an API key to repository secrets. 

If you store API keys in env files like me, don't forget to add an env argument (with variables) to action. 

The part with publishing articles on the gatsby site is over, now it's time for dev.to part. 

<span>Photo by <a href="https://unsplash.com/@naveenphotography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Naveen Jack</a> on <a href="https://unsplash.com/s/photos/sprout?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>