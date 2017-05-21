<?php
require_once "classes/database.php";
require_once "classes/tasks.php";

$db = new database;
$task = new tasks($db);
$task->clearCompletedTasks($taskID);
?>
