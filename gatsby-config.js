/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: ".env",
})

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fraunces\:400`, `Karla\:400`],
        display: "swap",
      },
    },
    // Add Apostrophe source plugin config here.
  ],
}
