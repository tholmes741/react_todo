var _todos = [];
var _callbacks = [];

var TodoStore = {
  changed: function() {
    _callbacks.forEach( function(cb) {
      cb();
    });
  },

  addChangedHandler: function(cb) {
    _callbacks.push(cb);
  },

  find: function(id) {
    return _todos.find(function(todo) {
      return todo.id === id;
    });
  },

  removeChangedHandler: function(cb) {
    var idx = _callbacks.indexOf(cb);
    if (idx >= 0) {
      _callbacks.splice(idx, 1);
    }
  },

  all: function() {
    // TodoStore.fetch();
    return _todos.slice();
  },

  fetch: function() {
    $.get("/api/todos", {}, function(todos) {
      _todos = todos;
      TodoStore.changed();
    });
  },

  create: function(data) {
    $.post("/api/todos", { todo: data}, function(todo){
      _todos.push(todo);
      TodoStore.changed();
    });
  },

  destroy: function(id) {
    var todo = TodoStore.find(id);

    $.ajax({
      type: "DELETE",
      url: "/api/todos/" + id,
      data: {todo: todo},
      success: function(){
        var idx = _todos.indexOf(todo);
        _todos.splice(idx, 1);
        TodoStore.changed();
      }
    });
  },

  toggleDone: function(id) {
    var todo = TodoStore.find(id);
    todo.done = !todo.done;

    $.ajax({
      type: "PATCH",
      url: "/api/todos/" + id,
      data: {todo: todo},
      success: function(){
        TodoStore.changed();
      }
    });
  }
};

module.exports = TodoStore;
