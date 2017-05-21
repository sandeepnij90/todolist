<?php
require_once "classes/database.php";
require_once "classes/tasks.php";

$postdata = file_get_contents("php://input");
$result = json_decode($postdata);
$upcomingTask = $result->task;
$datepicker = new DateTime($result->date);
$date = date_format($datepicker,"Y-m-d");

$db = new database();
$task = new tasks($db);
$task->addTaskUpcoming($upcomingTask,$date);
?>
