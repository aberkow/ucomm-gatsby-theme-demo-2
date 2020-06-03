// include post css so that tailwind classes are available via the wp page editor

// this file handles postcss plugins just for the demo site.

module.exports = () => ({
  plugins: [
    // require('postcss-import'),
    // require('postcss-apply'),
    // require tailwind css and the config file in case there are variants or themes etc...
    require('precss')(),
    // require('cssnext')(),
    require('tailwindcss')('./tailwind.config.js'),
    // allow sass style syntax in css files
  ],
})