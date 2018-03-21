const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const webpackLodashPlugin = require('lodash-webpack-plugin')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark' &&
    typeof node.slug === 'undefined') {
    // Use `createFilePath` to turn markdown files in our `data/blog` directory into `/blog/slug`
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'data/blog/',
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/blog${relativeFilePath}`,
    })
    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        tag => `/blog/tags/${_.kebabCase(tag)}/`
      )
      createNodeField({ node, name: `tagSlugs`, value: tagSlugs })
    }
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("src/templates/blog-post.js")
    const tagPages = path.resolve("src/templates/tag-page.js")
    graphql(
      `
        {
          allMarkdownRemark(
            limit: 1000,
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        resolve()
        // reject(result.errors);
      }

      // Create blog posts pages.
      _.each(result.data.allMarkdownRemark.edges, edge => {
        createPage({
          path: edge.node.fields.slug, // required
          component: blogPost,
          context: {
            slug: edge.node.fields.slug,
          },
        })
      })

      // Tag pages.
      let tags = []
      _.each(result.data.allMarkdownRemark.edges, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })
      tags = _.uniq(tags)
      tags.forEach(tag => {
        const tagPath = `/blog/tags/${_.kebabCase(tag)}/`
        createPage({
          path: tagPath,
          component: tagPages,
          context: {
            tag,
          },
        })
      })

      resolve()
    })
  })
}

// Add Lodash plugin
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === `build-javascript`) {
    config.plugin(`Lodash`, webpackLodashPlugin, null)
  }

  return
}
