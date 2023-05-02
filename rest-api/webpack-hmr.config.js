const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename, autoRestart: false }),
    ],
  };
};

////////////// ts-loader - without nest//////
// const path = require('path');
// const nodeExternals = require('webpack-node-externals');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { HotModuleReplacementPlugin } = require('webpack');

// const serverConfig = {
//   mode: 'development',
//   target: 'node',
//   entry: ['./src/index.ts'],
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'server.js',
//   },
//   resolve: {
//     extensions: ['.ts', '.js'],
//   },
//   externals: [nodeExternals()],
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new HotModuleReplacementPlugin(),
//   ],
// };

// module.exports = serverConfig;
