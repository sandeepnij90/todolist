myApp.controller("tomorrowList",['$scope','pullFactory',function($scope,pullFactory){
  function getTomorrow(){
    pullFactory.getTomorrow()
    .then(function(r){
      console.log(r.data);
      $scope.tomorrowTasks=r.data;
    })
  }

  getTomorrow();


  $scope.addTaskTomorrow = function() {
    if($scope.inputTaskTomorrow==undefined) {
      alert("You must enter a task");
    } else {
      pullFactory.addTaskTomorrow($scope.inputTaskTomorrow)
      .then(function(r){
        getTomorrow();
        $scope.inputTaskTomorrow = undefined;
      });
    }
  }

  $scope.removeTask = function(taskID){
    pullFactory.removeTask(taskID)
    .then(function(){
      getTomorrow();
    })
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
          getTomorrow();
      });
    }
  }
}]);
