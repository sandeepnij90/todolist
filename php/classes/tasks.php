<?php
  class tasks {
    protected $db;
    protected $stmt;

    public function __construct(database $db){
      $this->db = $db;
    }
    public function getToday(){
      $date = date("Y-m-d");
      $query = "SELECT * FROM tblToDo WHERE taskDate=:date ORDER BY taskID DESC";
      $this->stmt=$this->db->prepareStmt($query);
      $this->stmt->bindParam(":date",$date);
      $this->stmt->execute();
      $result = $this->stmt->fetchAll();
      echo json_encode($result);
    }

    public function countToday(){
      $date = date("Y-m-d");
      $query = "SELECT * FROM tblToDo WHERE taskDate=:date AND completed=1";
      $this->stmt=$this->db->prepareStmt($query);
      $this->stmt->bindParam(":date",$date);
      $this->stmt->execute();
      $result = $this->stmt->rowCount();
      echo json_encode($result);
    }

    public function completeTask($taskID) {
      $query = "UPDATE tblToDo SET completed=1 WHERE taskID=:taskID";
      $this->stmt = $this->db->prepareStmt($query);
      $this->stmt->bindParam("taskID",$taskID);
      $this->stmt->execute();
    }

    public function undoTask($taskID) {
      $query = "UPDATE tblToDo SET completed=0 WHERE taskID=:taskID";
      $this->stmt = $this->db->prepareStmt($query);
      $this->stmt->bindParam("taskID",$taskID);
      $this->stmt->execute();
    }

    public function editTask($taskID,$task) {
      $query = "UPDATE tblToDo SET task=:task WHERE taskID=:taskID";
      $this->stmt = $this->db->prepareStmt($query);
      $this->stmt->bindParam("taskID",$taskID);
      $this->stmt->bindParam("task",$task);
      $this->stmt->execute();
    }

    public function editDate($taskID,$taskDate) {
      $query = "UPDATE tblToDo SET taskDate=:taskDate WHERE taskID=:taskID";
      $this->stmt = $this->db->prepareStmt($query);
      $this->stmt->bindParam("taskID",$taskID);
      $this->stmt->bindParam("taskDate",$taskDate);
      $this->stmt->execute();
    }

    public function getTask($taskID) {
      $query = "SELECT * FROM tblToDo WHERE taskID=:taskID";
      $this->stmt = $this->db->prepareStmt($query);
      $this->stmt->bindParam("taskID",$taskID);
      $this->stmt->execute();
      $result = $this->stmt;
      echo json_encode($result->fetch());
    }

    public function clearCompletedTasks() {
      $query = "DELETE FROM tblToDo WHERE completed=1";
      $this->stmt = $this->db->prepareStmt($query);
      $this->stmt->bindParam("taskID",$taskID);
      $this->stmt->execute();
    }

    public function addTaskToday($task) {
      $date = date("Y-m-d");
      $query = "INSERT INTO tblToDo (task,taskDate,completed) VALUES(:task,:date,0)";
      $this->stmt = $this->db->prepareStmt($query);
      $this->stmt->bindParam(":task",$task);
      $this->stmt->bindParam(":date",$date);
      $this->stmt->execute();
    }

    public function getTomorrow(){
      $date = date('Y-m-d',time()+86400);
      $query = "SELECT * FROM tblToDo WHERE taskDate=:date ORDER BY taskID DESC";
      $this->stmt=$this->db->prepareStmt($query);
      $this->stmt->bindParam(":date",$date);
      $this->stmt->execute();
      $result = $this->stmt->fetchAll();
      echo json_encode($result);
    }

    public function addTaskTomorrow($task) {
      $date = date('Y-m-d',mktime()+86400);
      $query = "INSERT INTO tblToDo (task,taskDate,completed) VALUES(:task,:date,0)";
      $this->stmt = $this->db->prepareStmt($query);
      $this->stmt->bindParam(":task",$task);
      $this->stmt->bindParam(":date",$date);
      $this->stmt->execute();
    }

    public function removeTask($taskID) {
      $query = "DELETE FROM tblToDo WHERE taskID=:taskID";
      $this->stmt = $this->db->prepareStmt($query);
      $this->stmt->bindParam("taskID",$taskID);
      $this->stmt->execute();
    }

    public function getUpcoming() {
      $tomorrow = date('Y-m-d',time()+86400);
      $query = "SELECT * FROM tblToDo WHERE taskDate > :tomorrow";
      $this->stmt = $this->db->prepareStmt($query);
      $this->stmt->bindParam(":tomorrow",$tomorrow);
      $this->stmt->execute();
      $result =   $this->stmt->fetchAll();
      echo json_encode($result);
    }

    public function addTaskUpcoming($task,$date) {
      $query = "INSERT INTO tblToDo (task,taskDate,completed) VALUES(:task,:date,0)";
      $this->stmt = $this->db->prepareStmt($query);
      $this->stmt->bindParam(":task",$task);
      $this->stmt->bindParam(":date",$date);
      $this->stmt->execute();
    }

    public function getIncomplete() {
        $date = date("Y-m-d");
        $query = "SELECT * FROM tblToDo WHERE taskDate < :date AND completed=0";
        $this->stmt=$this->db->prepareStmt($query);
        $this->stmt->bindParam(":date",$date);
        $this->stmt->execute();
        $result = $this->stmt->fetchAll();
        echo json_encode($result);
    }

    public function countIncomplete() {
        $date = date("Y-m-d");
        $query = "SELECT * FROM tblToDo WHERE taskDate < :date";
        $this->stmt=$this->db->prepareStmt($query);
        $this->stmt->bindParam(":date",$date);
        $this->stmt->execute();
        $result = $this->stmt->rowCount();
        echo json_encode($result);
    }

  }
?>
