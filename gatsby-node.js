const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allAposCorePage {
        nodes {
          title
          _url
          slug
          _rendered
        }
      }
    }
  `)

  const { createPage } = actions

  result.data.allAposCorePage.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/apos-page.js`),
      context: {
        title: node.title,
        slug: node.slug,
        slugregex: "/^\\" + node.slug + "//",
      },
    })
  })
}
