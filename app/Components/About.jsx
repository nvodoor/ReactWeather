var React = require('react')
var {Link} = require('react-router')

// var About = React.createClass({
// 	render: function () {
// 		return (
// 			<h3> About Component</h3>
// 		)
// 	}
// })

var About =  (props) => {
		return (
			<div>
				<div className="row">
					<h1 className="text-center page-title"> About</h1>
					<p className="text-center"> This page is about a React Weather App. It's a simple app that was constructed using React. 
					These are some links below about technologies used in the app's construction.</p>
					<ul className="text-center">
						<li>
							<a href="https://reactjs.org">React</a>
						</li>
						<li>
							<a href="https://foundation.zurb.com/sites/docs/">Foundation</a>
						</li>
					</ul>
				</div>
			</div>
		)
}

module.exports = About;