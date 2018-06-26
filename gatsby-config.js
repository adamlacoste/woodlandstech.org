module.exports = {
  siteMetadata: {
    title: `GatsbyJS RSS`,
    description: `A blog with RSS powered by GatsbyJS.`,
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
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
  ],
}
