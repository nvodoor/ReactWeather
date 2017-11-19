var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 			<h2>Nav Component</h2>
// 			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
// 			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
// 			<Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
// 			</div>
// 		);
// 	}
// });

var Nav = (props) => {
		return (
			<div>
			<h2>Nav Component</h2>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
			<Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
			</div>
		);
}

module.exports = Nav;

//IndexLink is important to ensure that multiple pages don't get labeled as active since the Index here has the children of about and example