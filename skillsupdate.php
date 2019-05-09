<?php
	include('db.php');
	
	$uid = $_POST["uid"];	
	$skill = json_encode($_POST["skill"]);	
	$insertquery = $DBcon->prepare("INSERT INTO skills(uid,skill) VALUES(:uid, :skill)");
	
	$insertquery->bindparam(':uid', $uid);
	$insertquery->bindparam(':skill', $skill);
		
	if($insertquery->execute())
	{
		$res="Skills updated successfully.";
		echo json_encode($res);
	}
	else
	{
		$error="Couldn't update skills. Please try again later.";
		echo json_encode($error);
	}
?>