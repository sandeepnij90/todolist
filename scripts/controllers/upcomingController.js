myApp.controller("upcomingList",['$scope','pullFactory',function($scope,pullFactory){
  function getUpcoming(){
    pullFactory.getUpcoming()
    .then(function(r){
      $scope.upcomingTasks=r.data;
    })
  }

  getUpcoming();

  $scope.removeTask = function(taskID){
    pullFactory.removeTask(taskID)
    .then(function(){
      getUpcoming();
    })
  }

  $scope.addTaskUpcoming = function () {
    if($scope.inputDateUpcoming==undefined || $scope.inputDateUpcoming=='') {
      alert("You must enter a date");
    } else {
      if($scope.inputTaskUpcoming==undefined || $scope.inputTaskUpcoming==''){
        alert("You must enter a task");
      } else {
        pullFactory.addTaskUpcoming($scope.inputTaskUpcoming,$scope.inputDateUpcoming)
        .then(function(r){
          getUpcoming();
        })
      }
    }
  }

  $scope.editGetTask = function(taskID,task,taskDate) {
    $scope.editTaskTaskID = taskID;
    $scope.editTaskText = task;
    $scope.editTaskDate = taskDate;
  }

  $scope.editTask = function() {
    if($scope.editTaskText==undefined || $scope.editTaskText == ""){
      alert("You must enter a task")
    } else {
      pullFactory.editTask($scope.editTaskTaskID,$scope.editTaskText)
      .then(function(){
      if($scope.editTaskDate==undefined || $scope.editTaskDate==''){
        alert("You must enter a date")
      } else {
        pullFactory.editDate($scope.editTaskTaskID,$scope.editTaskDate)
        .then(function(r){
          getUpcoming();
        })
      }
      });
    }
  }

}]);
