var React = require('react');
var TodoListItem = require('./todo_list_item.jsx');
var TodoStore = require('../stores/todo_store.js');

var TodoDetailView = React.createClass({
  handleDestroy: function() {
    TodoStore.destroy(this.props.id);
  },

  render: function() {
    return(
      <div>
        <div>{this.props.body}</div>
        <button onClick={this.handleDestroy} >Remove Todo</button>
      </div>
    );
  }
});

module.exports = TodoDetailView;
