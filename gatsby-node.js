const path = require(`path`);
const slash = require(`slash`);

const { meetups } = require('./meetups');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // Create meetup pages
    const meetupTemplate = path.resolve(`src/templates/meetup.js`);

    graphql(`
      {
        site {
          siteMetadata { 
            siteUrl
          }
        }
      }
    `).then(result => {

      if(result.errors) {
        console.error(result.errors);
        return reject(result.errors);
      }
      
      
      const { siteUrl } = result.data.site.siteMetadata;

      // Extract SEO friendly slug
      meetups.forEach(m => {
        createPage({
          path: m.url,
          component: slash(meetupTemplate),
          context: {
            siteUrl,
            meetup: m,
          }
        })
      });
    })


    // Create blog pages
    const blogPostTemplate = path.resolve(`src/templates/template-blog-post.js`)
    graphql(
      `
        {
          allMarkdownRemark(
            limit: 1000
            filter: { frontmatter: { draft: { ne: true } } }
          ) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.error(result.errors)
        return reject(result.errors)
      }

      result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          path: edge.node.fields.slug, // required
          component: slash(blogPostTemplate),
          context: {
            slug: edge.node.fields.slug,
          },
        })
      })

      resolve()
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    let nodeSlug
    nodeSlug = ensureSlashes(
      path.basename(fileNode.relativePath, path.extname(fileNode.relativePath))
    )
    if (nodeSlug) {
      createNodeField({ node, name: `slug`, value: nodeSlug })
    }
  }
}

function ensureSlashes(slug) {
  if (slug.charAt(0) !== `/`) {
    slug = `/` + slug
  }

  if (slug.charAt(slug.length - 1) !== `/`) {
    slug = slug + `/`
  }

  return slug
}
