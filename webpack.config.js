var webpack = require('webpack')

module.exports = {
	entry: ['script!jquery/dist/jquery.min.js','script!foundation-sites/dist/foundation.min.js','./app/app.jsx',], 
	output: {
		//dirname gives you path to file you are in - In this case ReactBundle
		path: __dirname,
		filename: './public/bundle.js'
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$':'jquery',
			'jQuery':'jquery'
		})
	],
	resolve: {
		root: __dirname,
		// alias gives name to components and tells webpack where to find em
		alias:  {
			Main: 'app/Components/Main.jsx',
			Nav: 'app/Components/Nav.jsx',
			Weather: 'app/Components/Weather.jsx',
			About: 'app/Components/About.jsx',
			Example: 'app/Components/Example.jsx',
			WeatherForm: 'app/Components/WeatherForm.jsx',
			WeatherMessage: 'app/Components/WeatherMessage.jsx',
			OpenWeatherMap: 'app/API/OpenWeatherMap.jsx',
			ErrorModal: 'app/Components/ErrorModal.jsx',
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['','.js','.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				},
				// test refers to all the files of a type of extension you want to grab
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	}
};