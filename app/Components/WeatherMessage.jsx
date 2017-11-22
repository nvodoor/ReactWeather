var React = require('react')

// var WeatherMessage = React.createClass({
// 	render: function () {
// 		return (
// 			<p> The temp is {this.props.temp} in {this.props.location}.</p>
// 		)
// 	}
// })

var WeatherMessage = (props) => {
		return (
			<p className="text-center"> The temp is {props.temp} in {props.location}.</p>
		)
}


module.exports = WeatherMessage;