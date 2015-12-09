var TodoStore = require('./stores/todo_store.js');
var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./components/todos_list.jsx');


ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
