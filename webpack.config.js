const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	entry: './src',
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader']
				})
			},
			{
				test: /\.js$/,
				exclude: /node_module/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react', 'stage-0'],
					}
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			title: 'Output Management',
			template: 'src/index.html',
			// filename: 'test.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
};
