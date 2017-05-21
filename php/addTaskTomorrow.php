<?php
require_once "classes/database.php";
require_once "classes/tasks.php";

$postdata = file_get_contents("php://input");
$result = json_decode($postdata);
$newTask = $result->task;
$date = date("Y-m-d");

$db = new database;
$task = new tasks($db);
$task->addTaskTomorrow($newTask,$date);
?>
