module.exports = {
  siteMetadata: {
    siteTitle: `Andrei Muresan`,
    siteTitleAlt: `Andrei Muresan - Software Engineer`,
    siteHeadline: `Andrei Muresan - Software Engineer`,
    siteUrl: `https://andreimuresan.com`,
    siteDescription: `I'm a senior software engineer with over 7 years of experience of deploying scalable web projects and mobile apps using PHP (Laravel), Node.js, Go, React & React Native.`,
    siteLanguage: `en`,
    siteImage: `/`,
    author: `@andreimuresan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/smilling-emoji.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ].filter(Boolean),
}