<?php
require_once "classes/database.php";
require_once "classes/tasks.php";
$postdata = file_get_contents("php://input");
$result = json_decode($postdata);
$taskID = $result->taskID;
$taskText = $result->taskDate;
$datepicker = new DateTime($result->taskDate);
$date = date_format($datepicker,"Y-m-d");
$db = new database;
$task = new tasks($db);
$task->editDate($taskID,$date);
?>
