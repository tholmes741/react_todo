var React = require('react');
var StepStore= require('../stores/step_store.js');

var Step = React.createClass({
  render: function() {
    return(
      <li key={this.props.key}>{this.props.body}: {this.props.status}</li>
    );
  }
});

module.exports = Step;
