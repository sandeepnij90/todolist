<?php
require_once "classes/database.php";
require_once "classes/tasks.php";
$postdata = file_get_contents("php://input");
$result = json_decode($postdata);
$db = new database;
$task = new tasks($db);
$task->getIncomplete();
?>
