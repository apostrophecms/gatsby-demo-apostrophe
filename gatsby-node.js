const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "SitePage") {
    createNodeField({
      node,
      name: `slug`,
      value: node.path,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
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
