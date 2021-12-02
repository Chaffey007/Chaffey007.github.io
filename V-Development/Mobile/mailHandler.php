<?php

include_once 'db-connect.php';
require_once 'mailNotify.php';


class mailHandler{

    private $db;
    private $db_table = "mail";
    private $id;
    private $date;
    private $errorMsg;
    private $sendMailObj;

    function __construct()
    {
        $this->db = new DbConnect();
        if(isset($_SESSION['User_Id'])){
            $this->id = $_SESSION['User_Id'];
        }else{
            $this->id = 0;
        }
        $this->date = date("Y-m-d H:i:s");
        $this->sendMailObj = new mailNotify();
    }

    //... Save Email in DB ...
    public function saveMail($toName, $toMail, $subj, $ttl, $message, $altMessage, $class, $subclass, $attach){
        $json = array();
        $defStat = 'Pending';
        $query = "INSERT INTO ".$this->db_table." (to_name, to_mail, mail_subj, mail_ttl, mail_msg, mail_alt, mail_user, mail_status, date_created, mail_class, mail_subclass, mail_attach) values ('$toName', '$toMail', '$subj', '$ttl', '$message', '$altMessage', '$this->id', '$defStat', '$this->date', '$class', '$subclass', '$attach')";
        try{
            $inserted = mysqli_query($this->db->getDb(), $query);
            if($inserted == 1){
                $json['success'] = 1;
                $json['message'] = "Successfully saved mail.";
            }else{
                $json['success'] = 0;
                $json['message'] = "Failed to save Email - ".mysqli_error($this->db->getDb());
            }
        }catch(Exception $e){
            $json['success'] = 00;
            $json['message'] = $e;
        }

        return $json;
    }

    //... Get all pending mail ...
    public function getPendingMail($reqUser){
        $defStat = 'Pending';
        $getData = array();
        $getDataCnt = 0;
        if($reqUser == 'All'){
            $query = "SELECT * FROM ".$this->db_table." WHERE `mail_status` = '$defStat'";
        }else{
            $query = "SELECT * FROM ".$this->db_table." WHERE `mail_status` = '$defStat' AND `mail_user` = '$reqUser'";
        }
        try{
            $result = mysqli_query($this->db->getDb(), $query);
            while($reading = mysqli_fetch_array($result)){
                $getDataCnt++;
                $getData[] = [
                    'dbid' => $reading['db_id'],
                    'toName' => $reading['to_name'],
                    'toMail' => $reading['to_mail'],
                    'subj' => $reading['mail_subj'],
                    'ttl' => $reading['mail_ttl'],
                    'msg' => $reading['mail_msg'],
                    'alt' => $reading['mail_alt'],
                    'user' => $reading['mail_user'],
                    'failed' => $reading['failed_attempts'],
                    'class' => $reading['mail_class'],
                    'subClass' => $reading['mail_subclass'],
                    'attach' => $reading['mail_attach']
                ];
            }
        }catch(Exception $e){
            $this->errorMsg .= "- Failed to get pending emails.\r\n".$e."\r\n";
        }
        for($a = 0; $a < $getDataCnt; $a++){
            $this->toSendMail($getData[$a]);
        }
    }

    //... Call mailNotify to Send Email ...
    private function toSendMail($data){
        $json_mailResult = $this->sendMailObj->sendMail($data['toName'],$data['toMail'],$data['subj'],$data['ttl'],$data['msg'],$data['alt'],$data['class'],$data['subclass'],$data['attach']);
        $this->updMail($data, $json_mailResult['success'], $json_mailResult['message']);
    }

    //... Update Mail Result ...
    private function updMail($data, $stat, $info){
        $json = array();
        $id = $data['dbid'];
        $att = $data['failed'];
        if($stat == 1){
            $newStat = 'Sent';

        }else{
            $newStat = 'Pending';
            $att = ((int)$att + 1);
        }
        $query = "UPDATE ".$this->db_table." SET `mail_status` = '$newStat', `failed_attempts` = '$att', `sent_info` = '$info' WHERE `db_id` = '$id'";
        $result = mysqli_query($this->db->getDb(), $query);
        /*if($result === TRUE){
            $json['success'] = 1;
            $json['message'] = "Successfully sent mail.";
        }else{
            $json['success'] = 0;
            $json['message'] = "Failed to send mail.";
        }*/
    }

}


