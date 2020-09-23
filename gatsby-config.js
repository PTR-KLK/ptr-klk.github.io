/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `PTR-KLK Site`,
    description: `PTR-KLK personal blog and portfolio`,
    author: `ptrklk`,
    authorSite: `https://ptr-klk.github.io`,
    template: "https://github.com/gatsbyjs/gatsby-starter-hello-world",
    created: "2020",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PTR-KLK Site`,
        short_name: `PTR-KLK`,
        start_url: `/`,
        background_color: `#645DD7`,
        theme_color: `#F8F7FF`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GATSBY_API_TOKEN,
        graphQLQuery: `query {
          user(login: "PTR-KLK") {
            url
            avatarUrl
            isHireable
            name
            login
            repositories(first: 8, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC, isFork: false) {
              edges {
                node {
                  name
                  description
                  url
                  homepageUrl
                  repositoryTopics(first: 3) {
                    nodes {
                      url
                      topic {
                        name
                      }
                    }
                  }
                  primaryLanguage {
                    name
                    color
                  }
                  pushedAt
                }
              }
            }
          }
        }   
        `,
      },
    },
  ],
}
