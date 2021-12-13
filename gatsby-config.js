require('dotenv').config();
const autoprefixer = require('autoprefixer');
module.exports = {
  siteMetadata: {
    title: `Red Title`,
    author: {
      name: `RED`,
      summary: `who lives and works in Chicago building useful things.`,
    },
    description: `Red description`,
    siteName: `Red`,
    siteUrl: `https://github.com/d.com`,
    defaultImage: `https://via.placeholder.com/150`,
    ogLanguage: `en_GB`,
    type: `website`,
    canonical: `http://mysite.com/example`,
    twitter: `Red Twitter`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          autoprefixer({
            cascade: false,
            flexbox: true,
            remove: false
          }),
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
            debug: true,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve("./src/components/layout")
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        watchMode: true,
        graphqlTag: 'default',
        // token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-graphql-loader`,
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      start_url: `/`,
      background_color: `#663399`,
      options: {
        icon: "./src/assets/images/static/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
  ],
};
