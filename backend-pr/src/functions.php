<?php

function getAllPics($connect) {
    $pictures = mysqli_query($connect, "SELECT * FROM Pictures");
    $picturesList = [];

    while($picture = mysqli_fetch_assoc($pictures)) {
        $picturesList[] = $picture;
    }

    echo json_encode($picturesList);
}

function updatePic($connect, $id, $data) {
    $title = $data['title'];
    $author = $data['author'];
    $imgType =  $data['imgType'];
    $imgDate =  $data['imgDate'];


    mysqli_query($connect, "UPDATE `Pictures` SET `Title` = '$title', `Author` = '$author', `ImgType` = '$imgType', `ImgDate` = '$imgDate' WHERE `Pictures`.`Id` = '$id'");

    http_response_code(200);

    $res = [
        "status" => true,
        "message" => "Picture is updated"
    ];

    echo json_encode($res);
}