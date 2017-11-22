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
// for jsx - classes referred to as className
var Nav = React.createClass({
		onSearch: function(e)  {
			e.preventDefault();
			var city = this.refs.city.value;
			var encodedLocation = encodeURIComponent(city);

			if (city.length > 0) {
				this.refs.city.value = ""
				window.location.hash = '#/?location=' + encodedLocation;
			}
		},
		render: function ()  {
			return (

			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Weather app</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
						</li>
						<li>
							<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
						</li>
						<li>
							<Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search Weather By City" ref="city"/>
							</li>
							<li>
								<input type="submit" className="button" value="Get Weather"/>
							</li>
						</ul>
					</form>
				</div>
			</div>

		);
	}
})

module.exports = Nav;

//IndexLink is important to ensure that multiple pages don't get labeled as active since the Index here has the children of about and example

// var old = (			<div>
// 			<h2>Nav Component</h2>
// 			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
// 			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
// 			<Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
// 			</div>

// 		)