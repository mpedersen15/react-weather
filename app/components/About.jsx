var React = require('react');

var About = () => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is a weather application built with React and my first real React project!</p>
			<p>Here are some of the tools I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - The JS framework used
				</li>
				<li>
					<a href="https://openweathermap.org">Open Weather Map</a> - The weather API used
				</li>
			</ul>
		</div>
	);
};

module.exports = About;