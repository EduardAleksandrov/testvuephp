<?php

header('Content-type: json/application');

require './src/connect.php';
require './src/functions.php';

$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$link = $_SERVER["REQUEST_URI"];

$params = explode('/', $link);

$method = $_SERVER['REQUEST_METHOD'];

$id = null;

if (isset($params[2])) {
    $id = $params[2];
}

if ($method === 'GET') {
    if($params[1] === 'pics') {
        getAllPics($connect);
    }
} elseif ($method === 'PATCH') {
    if($params[1] === 'pics') {
        if (isset($id)) {
            $data = file_get_contents('php://input');
            $data = json_decode($data, true);
            // die($data['Title']);
            updatePic($connect, $id, $data);
        }
    }
}
?>