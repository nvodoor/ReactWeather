var React = require('react')
var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var OpenWeatherMap = require('OpenWeatherMap')

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function (location) {
		var that = this;
		this.setState({isLoading: true});

		OpenWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			})
		}, function(errorMessage) {
			that.setState({
				isLoading: false
			}),
			alert(errorMessage)
		})
		// this.setState({
		// 	location: location,
		// 	temp: 23
		// })
	},
	render: function () {
		var isLoading = this.state.isLoading;
		var temp = this.state.temp;
		var location = this.state.location;

		function renderMessage() {
			if (isLoading) {
				return <p>Fetching Weather...</p>
			} else if (location && temp) {
				return <WeatherMessage location={location} temp={temp}/>
			}
		}
		return (
			<div>
			<h3> Weather Component</h3>
			<WeatherForm onSearch={this.handleSearch} />
			{renderMessage()}
			</div>
		)
	}
})

module.exports = Weather;

// onSearch is passing that function to WeatherForm