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
        },
        // set the page slug to query 
        // this will return only data about pages that match
        pageSlugFilter: 'excellence',
        // an optional graphql query string. the default is...
        // queryFields: `nodes { title slug content }`
        queryFields: `nodes {
          author {
            name
          }
          path
          title
          slug
          content
        }`
      }
    },
  ]
}