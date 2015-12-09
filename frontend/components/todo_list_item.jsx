var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var DoneButton = require('./done_button.jsx');
var TodoDetailView = require('./todo_detail_view.jsx');
var StepStore = require('../stores/step_store.js');

var TodoListItem = React.createClass({
  getInitialState: function(){
    return {shown: false, steps: []};
  },

  toggleView: function() {
    this.setState({shown: !this.state.shown});
  },

  stepsChanged: function() {
    this.setState({steps: StepStore.all(this.props.todo.id)});
  },

  componentDidMount: function(){
    StepStore.addChangedHandler(this.stepsChanged);
    console.log(this);
    StepStore.fetch(this.props.todo.id);
  },

  render: function() {
    var details;
    // console.log(this.props.todo);
    // console.log("ho");

    if (this.state.shown) {
      details = <TodoDetailView body={this.props.todo.body} id={this.props.todo.id} steps={this.state.steps}/>;
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
