let path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin,
  DashboardPlugin = require('webpack-dashboard/plugin'),
  fs = require('fs'),
  minimist = require('minimist'),
  options = minimist(process.argv.slice(2));

const APP_ROOT = path.resolve('.');
const _config = APP_ROOT + '/config/';
const _source = APP_ROOT + '/src/';
let _dist = APP_ROOT + '/dist/';

let pkg = require('../package.json');

let isDebug = options.d;

module.exports = function(env) {
  console.log(`Building for ${pkg.name}`);

  let entry = {
    [pkg.name]: [_source + 'main.tsx'],
    lib: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'redux-thunk',
      'redux-logger',
      'react-router-dom',
      'glamor',
      'glamor/reset'
    ]
  };

  const devTool = isDebug ? 'eval-source-map' : 'source-map';

  const plugins = [
    new HtmlWebpackPlugin({
      template: _source + 'index.html'
    }),
    new CleanWebpackPlugin([_dist], { allowExternal: true }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib',
      filename: 'lib.js'
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      exclude: ['lib.js']
    })
  ];

  const tsLoader = {
    test: /\.tsx?$/,
    loader: [
      `ts-loader?${JSON.stringify({ configFile: _config + 'tsconfig.json' })}`
    ],
    exclude: /node_modules/
  };

  const cssLoader = {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  };

  const postCssLoader = {
    test: /\.scss$/,
    loader: [
      'style-loader',
      `css-loader?modules&camelCase=dashes&cimportLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?${JSON.stringify(
        { config: { path: _config + '/postcss.config.js' } }
      )}!sass-loader`
    ]
  };

  plugins.push(
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    })
  );

  if (!isDebug) {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    );
    cssLoader.loader = ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader'
    });
    postCssLoader.loader = ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader!sass-loader'
    });
    if ((env || {}).analyze) {
      plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          openAnalyzer: true
        })
      );
    }
  } else {
    console.log('USING WEBPACK DEVELOPMENT SETTINGS');
    tsLoader.loader.splice(0, 0, 'react-hot-loader/webpack');
    plugins.push(
      new DashboardPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    );
    entry[pkg.name] = [
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      _source + 'main.tsx'
    ];
  }

  return {
    context: APP_ROOT,
    devtool: devTool,
    entry: entry,
    output: {
      filename: '[name].[chunkhash].js',
      path: _dist
    },
    resolve: {
      extensions: ['.ts', '.js', '.tsx', '.jsx'],
      alias: {
        '~src': _source
      }
    },
    plugins: plugins,
    module: {
      rules: [
        tsLoader,
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)/,
          loader: 'url-loader?limit=512',
          options: {
            publicPath: 'src/assets'
          }
        },
        cssLoader,
        postCssLoader
      ]
    },
    devServer: {
      contentBase: _dist,
      compress: true,
      historyApiFallback: true,
      hot: true,
      host: 'localhost',
      port: 8000,
      open: true
    }
  };
};
