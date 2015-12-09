var React = require('react');
var TodoListItem = require('./todo_list_item.jsx');
var TodoStore = require('../stores/todo_store.js');
var StepStore = require('../stores/step_store.js');
var Step = require('./step.jsx');

var TodoDetailView = React.createClass({
  handleDestroy: function() {
    TodoStore.destroy(this.props.id);
  },

  render: function() {
    console.log(this.props);
    var steps = this.props.steps.map(function(step, idx) {
      return <Step body={step.body} status={step.done} index={idx} />;
  });

    return(
      <div>
        <div>{this.props.body}</div>
        <ol>
          {steps}
        </ol>
        <button onClick={this.handleDestroy} >Remove Todo</button>
      </div>
    );
  }
});

module.exports = TodoDetailView;
