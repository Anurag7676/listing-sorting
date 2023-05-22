const path = require('path')
module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      if (env === 'production') {
        // Enable cache busting in production build
        webpackConfig.output = {
          ...webpackConfig.output,
          filename: 'static/js/[name].[contenthash].js',
          chunkFilename: 'static/js/[name].[contenthash].js',
        }
      } else {
        // Append a unique hash to file names for local development
        webpackConfig.output = {
          ...webpackConfig.output,
          filename: 'static/js/[name].[hash].js',
          chunkFilename: 'static/js/[name].[hash].js',
        }
      }
      return webpackConfig
    },
  },
  // Other Craco configuration options...
}
