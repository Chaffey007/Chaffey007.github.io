<?php
/*
// the message
$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("fred.chaffey@intellicargoi.com","My subject",$msg);
*/

/*
$to = "chaffey007@gmail.com";
$subject = "Test Subject";
$txt = "Hello world!";
$headers = "From: noreply@intellicargoi.com" . "\r\n" .
    "CC: fjchaffey@gmail.com";

mail($to,$subject,$txt,$headers);
*/

$to = "chaffey007@gmail.com";
$subject = "Here is the new html layout";

$message = '<html><head>';
$message .= '<title>Validation Email</title>';
$message .= '<style>
body{
background: rgb(0,14,32);
color: rgb(255,255,255);
}
</style>';
$message .= '</head><body>';
$message .= '<img src="http://45.63.85.224/Interface/Images/IntellicargoLogosmall.jpg"/>';
$message .= '<p style="font-size: 18px;">Thank you for registering with us.</p><br><br>';
$message .= '<p style="font-size: 18px">Please click on the link below to validate your registration...</p><br><br>';
$message .= '<a href="#" style="font-size: 25px; color: rgb(0,102,204); cursor: pointer;">Click here to validate</a>';
$message .= "</body></html>";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html; charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <noreply@intellicargoi.com>' . "\r\n";
//$headers .= 'Cc: fjchaffey@gmail.com' . "\r\n";

//mail($to,$subject,$message,$headers);

//send the email
$mail_sent = @mail( $to, $subject, $message, $headers );
//if the message is sent successfully print "Mail sent". Otherwise print "Mail failed"
echo $mail_sent ? "Mail sent" : "Mail failed";


?>
