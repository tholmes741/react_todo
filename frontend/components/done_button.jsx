var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var DoneButton = React.createClass({
  handleDone: function(e) {
    TodoStore.toggleDone(this.props.id);
  },

  render: function() {
    var buttonText = this.props.status ? "Undo" : "Done" ;
    return (
      <button onClick={this.handleDone}>{buttonText}</button>
    );
  }
});

module.exports = DoneButton;
