<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
if(!isset($_POST)) die();
require_once '../Mobile/mailHandler.php';
$date = date("Y-m-d H:i:s");
$action = $_POST['act'];

//... Enquiry ...
if($action == 'enquiry'){

    $userName = $_POST['nme'];
    $userMail = $_POST['mail'];
    $userMsg = $_POST['msg'];
    $enqType = $_POST['tpe'];

    $subject = $enqType." enquiry";
    $title = 'Web Enquiry';
    $msg = '<p style="font-size: 16px;font-family: Arial, sans-serif;color: #fff">';
    $msg .= '<table>';
    $msg .= '<tr><td>Name: &nbsp;</td><td><span style="font-size: 15px;color: #0066cc;font-style: italic">'.$userName.'</span></td></tr>';
    $msg .= '<tr><td>Email: &nbsp;</td><td><span style="font-size: 15px;color: #0066cc;font-style: italic">'.$userMail.'</span></td></tr>';
    $msg .= '<tr><td>Message: &nbsp;</td><td><span style="font-size: 15px;color: #777777;font-style: italic">'.$userMsg.'</span></td></tr>';
    $msg .= '</table></p>';
    $altMsg = 'Name: '.$userName.' ; Email: '.$userMail.' ; Message: '.$userMsg;

    $sendMailObj = new mailHandler();
    $json_mailResult = $sendMailObj->saveMail($userName,$userMail,$subject,$title,$msg,$altMsg,'User','Enquiry','None');

    echo json_encode($json_mailResult);
}

//... Reset PW ...
if($action == 'pwReset'){
    require_once 'DBConnection.php';
    $userMail = $_POST['mail'];

    $queryUN = "SELECT * FROM `user` WHERE User_Email='$userMail' ";
    $resultUN = $con->query($queryUN);
    if(mysqli_num_rows($resultUN) == 0){
        $result = 'notFound';
    }
    else if(mysqli_num_rows($resultUN) == 1){
        $fName = '';
        $lName = '';
        while($readingUN = mysqli_fetch_array($resultUN)){
            $fName = $readingUN['User_Name'];
            $lName = $readingUN['User_Surname'];
        }
        $fullName = $fName." ".$lName;
        $randLength = rand(5,10);
        $seeda = str_split('abcdefghijklmnopqrstuvwxyz');
        $seedb = str_split('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        $seedc = str_split('0123456789');
        $seedd = str_split('!@#$%^&*()');
        $seede = str_split('abcdefghijklmnopqrstuvwxyz'.'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.'0123456789'.'!@#$%^&*()');
        shuffle($seeda);
        shuffle($seedb);
        shuffle($seedc);
        shuffle($seedd);
        shuffle($seede);
        $rand = '';
        $rand .= $seeda[0];
        $rand .= $seedb[0];
        $rand .= $seedc[0];
        $rand .= $seedd[0];
        for($b = 0; $b < $randLength; $b++){
            $rand .= $seede[$b];
        }
        $hashRand = md5($rand);
        $queryUpdateQuote = "UPDATE `user` SET `User_Password` = '$hashRand' WHERE `User_Email` = '$userMail'";
        $con->query($queryUpdateQuote);

        //... Send Confirmation mail ...
        $subj = 'Intellicargo Password Reset';
        $ttl = 'New Password';
        $msg = '<p style="font-size: 18px;font-family: Arial, sans-serif;color: #fff">Dear '.$fullName.'<br>';
        $msg .= 'Use the following credentials to log in to Intellicargo International</p>';
        $msg = '<p style="font-size: 16px;font-family: Arial, sans-serif;color: #fff">';
        $msg .= '<table>';
        $msg .= '<tr><td>Email: &nbsp;</td><td><span style="font-size: 15px;color: #0066cc;font-style: italic">'.$userMail.'</span></td></tr>';
        $msg .= '<tr><td>Password: &nbsp;</td><td><span style="font-size: 15px;color: #777777;font-style: italic">'.$rand.'</span></td></tr>';
        $msg .= '</table></p>';
        $msg .= '<p style="font-size: 17px;font-family: Arial, sans-serif;color: #fff">Regards<br>Intellicargo International</p>';
        $altMsg = 'Username: '.$userMail.' ; Password: '.$rand.' ; Regards, Intellicargo International';
        $sendMailObj = new mailHandler();
        $json_mailResult = $sendMailObj->saveMail($userMail,$userMail,$subj,$ttl,$msg,$altMsg,'User','PW Reset','None');
        $result =  $json_mailResult['message'];

    }else{
        $result = 'error';
    }

    if($_SESSION['dbStatus'] != ""){
        $result = "DB Problem";
    }


    echo json_encode($result);
    //echo $mail_sent ? "Mail sent" : "Mail failed";
}


