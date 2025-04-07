// webpack.config.js
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production', // Enables built-in optimizations and minification
  target: 'node',     // Tells Webpack to compile for Node.js environment
  entry: './src/app.js',  // Your application's entry point (adjust if needed)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js', // Output bundle file
  },
  externals: [nodeExternals()], // Exclude node_modules from the bundle
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpilation
          options: {
            presets: ['@babel/preset-env'], // Transpile to a compatible version of Node.js
          },
        },
      },
    ],
  },
};
