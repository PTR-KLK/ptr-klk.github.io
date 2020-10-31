---
title: "This is my first post, and I published with help of GitHub Actions"
date: "2020-10-18"
excerpt: "When I heard about GitHub Actions and what are for I decided that I will use them someday. This day has come."
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/tyqsw5u146wifn27zfbh.jpg
---

That day the light bulb in my head lit up. With GitHub Actions, I can publish my blog and dev.to posts from the comfort of the terminal. The actions that I used to build and deploy the site are [Gatsby Publish](https://github.com/marketplace/actions/gatsby-publish) and [TheActionDev](https://github.com/marketplace/actions/theactiondev) for sending articles to dev.to. 

This is my workflow \*.yaml file:

```
name: Gatsby Publish

on:
  push:
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

- whenever I push a new commit to the publish branch the Gatsby site is built and then deployed to the master branch

- also if the post is in _./src/pages/posts/dev_ it's sent to dev.to through its API

- I needed to add an env variable to build environment. In my case, it's used by _gatsby-source-github-api_ to sourcing repositories for the portfolio section. Acces-token input also has this key. It's used by Github Publish action to making changes in the repository.

Is it working? If so, right now you are reading this post whenever it's on my site or dev.to. I don't know everything about Github Actions and these actions itself but this article is a nice start to get to know them better. From this point I'd like to thank the creators of these Actions if you're reading this. And for the rest, if you have questions or suggestions don't hesitate to share it with me in the comment section.

<span>Photo by <a href="https://unsplash.com/@naveenphotography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Naveen Jack</a> on <a href="https://unsplash.com/s/photos/sprout?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
