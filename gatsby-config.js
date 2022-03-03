const admonitions = require("remark-admonitions");
const replacements = require("./replacements.json");

module.exports = {
  siteMetadata: {
    title: `Cartesi.io`,
    description: `Cartesi is an open source project that connects Linux software stacks with blockchain technology, for the creation of scalable DApps.`,
    siteUrl: "https://cartesi.io",
    author: `@cartesi`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     accessToken: `qC0bPLKs1fLSkYJ3lJR-wrgz5NlsXDRAXmJ2IGPuhH0`,
    //     spaceId: `wpoprmv1hzgw`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        postCssPlugins: [require("tailwindcss")],
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
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        injectPageProps: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs/docs/`,
      },
      __key: `docs`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          // default: require.resolve("./src/components/layout.js"),
          // content: require.resolve("./src/components/layoutContent.js"),
        },
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
              prefix: "%",
            },
          },
        ],
        remarkPlugins: [admonitions],
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-images`],
      },
    },

    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: `YOUR_GOOGLE_TAGMANAGER_ID`,
    //     includeInDevelopment: false,
    //     enableWebVitalsTracking: true,
    //   },
    // },

    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/assets/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `/src/assets/images/`,
        },
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-anchor-links`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-124332259-1`,
        head: false,
        defer: false,
        cookieDomain: `cartesi.io`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({ site }) => {
          //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl;
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map((node) => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            };
          }),
      },
      // The plugin will create sitemap index(sitemap.xml) file.
      sitemapSize: 1,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.cartesi.io",
        sitemap: "https://www.cartesi.io/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
