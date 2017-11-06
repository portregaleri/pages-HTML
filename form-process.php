<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Eposta Zorunludur ";
} else {
    $email = $_POST["email"];
}

// MSG SUBJECT
if (empty($_POST["msg_subject"])) {
    $errorMSG .= "Konu Zorunludur ";
} else {
    $msg_subject = $_POST["msg_subject"];
}


// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Mesaj gerekiyor ";
} else {
    $message = $_POST["message"];
}

// UPLOAD
if (empty($_POST["upload"])) {
    $errorMSG .= "Mesaj gerekiyor ";
} else {
    $upload = $_POST["upload"];
}

// OPTİON
if (empty($_POST["option"])) {
    $errorMSG .= "Mesaj gerekiyor ";
} else {
    $option = $_POST["option"];
}


$EmailTo = "portregaleri@gmail.com";
$Subject = "Yeni Mesaj Alınmıştır";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $msg_subject;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
$Body .= "upload: ";
$Body .= $upload;
$Body .= "\n";
$Body .= "option: ";
$Body .= $option;
$Body .= "\n";
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>
