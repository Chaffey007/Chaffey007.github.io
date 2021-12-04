<?php

    require_once '../vendor/autoload.php';
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;


class mailNotify{

    private $email;
    private $backupMail = "backup@intellicargoglobal.com";
    private $backupName = "Intellicargo Records";
    private $fromMail = "system@intellicargoglobal.com";
    private $fromName = "Intellicargo System";

    function __construct()
    {
        $this->email = new PHPMailer(TRUE);
    }

    //... Send SMTP Email ...
    public function sendMail($toName, $toMail, $subj, $ttl, $message, $altMessage, $class, $subclass, $attach){
        $json = array();
        //$json['success'] = 1;
        //$json['message'] = "Sending Email.";
        try{
            $this->email->setFrom($this->fromMail,$this->fromName);
            $this->email->AddReplyTo($this->fromMail,$this->fromName);
            $this->email->addAddress($toMail,$toName);
            //$this->email->addAddress($this->fromMail,$this->fromName);
            //$this->email->addAddress($this->backupMail,$this->backupName);
            $this->email->addCC($this->backupMail, $this->backupName);
            $this->email->Subject = $subj;
            $this->email->AddEmbeddedImage('../Images/IntellicargoLogosmall.png', 'logo_main');
            //$this->email->AddEmbeddedImage('../Images/tw.png', 'logo_tw');
            //$this->email->AddEmbeddedImage('../Images/fb.png', 'logo_fb');
            if($attach != 'None'){
                $this->email->addAttachment($attach);
            }
            $this->email->isHTML(TRUE);

            $this->email->Body = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
            $this->email->Body .= '<html xmlns="http://www.w3.org/1999/xhtml">';
            $this->email->Body .= '<head>';
            $this->email->Body .= '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
            $this->email->Body .= '<title>'.$ttl.'</title>';
            $this->email->Body .= '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>';
            $this->email->Body .= '</head>';
            $this->email->Body .= '<body style="margin: 0; padding: 0;">';
            $this->email->Body .= '<table border="0" cellpadding="0" cellspacing="0" width="100%">';
            $this->email->Body .= '<tr>';
            $this->email->Body .= '<td style="padding: 20px 0 30px 0;">';
            $this->email->Body .= '<table border="0" align="center" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc;">';
            $this->email->Body .= '<tr><td>';
            $this->email->Body .= '<table border="0" align="center" cellpadding="0" cellspacing="0" width="100%">';
            $this->email->Body .= '<tr>';
            $this->email->Body .= '<td align="center" bgcolor="#001521" style="padding: 10px 0 20px 0;">';
            $this->email->Body .= '<img src="cid:logo_main" alt="Intellicargo" width="500" height="88" style="display: block;" />';
            $this->email->Body .= '</td></tr><tr>';
            $this->email->Body .= '<td bgcolor="#042c3e" style="padding: 40px 30px 40px 30px;">';
            $this->email->Body .= $message;
            $this->email->Body .= '</td></tr><tr>';
            $this->email->Body .= '<td bgcolor="#0066cc" style="padding: 10px 30px 10px 30px;">';
            $this->email->Body .= '<table border="0" cellpadding="0" cellspacing="0" width="100%">';
            $this->email->Body .= '<tr>';
            $this->email->Body .= '<td width="75%" style="font-size: 14px;font-family: Arial, sans-serif;color: #fff">';
            $this->email->Body .= '&reg; Intellicargo International, 2018<br/>';
            $this->email->Body .= '</td>';
            $this->email->Body .= '<td align="right">';
            /*$this->email->Body .= '<table border="0" cellpadding="0" cellspacing="0">';
            $this->email->Body .= '<tr><td>';
            $this->email->Body .= '<a href="http://www.twitter.com/">';
            $this->email->Body .= '<img src="cid:logo_tw" alt="Twitter" width="38" height="38" style="display: block;" border="0" />';
            $this->email->Body .= '</a></td>';
            $this->email->Body .= '<td bgcolor="#0066cc" style="font-size: 0; line-height: 0;" width="20"></td>';
            $this->email->Body .= '<td>';
            $this->email->Body .= '<a href="http://www.twitter.com/">';
            $this->email->Body .= '<img src="cid:logo_fb" alt="Facebook" width="38" height="38" style="display: block;" border="0" />';
            $this->email->Body .= '</a></td></tr></table>';*/
            $this->email->Body .= '</td></tr></table></td></tr></table></td></tr></table></td></tr></table></body></html>';
            $this->email->AltBody = $altMessage;

            $this->email->isSMTP();
            $this->email->Host = 'mail.intellicargoglobal.com';
            //$this->email->SMTPDebug = 2;
            $this->email->SMTPAuth = true;
            $this->email->SMTPSecure = 'ssl';
            $this->email->Host = 'mail.intellicargoglobal.com';
            $this->email->Port = 465; // or 587
            $this->email->Username = 'system@intellicargoglobal.com';
            $this->email->Password = 'rU_.s7SMM]M=';
            if($this->email->send()){
                $json['success'] = 1;
                $json['message'] = "Successfully sent mail.";
            }else{
                $json['success'] = 0;
                $json['message'] = $this->email->ErrorInfo;
            }
        }catch(Exception $e){
            $json['success'] = 00;
            $json['message'] = $e->errorMessage();
        }catch(\Exception $e){
            $json['success'] = 000;
            $json['message'] = $e->getMessage();
        }
        return $json;
    }

}


