<?php
	include('db.php');
	
	$uid = $_POST["uid"];		
	$searchquery = $DBcon->prepare("SELECT *FROM skills WHERE uid = :uida");
	
	$searchquery->bindparam(':uida', $uid);	
	
	$searchquery->execute();
	if($result=$searchquery->fetch())
	{
		echo json_encode($result["skill"]);
	}
	
	else
	{
		$error="Couldn't fetch details. Please try again later.";
		echo json_encode($error);
	}
?>