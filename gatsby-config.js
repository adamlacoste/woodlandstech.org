module.exports = {
  siteMetadata: {
    title: `Woodlands Tech`,
    description: `Woodlands Area technology groups and meetups`,
    siteUrl: `https://woodlandstech.org`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
  ],
}
