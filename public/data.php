<?php
header("Content-type: text/html; charset=utf-8");
header("Access-Control-Allow-Origin: *");
error_reporting(0); 
function studentData($msg){
    if($msg==1){
         $arr = array('name'=>'junjun','age'=>'18','sex'=>'女');
         return json_encode($arr);
    }
}

if($_GET['msg']){
    echo studentData($_GET['msg']);
}else{
    echo 'false';
}

