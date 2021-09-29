const path = require('path')
const miniCss = require('mini-css-extract-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: [
    '@babel/polyfill',
    path.resolve(__dirname, 'src/index.tsx')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
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
    rules: [{
      test: /\.(s*)css$/,
      use: [
        miniCss.loader,
        'css-loader',
        'sass-loader'
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
    new miniCss({
      filename: 'style.css'
    }),
    new HTMLPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new CleanWebpackPlugin()
  ]
}