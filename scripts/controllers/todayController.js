myApp.controller("todayList",['$scope','pullFactory',function($scope,pullFactory){
  function getToday(){
    pullFactory.getToday()
    .then(function(r){
      $scope.todayTasks = r.data;
      pullFactory.countToday()
      .then(function(response){
        if(response.data == 0) {
          $scope.hideClear = true;
        }
        else {
          $scope.hideClear = false;
        }
      });
    });
  }

  getToday();

  $scope.updateTask = function(taskID) {
    pullFactory.getTask(taskID)
    .then(function(response){
      if (response.data.completed==0){
        pullFactory.completeTask(taskID)
        .then(function(r){
          console.log(r.data);
          getToday();
          console.log(taskID+" is done");
        })
      } else {
        pullFactory.undoTask(taskID)
        .then(function(){
          console.log("is undone");
          pullFactory.getToday()
          .then(function(r){
            getToday();
          });
        })
      }
    })
  }

  $scope.clearCompletedTasks = function(){
    pullFactory.clearCompletedTasks()
    .then(function(){
      getToday();
    })
  }

  $scope.addTaskToday = function() {
    if($scope.inputTaskToday==undefined) {
      console.log($scope.inputTaskToday);
      alert("You must enter a task");
    } else {
      pullFactory.addTaskToday($scope.inputTaskToday)
      .then(function(r){
        $scope.inputTaskToday = undefined;
        getToday();
      });
    }
  }

  $scope.editGetTask = function(taskID,task) {
    $scope.editTaskTaskID = taskID;
    $scope.editTaskText = task;
  }

  $scope.editTask = function() {
    if($scope.editTaskText==undefined || $scope.editTaskText == ""){
      alert("You must enter a task")
    } else {
      pullFactory.editTask($scope.editTaskTaskID,$scope.editTaskText)
      .then(function(){
          getToday();
      });
    }
  }
}]);
