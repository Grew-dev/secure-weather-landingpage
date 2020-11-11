/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-sharp`,`gatsby-transformer-sharp`,{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },   {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Permanent Marker`, "Roboto", "Poppins"],
        display: "swap",
      },
    },
  {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
          },

        ],
      },
    },
    {
      resolve: 'gatsby-plugin-simple-analytics'
    },
    {
      resolve: `gatsby-plugin-leadfeeder`,
      options: {
        key: "YEgkB8lmyAv7ep3Z",
      },
    },
  ],
}
