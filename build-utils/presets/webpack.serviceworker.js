
// webpack-presets provides an abstraction over top of regular Webpack configuration. 
// Even though this adds some complexity, it also allows you to implement shareable presets. 
// Each preset may consist of regular Webpack configuration, actions, and formats
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = () => ({
  plugins: [
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/sw.js'
    })
  ]
});
