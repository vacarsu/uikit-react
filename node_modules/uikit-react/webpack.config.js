const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		bundle: './src/index.ts'
	},
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'uikit-react.js',
		library: '[name]',
		libraryTarget: 'commonjs'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
		modules: ['src', 'node_modules']
	},
	devServer: {
		compress: true,
		historyApiFallback: {
			rewrites: [
				{ from: /\/*/, to: './client/index.html' }
			]
		}
	}
};