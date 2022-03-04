const admonitions = require('remark-admonitions');
const replacements = require('./replacements.json');

module.exports = {
  siteMetadata: {
    title: `Cartesi.io`,
    description: `Cartesi is an open source project that connects Linux software stacks with blockchain technology, for the creation of scalable DApps.`,
    siteUrl: 'https://cartesi.io',
    image: '/preview-image.png',
    author: `@cartesi`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-124332259-1`,
        head: true,
        defer: false,
        cookieDomain: `cartesi.io`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs/docs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/assets/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cartesi`,
        short_name: `Cartesi`,
        start_url: `/`,
        background_color: `#1E1941`,
        theme_color: `#FFFAE6`,
        display: `standalone`,
        icon: `src/assets/images/favicon.svg`,
        icon_options: {
          purpose: `any`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `zh`, `ru`, `ko`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // defaultLayouts: {
        //   default: require.resolve('./src/components/layouts/page-layout.js'),
        //   content: require.resolve(
        //     './src/components/layouts/content-layout.js'
        //   ),
        // },
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-find-replace`,
            options: {
              replacements: replacements,
              prefix: '%',
            },
          },
        ],
        remarkPlugins: [admonitions],
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-124332259-1`,
        head: false,
        defer: false,
        cookieDomain: `cartesi.io`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.cartesi.io',
        sitemap: 'https://www.cartesi.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },

    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `/src/assets/images/`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cartesi`,
        short_name: `Cartesi`,
        start_url: `/`,
        background_color: `#1E1941`,
        theme_color: `#FFFAE6`,
        display: `standalone`,
        icon: `src/assets/images/favicon.svg`,
        icon_options: {
          purpose: `any`,
        },
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-anchor-links`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
