<?php
header("Access-Control-Allow-Origin:*");
header("Content-type:application/json");
require_once("../innit.php");
$sql="SELECT * FROM yd_news";
$result=sql_execute($sql,$conn);
if($result){
	echo json_encode($result);
}else{
	echo '{"code":0,"msg":"没有找到！"}';
}