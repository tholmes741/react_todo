var React = require('react');
var StepStore= require('../stores/step_store.js');

var Step = React.createClass({
  render: function() {
    var status = this.props.status ? "Completed" : "Yet to be done";
    return(
      <li key={this.props.key}>{this.props.body}: {status}</li>
    );
  }
});

module.exports = Step;
