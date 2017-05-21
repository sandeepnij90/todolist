<?php

class database {

  protected $handler;

  public function __construct() {
    try{
      $this->handler = new pdo("mysql:host=yourhost;dbname=yourdbname","username","password"); // change this to your host, database name , username, password 
      $this->handler->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
     echo $e->getMessage();
    }
  }

  public function prepareStmt($query) {
    return $this->handler->prepare($query);
  }

  public function __destruct(){
    $this->handler = null;
  }
}

?>
