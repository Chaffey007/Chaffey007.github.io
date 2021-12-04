<?php
/*header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
if(!isset($_POST)) die();
require_once 'DBConnection.php';
$response = [];
$SESSION_array = array();
$count = 0;
*/



//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;

/*
//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');
require '../vendor/autoload.php';
//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;
//Set the hostname of the mail server
$mail->Host = 'mail.intellicargoi.com';
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 465;
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = 'fred.chaffey@intellicargoi.com';
//Password to use for SMTP authentication
$mail->Password = '869142#!DiS';
//Set who the message is to be sent from
$mail->setFrom('fred.chaffey@intellicargoi.com', 'Fred Chaffey');
//Set an alternative reply-to address
$mail->addReplyTo('chaffey007@gmail.com', 'F.J.Chaffey');
//Set who the message is to be sent to
$mail->addAddress('fjchaffey@gmail.com', 'John Doe');
//Set the subject line
$mail->Subject = 'PHPMailer SMTP test';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
    //$mail->msgHTML(file_get_contents('contents.html'), __DIR__);
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';
//Attach an image file
$mail->addAttachment('Images/bills01.jpg');
//send the message, check for errors

if (!$mail->send()) {
    $response['status'] = 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    $response['status'] = 'Message sent!';
}
*/

use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host = 'mail.intellicargoi.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'fred.chaffey@intellicargoi.com';
    $mail->Password = '869142#!DiS';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 465;


    $mail->setFrom('fred.chaffey@intellicargoi.com', 'Fred Chaffey');
    $mail->addAddress('chaffey007@gmail.com', 'Recipient1');
    $mail->addAddress('mariaan.chaffey@yahoo.com');
    $mail->addReplyTo('fred.chaffey@intellicargoi.com', 'noreply');
    /*$mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');*/

    //Attachments
    //$mail->addAttachment('/backup/myfile.tar.gz');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Test Mail Subject!';
    $mail->Body    = 'This is SMTP Email Test';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}








//if(mail("<$to>",$email_subject,$email_body,implode("\r\n", $headers))){
/*if(mail("<$to>",$email_subject,$email_body,$headers)){
    $response['status'] = 'Yes';
}
else{
    $response['status'] = 'No';
}*/

//echo json_encode($response);