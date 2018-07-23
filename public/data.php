<?php
header("Content-type: text/html; charset=utf-8");
header("Access-Control-Allow-Origin: *");

$article = array();

$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbname = "blog";
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 

$conn->query("SET NAMES utf8");
 
$sql = "SELECT * FROM my_adarticle";

$result = $conn->query($sql);
 
if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        array_push($article,$row);
    }
} else {
    echo "0 结果";
}

if($_GET['msg']==1){
    $datas = ['data'=>$article];
    echo json_encode($datas);
}else{
    $datas = ['data'=>'请求参数错误'];
    echo json_encode($datas);
}

$conn->close();



