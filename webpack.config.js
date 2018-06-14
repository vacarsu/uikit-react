const webpack = require('webpack');
const path = require('path');

module.exports = env => {
	console.log(env);
	return {
		entry: {
			bundle: './src/app.tsx'
		},
		devtool: 'inline-source-map',
		mode: 'development',
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'build')
		},
		resolve: {
			extensions: [ '.tsx', '.ts', '.js' ]
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
		plugins: require(`./webpack/webpack.${env.prod ? 'prod' : 'dev'}.js`),
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						chunks: "initial",
						minChunks: 2,
						maxInitialRequests: 5, // The default limit is too small to showcase the effect
						minSize: 0 // This is example is too small to create commons chunks
					},
					vendor: {
						test: /node_modules/,
						chunks: "initial",
						name: "vendor",
						priority: 10,
						enforce: true
					}
				}
			}
		},
		devServer: {
			compress: true,
			historyApiFallback: {
				rewrites: [
					{ from: /\/*/, to: './index.html' }
				]
			}
		}
	}
};