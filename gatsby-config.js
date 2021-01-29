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
    {
      resolve: "gatsby-source-apostrophe",
      options: {
        apiKey: process.env.APOS_KEY,
        baseUrl: "http://localhost:3000",
        pieceTypes: ["program", "staff-member"],
      },
    },
  ],
}
