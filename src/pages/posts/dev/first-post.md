---
title: "This is my first post, and I published with help of GitHub Actions"
date: "2020-10-18"
excerpt: "When I heard about Github Actions and what you can do with it I decided that I will use it someday. This day has come."
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/tyqsw5u146wifn27zfbh.jpg
---

That day the light bulb in my head lit up that with them I can publish my blog and dev.to posts from the comfort of my terminal. In this short text, I will tell you what these activities were and how I used them.

This is my workflow \*.yaml file:

```
name: Gatsby Publish

on:
  push:
    branches: publish
  pull_request:
    branches: publish

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: enriikke/gatsby-gh-pages-action@v2
        env:
          GATSBY_API_TOKEN: ${{ secrets.GATSBY_API_TOKEN }}
        with:
          access-token: ${{ secrets.GATSBY_API_TOKEN }}
          deploy-branch: master
          gatsby-args: --prefix-paths
      - uses: ful1e5/TheActionDev@v2
        with:
          api-key: ${{ secrets.DEVTO_API_KEY }}
          directory: ./src/pages/posts/dev

```

My workflow works this way:

- whenever I push a new commit or merge pull request to the publish branch the Gatsby site is built and then deployed to the master branch

- also if the post is in _./src/pages/posts/dev_ is sent to dev.to through its API

I needed to add an env variable to build the environment. In my case, it's used by _gatsby-source-github-api_ to sourcing repositories for the portfolio section. Acces-token input also has this key. It's used by Github Publish action to making changes in the repository.

The action that I used to build and deploy the site is [Gatsby Publish](https://github.com/marketplace/actions/gatsby-publish). It has nice documentation on how to use it and a lot of options to help customize workflow using this action.

The second one is [TheActionDev](https://github.com/marketplace/actions/theactiondev). It also has nice documentation and options suited to my workflow.

How everything's working? Right now you are reading this post whenever it's on my site or dev.to. if you have questions or suggestions don't hesitate to share it with me in the comment section.

<span>Photo by <a href="https://unsplash.com/@naveenphotography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Naveen Jack</a> on <a href="https://unsplash.com/s/photos/sprout?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
