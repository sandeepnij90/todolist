var pullFactory = function($http) {
  factory = {};

  factory.getToday = function(){
    return $http.get("php/getToday.php");
  }

  factory.getTomorrow = function(){
    return $http.get("php/getTomorrow.php");
  }

  factory.countToday = function(){
    return $http.get("php/countToday.php");
  }


    factory.countTodayCompleted = function(){
      return $http.get("php/getToday.php");
    }

  factory.completeTask = function(taskID) {
    var data = {
      taskID:taskID
    }
    return $http.post("php/completeTask.php",data);
  }

  factory.undoTask = function(taskID) {
    var data = {
      taskID:taskID
    }
    return $http.post("php/undoTask.php",data);
  }

  factory.getTask = function(taskID) {
    var data = {
      taskID:taskID
    }
    return $http.post("php/getTask.php",data);
  }

  factory.clearCompletedTasks = function() {
    return $http.post("php/clearCompletedTasks.php");
  }

  factory.addTaskToday = function(task) {
    var data = {
      task:task
    }
    return $http.post("php/addTaskToday.php",data);
  }

  factory.addTaskTomorrow = function(task) {
    var data = {
      task:task
    }
    return $http.post("php/addTaskTomorrow.php",data);
  }

  factory.removeTask = function(taskID) {
    var data = {
      taskID:taskID
    }
    return $http.post("php/removeTask.php",data);
  }

  factory.getUpcoming= function() {
    return $http.post("php/getUpcoming.php");
  }

  factory.addTaskUpcoming = function(task,date) {
    var data = {
      task:task,
      date:date
    }
    return $http.post("php/addTaskUpcoming.php",data);
  }

  factory.editTask = function(taskID,task) {
    var data = {
      taskID:taskID,
      task:task
    }
    return $http.post("php/editTask.php",data);
  }

  factory.editDate = function(taskID,taskDate) {
    var data = {
      taskID:taskID,
      taskDate:taskDate
    }
    return $http.post("php/editDate.php",data);
  }

  factory.getIncomplete = function() {
    return $http.post("php/getIncomplete.php")
  }

  factory.countIncomplete = function() {
    return $http.post("php/countIncomplete.php")
  }
  return factory;
}

myApp.factory("pullFactory",pullFactory);
