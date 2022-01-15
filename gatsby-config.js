module.exports = {
  siteMetadata: {
    siteUrl: `https://www.cartesi.io`,
    title: `Cartesi`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: `qC0bPLKs1fLSkYJ3lJR-wrgz5NlsXDRAXmJ2IGPuhH0`,
        spaceId: `wpoprmv1hzgw`,
      },
    },
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

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `/src/assets/images/`,
        },
      },
    },
    `gatsby-plugin-react-svg`,
  ],
};
