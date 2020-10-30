const { createFilePath } = require(`gatsby-source-filesystem`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = async ({
  node,
  getNode,
  actions,
  cache,
  createNodeId,
}) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  if (node.internal.type === "MarkdownRemark" && node.frontmatter.cover_image) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.cover_image,
      parentNodeId: node.id,
      createNode: actions.createNode,
      createNodeId,
      cache,
    })

    if (fileNode) {
      node.cover_image___NODE = fileNode.id
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blogpost.template.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
