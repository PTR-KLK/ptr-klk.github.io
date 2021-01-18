module.exports = {
  siteMetadata: {
    title: `Ptr-Klk`,
    description: `Ptr-Klk personal blog and portfolio`,
    menuLinks: [
      {
        name: "Projects",
        link: "/projects",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
    author: `ptrklk`,
    authorSite: `https://ptr-klk.github.io`,
    template: "https://github.com/PTR-KLK/electron-brain",
    year: "2021",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ptr-Klk Electron Brain`,
        short_name: `Ptr-Klk`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `icons/favicon-8x8.ico`,
            sizes: `8x8`,
            purpose: `maskable`,
          },
          {
            src: `icons/favicon-16x16.ico`,
            sizes: `16x16`,
            purpose: `maskable`,
          },
          {
            src: `icons/favicon-24x24.ico`,
            sizes: `24x24`,
            purpose: `maskable`,
          },
          {
            src: `icons/favicon-32x32.ico`,
            sizes: `32x32`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `notes`,
        // remote repo name
        remote: `https://github.com/PTR-KLK/notes.git`,
        // remote repo url with *.md notes
        branch: `master`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-double-brackets-link`,
            options: {
              stripBrackets: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
              withWebp: true,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-markdown-references`,
      options: {
        types: ["Mdx"],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "700"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "700"],
            },
          ],
        },
        useMinify: true,
        usePreload: true,
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/theme.js`).lightTheme,
        dark: require(`${__dirname}/theme.js`).darkTheme,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
