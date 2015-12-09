var _steps = {};
var _callbacks = [];

var StepStore = {
  fetch: function(todoId) {
    $.get('/api/todos/' + todoId + '/steps', {}, function(steps){
       _steps[todoId] = steps;
       StepStore.changed();
    });
  },

  addChangeHandler: function(cb) {
    _callbacks.push(cb);
  },

  removeChangeHandler: function(cb) {
    var idx = _callbacks.indexOf(cb);
    if (idx > 0) {
      _callbacks.splice(idx, 1);
    }
  },

  changed: function() {
    _callbacks.forEach(function(cb) {
      cb();
    });
  },

  all: function(todoId) {
    return _steps[todoId];
  },

  create: function(data) {
    $.post('/api/todos/' + data.todoId + '/steps', {step: data}, function(step){
       _steps[data.todoId].push(step);
       StepStore.changed();
    });
  },

  find: function(id) {
    var allSteps = [];
    Object.keys(_steps).forEach(function(key) {
      allSteps = allSteps.concat(_steps[key]);
    });
    return allSteps.find(function(step) {
      return step.id === id;
    });
  },

  update: function(id) {
    var step = StepStore.find(id);
    $.ajax({
      type: 'PATCH',
      url: '/api/steps/' + id,
      data: {step: step},
      success: function() {
        StepStore.changed();
      }
    });

  },

  destroy: function(id) {
    var step = StepStore.find(id);
    var todoId = step.todoId;
    var idx = _steps[todoId].indexOf(step);
    $.ajax({
      type: 'DELETE',
      url: '/api/steps/' + id,
      data: {step: step},
      success: function() {
        _steps[todoId].splice(idx, 1);
        StepStore.changed();
      }
    });
  }


};
