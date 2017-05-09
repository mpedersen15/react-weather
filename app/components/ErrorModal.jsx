var React = require('react');

var ErrorModal = React.createClass({
	componentDidMount: function(){
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function(){
		return (
			<div className="reveal tiny text-center" id="error-modal" data-reveal="">
				<h4>An Error Modal</h4>
				<p>Error message...</p>
				<p>
					<button className="button hollow" data-close="">Ok</button>
				</p>
			</div>
		);
	}
});

module.exports = ErrorModal;