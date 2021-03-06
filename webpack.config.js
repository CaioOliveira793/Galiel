const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: './sandbox/index.ts',
	output: {
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.js'],
		plugins: [
			new TsConfigPathsPlugin({
				configFile: './sandbox/tsconfig.json'
			})
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [{
				from: 'sandbox/*.html',
				globOptions: {
					ignore: ['**/example.*.*']
				},
				flatten: true
			}]
		})
	],
	module: {
		rules: [{
			test: /\.tsx?$/,
			loader: 'awesome-typescript-loader',
			exclude: /node_modules/,
			query: {
				configFileName: 'sandbox/tsconfig.json'
			}
		}, {
			test: /\.glsl$/,
			loader: 'webpack-glsl-loader'
		}, {
			test: /\.(gif|png|jpe?g|svg)$/i,
			loader: 'file-loader'
		}, {
			test: /\.(gif|png|jpe?g|svg)$/i,
			loader: 'image-webpack-loader',
			options: {
				bypassOnDebug: true,
				disable: true,
				optimizer: {
					enabled: false
				}
			},
		}]
	},
	devServer: {
		host: '0.0.0.0',
		port: 9000,
		compress: true,
		hot: true,
		watchOptions: {
			ignored: ['node_modules/**', 'test/**']
		}
	}
};
