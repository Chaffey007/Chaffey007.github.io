<?php

echo 'yes';
require_once 'mailNotify.php';
/*
//... Send Confirmation mail ...
$username = 'Fred';
$email = 'fjchaffey@gmail.com';
$subj = 'Intellicargo Registration';
$ttl = 'Welcome to Intellicargo International';
$msg = '<p style="font-size: 17px;font-family: Arial, sans-serif;color: #fff">Welcome '.$username.'</p>';
$msg .= '<p style="font-size: 16px;font-family: Arial, sans-serif;color: #fff">Thank you for registering with us.<br>';
$msg .= 'Keep these credentials private and enjoy our services.</p>';
$msg .= '<p style="font-size: 16px;font-family: Arial, sans-serif;color: #fff">Username: &nbsp;<font style="font-size: 15px;color: #0066cc;font-style: italic">'.$email.'</font><br>';
$msg .= 'Password: &nbsp;<font style="font-size: 15px;color: #0066cc;font-style: italic">'.$pass.'</font></p>';
$msg .= '<p style="font-size: 17px;font-family: Arial, sans-serif;color: #fff">Regards<br>Intellicargo International</p>';
$altMsg = 'Welcome '.$username.'\r\nThank you for registering with us.\r\nKeep these credentials private and enjoy our services.\r\n';
$altMsg .= 'Username: '.$email.'\r\nPassword: '.$pass.'\r\nRegards\r\nIntellicargo International';
$sendMailObj = new mailNotify();
exec($sendMailObj->sendMail($username,$email,$subj,$ttl,$msg,$altMsg) . " > /dev/null &");
//$json_mailResult = $sendMailObj->sendMail($username,$email,$subj,$ttl,$msg,$altMsg);
//$json['message'] =  $json_mailResult['message'];
echo 'yes';
//echo $json_mailResult['success'];
//echo $json_mailResult['message'];
