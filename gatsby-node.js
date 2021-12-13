exports.createPages = async function ({ actions, graphql }) {
  const page = await graphql(`{
    allSanityPage {
      edges {
        node {
          id
          title
          slug {
            _key
            _type
            current
          }
          headline
          hero {
            asset {
              gatsbyImageData
            }
          }
          dynamicSection {
            ... on SanityImageText {
              _rawContent
              content {
                _rawChildren
                list
                style
              }
              image {
                asset {
                  gatsbyImageData
                }
              }
              layout
            }
          }
        }
      }
    }
  }
  `);
  // Pull Data and then Run create page function to create pages and drop context based on slug
  page.data.allSanityPage.edges.forEach(data => {
    const { current } =  data.node.slug;
    // Prevent creating page data for index
    if (current !== '/') {
      const { node } = data;
      const template = require.resolve(`./src/pages/templates/page.js`);
      actions.createPage({
        path: current,
        component: template,
        context: {
          slug: current,
          page: node
        },
      })
    }
  });

  const posts = await graphql(`
    {
      allSanityShowcase {
       edges {
         node {
           id
           title
           slug {
             _key
             _type
             current
           }
         }
       }
     }
    }
    `);

    if (posts.length > 0) {}
    // Pull Data and then Run create page function to create pages and drop context based on slug
    posts.data.allSanityShowcase.edges.forEach(data => {
      const { current } =  data.node.slug;
      // Prevent creating page data for index
      if (current !== '/') {
        const { node } = data;
        const template = require.resolve(`./src/pages/templates/showcase.js`);
        actions.createPage({
          path:`/showcase/${current}/`,
          component: template,
          context: {
            slug: current,
            page: node
          },
        })
      }
    });
  }
  /**
  * Implement Gatsby's Node APIs in this file.
  *
  * See: https://www.gatsbyjs.org/docs/node-apis/
  */
  exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /locomotive-scroll/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }
