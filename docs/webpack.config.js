var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
	filename: 'main.css'
});

module.exports = {
	entry: './src/js/app.js', // Main js file to compile
	output: {
		path: path.resolve(__dirname, 'dist'), // Path to compile to
		filename: 'bundle.js', // Compile /src/app.js to /dist/bundle.js
		publicPath: '/dist' // Set path for Webpack Dev server
	},
	module: {
		rules: [
			{
				test: /\.js$/, // Check for .js files
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env'] // Transpile ES5, ES6, and ES7
						}
					}	
				]
			},
			{
				test: /\.scss$/, // Check for .scss files
				use: extractPlugin.extract({
					use: ['css-loader', 'sass-loader'] // Compile to .css
				})
			},
			{
				test: /\.css$/,
				loaders: ['css-loader']
			},
		]
	},
	plugins: [
		extractPlugin
	]
};