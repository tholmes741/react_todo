var TodoStore = require('../stores/todo_store.js');
var React = require('react');
var TodoListItem = require('./todo_list_item.jsx');
var TodoForm = require('./todo_form.jsx');


var TodoList = React.createClass({
  getInitialState: function() {
    return {
      list: []
    };
  },

  todosChanged: function(){
    this.setState({list: TodoStore.all()});
  },

  componentDidMount: function(){
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function() {
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  render: function() {
    var items = this.state.list.map(function(item, idx){
      return <TodoListItem key={idx} todo={item} />;
    });

    return (
      <div>
        {items}
        <TodoForm />
      </div>
    );
  }
});


module.exports = TodoList;
