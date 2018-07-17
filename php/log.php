<?php
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root","123456");
	mysql_select_db("hdys",$db);
	mysql_query("set names utf-8");
	$user = $_POST['mobile'];
	$password = $_POST['password'];
	$sql = "INSERT INTO `log`( `user`, `password`) VALUES ('$user','$password')";
	$row = mysql_query($sql);
	$row = mysql_query($sql);
	if($row){
		echo "<script>alert('添加成功！');</script>";
	}else{
		echo "<script>alert('添加失败！');</script>";
	}
?>
