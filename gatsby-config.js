require('dotenv').config()

module.exports = {
  pathPrefix: '/ucomm-gatsby-theme-demo',
  plugins: [
    {
      resolve: '@ajberkow/gatsby-theme-ucomm',
      options: {
        // the gatsby-source-wordpress plugin options
        graphql: {
          baseUrl: process.env.BASE_URL,
          protocol: process.env.PROTOCOL,
          auth: {
            htaccess_user: process.env.WP_USER,
            htaccess_pass: process.env.WP_PASS,
            htaccess_sendImmediately: process.env.WP_SEND_IMMEDIATELY
          },
          gatsbySourceURL: process.env.GATSBY_SOURCE_URL
        },
        wpSourceQuery: `
          wpSource {
            page(
              id: "${process.env.WP_PAGE_DATABASE_ID}", 
              idType: DATABASE_ID
            ) {
              slug
              title
              beaverBuilderContent (
                useGlobalCSS: true
              ) {
                html
                css
              }
            }
          }
        `
      }
    },
  ]
}