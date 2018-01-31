<?php
$db_host = 'w.rdc.sae.sina.com.cn';
$db_user = '03m1m0xxjy';
$db_password = 'xm251wwwwhzh1kklijwikjhl1x2hli3zy50y1w0i';
$db_database = 'app_zhangxiangjt';
$db_port = 3306;
$db_charset = 'UTF8';
header("Access-Control-Allow-Origin:*");
$conn = mysqli_connect(
  $db_host, $db_user, $db_password, $db_database, $db_port);
  mysqli_query($conn, "SET NAMES $db_charset");
function sql_execute($sql){
  global $conn;
  $result = mysqli_query($conn, $sql);
  if(stripos($sql,"select") === 0)
    if(!$result){
      return  "查询执行失败！请检查SQL语法：$sql";
    }else {
      return $rowList = mysqli_fetch_all($result,MYSQLI_ASSOC);
    }
  else
    return $result;
}