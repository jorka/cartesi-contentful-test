module.exports = {
  siteMetadata: {
    siteUrl: `https://www.cartesi.io`,
    title: `Cartesi`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     accessToken: `qC0bPLKs1fLSkYJ3lJR-wrgz5NlsXDRAXmJ2IGPuhH0`,
    //     spaceId: `wpoprmv1hzgw`,
    //   },
    // },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },

    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `YOUR_GOOGLE_TAGMANAGER_ID`,
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
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
  ],
};
