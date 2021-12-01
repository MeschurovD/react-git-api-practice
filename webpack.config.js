const path = require('path')
const miniCss = require('mini-css-extract-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env')
})
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const resourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    hoistUseStatements: true,
    resources: [
      path.resolve(__dirname, 'src/style/components/_variables.scss'),
      path.resolve(__dirname, 'src/style/components/_animation.scss'),
      path.resolve(__dirname, 'src/style/components/_components.scss'),
      path.resolve(__dirname, 'src/style/components/_utils.scss'),
      path.resolve(__dirname, 'src/style/components/_background_effect.scss')
    ]
  }
}

module.exports = {
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, 'src/index.tsx')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/react-git-api-practice/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          miniCss.loader,
          'css-loader',
          'sass-loader',
          resourcesLoader
        ]
      },
      {
        test: /\.module\.scss$/,
        use: [
          miniCss.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]',
              }
            }
          },
          'sass-loader',
          resourcesLoader
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  plugins: [
    //new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed
    }),
    new miniCss({
      filename: 'style.css'
    }),
    new HTMLPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new CleanWebpackPlugin()
  ]
}