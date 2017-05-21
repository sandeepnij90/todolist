myApp.controller("incompleteList",['$scope','pullFactory',function($scope,pullFactory){
  function getIncomplete(){
    pullFactory.getIncomplete()
    .then(function(r){
      $scope.incompleteTasks=r.data;
    })
  }

    pullFactory.countIncomplete()
    .then(function(r){
      console.log(r.data);
      if(r.data > 0 ) {
        $scope.incompleteHidden = false;
      } else {
        $scope.incompleteHidden = true;
      }
    })


  // countIncomplete();

  getIncomplete();

  $scope.removeTask = function(taskID){
    pullFactory.removeTask(taskID)
    .then(function(){
      getIncomplete();
    })
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
          getIncomplete();
        })
      }
      });
    }
  }
}]);
