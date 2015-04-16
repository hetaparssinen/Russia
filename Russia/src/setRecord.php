<?php

if (isset($_GET["record"]) && isset($_GET["game"])) {
      $newRecord = $_GET["record"];
	  $game = $_GET["game"];
    }


$servername = "mysql.metropolia.fi";
$username = "m0602227";
$password = "password";
$dbname = "m0602227";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "UPDATE record_" . $game . " " . "SET record=" . $newRecord . " where id=0";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>