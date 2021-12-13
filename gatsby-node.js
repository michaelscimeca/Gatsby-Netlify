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
           _rawContent
           _key
           content {
             _rawChildren
             list
             style
           }
           hero {
             asset {
               path
               gatsbyImageData
               children {
                 ... on ImageSharp {
                   id
                   fixed {
                     base64
                     tracedSVG
                     aspectRatio
                     srcWebp
                     srcSetWebp
                     originalName
                   }
                 }
               }
             }
           }
           dynamicSection {
             ... on SanityImageText {
               _rawContent
               _key
               content {
                 _rawChildren
                 list
                 style
               }
               image {
                 asset {
                   gatsbyImageData(aspectRatio: 1.5)
                   children {
                     ... on ImageSharp {
                       id
                       fixed {
                         base64
                         tracedSVG
                         aspectRatio
                         srcWebp
                         srcSetWebp
                         originalName
                       }
                     }
                   }
                 }
               }
               layout
             }
             ... on SanityBoxRepeater {
               _key
               _type
               _rawRepeater
               repeater {
                 _key
                 _rawFeaturedImage
                 _rawParagraph
                 featuredImage {
                   _key
                   _type
                   _rawAsset
                   _rawHotspot
                   _rawCrop
                   asset {
                     gatsbyImageData
                   }
                 }
                 layout
                 headline
                 paragraph {
                   _key
                   _rawChildren
                   children {
                     _key
                     _type
                     marks
                     text
                   }
                   list
                   style
                 }
               }
             }
           }
         }
       }
     }
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
  // Pull Data and then Run create page function to create pages and drop context based on slug
  page.data.allSanityPage.edges.forEach(data => {
    const { current } =  data.node.slug;
    // Prevent creating page data for index

    if (current !== '/') {
      const { node } = data;
      const template = require.resolve(`./src/templates/page.js`);
      console.log( node, ' ><<<<<< data')
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
        const template = require.resolve(`./src/templates/showcase.js`);
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
