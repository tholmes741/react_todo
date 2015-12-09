var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoForm = React.createClass({
  getInitialState: function(){
    return { title: "", body: ""};
  },

  updateTitle: function(e) {
    this.setState({title: e.target.value});
  },

  updateBody: function(e) {
    this.setState({body: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var todo = {
      title: this.state.title,
      body: this.state.body
    };
    TodoStore.create(todo);
    this.setState({title: "", body: ""});
  },

  render: function() {
    return (<div>
        <h1>Add Todo!</h1>
          <form onSubmit={this.handleSubmit}>
          Title :  <input value={this.state.title}
              onChange={this.updateTitle}
              type="text" />
            <br/>
          Todo:  <input value={this.state.body}
              onChange={this.updateBody}
              type="textarea" />
            <input type="submit" value="Add Todo" />
          </form>
      </div>
    );
  }

});

module.exports = TodoForm;
