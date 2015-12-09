var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var DoneButton = require('./done_button.jsx');
var TodoDetailView = require('./todo_detail_view.jsx');

var TodoListItem = React.createClass({
  getInitialState: function(){
    return {shown: false};
  },

  toggleView: function() {
    this.setState({shown: !this.state.shown});
  },

  render: function() {
    var details;

    if (this.state.shown) {
      details = <TodoDetailView body={this.props.todo.body} id={this.props.todo.id} />;
    } else {
      details = <div></div>;
    }

    return (
      <div>
        <div onClick={this.toggleView}>{this.props.todo.title}</div>
        {details}
        <DoneButton
          id={this.props.todo.id}
          status={this.props.todo.done}
        />
      </div>
    );
  }
});

module.exports = TodoListItem;
