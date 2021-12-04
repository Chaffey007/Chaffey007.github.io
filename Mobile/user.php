<?php
    
    include_once 'db-connect.php';
    require_once 'mailHandler.php';
    
    class User{
        private $db;
        private $db_table = "user";
        private $db_stats = "user_stats";
        private $db_setts = "user_settings";
		private $userID, $userTpe, $firstName, $lastName, $emailAddress, $contact, $userPriv, $profPic, $token;
        public function __construct(){
            $this->db = new DbConnect();
        }

        //... Get User Credentials if login correct ...
        public function isLoginExist($mail, $pass){
            $query = "SELECT * FROM ".$this->db_table." WHERE User_Username = '$mail' AND User_Password = '$pass' Limit 1";
			//$query = "SELECT * FROM ".$this->db_table." WHERE User_Email = '$mail' AND User_Password = '$pass'";// Limit 1";
            $result = mysqli_query($this->db->getDb(), $query);

			while($reading = mysqli_fetch_array($result)){
				$this->userID = $reading['User_Id']; 
				$this->firstName = $reading['User_Name'];
				$this->lastName = $reading['User_Surname'];
				$this->emailAddress = $reading['User_Email'];
				$this->contact = $reading['User_Contact'];
				$this->userPriv = $reading['User_Privelage'];
				$this->userTpe = $reading['User_Type'];
				$this->profPic = $reading['Profile_Pic'];
				$this->token = $reading['secure_token'];

				//mysqli_close($this->db->getDb());
                return true;
			}
            
			if(mysqli_num_rows($result) < 1){
				mysqli_close($this->db->getDb());
            
            return false;
			}
        }

        //... Check if email exists ...
        public function isEmailUsernameExist($email){
            $query = "SELECT * FROM ".$this->db_table." WHERE User_Email = '$email'";
            $result = mysqli_query($this->db->getDb(), $query);
			
            if(mysqli_num_rows($result) > 0){
                mysqli_close($this->db->getDb());
                return true;
            }
            return false;
        }

        //... Test email structure ...
        public function isValidEmail($email){
            return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
        }

        //... Register User ...
        public function createNewRegisterUser($username, $password, $email, $pass){
            $isExisting = $this->isEmailUsernameExist($email);
            
            if($isExisting){
                $json['success'] = 0;
                $json['message'] = "Error in registering. The email already exists";
            }else{ 
            $isValid = $this->isValidEmail($email);
                if($isValid)
                {
					$userType = "Private";
					$regStat = "Pending";
					$userPrivelage = "Private";
                    $default = 'Default';
					try{
                        $token = bin2hex(random_bytes(64));
                        //$query = "INSERT INTO ".$this->db_table." (User_Username, User_Password, User_Email) values ('$username', '$password', '$email')";
                        $query = "INSERT INTO ".$this->db_table." (User_Type, User_Reg_Status, User_Privelage, User_Name, User_Password, User_Email, User_Username, Date_Created, Date_Updated, secure_token) values ('$userType', '$regStat', '$userPrivelage', '$username', '$password', '$email', '$email', NOW(), NOW(),'$token')";
                        $inserted = mysqli_query($this->db->getDb(), $query);

                        if($inserted == 1){
                            $json['success'] = 1;
                            $json['message'] = "Registered";
                            //$json['message'] = $query;

                            $queryGetId = "SELECT * FROM `user` WHERE User_Email='$email' AND User_Password='$password' LIMIT 1";
                            $resultGetId = mysqli_query($this->db->getDb(), $queryGetId);
                            $readingGetId = mysqli_fetch_array($resultGetId);
                            if(mysqli_num_rows($resultGetId) == 1){
                                $userID = $readingGetId['User_Id'];
                                $querySettings = "INSERT INTO `user_settings` (User_Id) values ('$userID')";
                                $queryStats = "INSERT INTO `user_stats` (User_Id) values ('$userID')";
                                $resultSettings = mysqli_query($this->db->getDb(), $querySettings);
                                $resultStats = mysqli_query($this->db->getDb(), $queryStats);

                                if(($resultSettings === TRUE) && ($resultStats === TRUE)){
                                    $json['message'] .= " - Complete";
                                }
                            }

                            //... Send Confirmation mail ...
                            $subj = 'Intellicargo Registration';
                            $ttl = 'Welcome to Intellicargo International';
                            $msg = '<p style="font-size: 18px;font-family: Arial, sans-serif;color: #fff">Welcome '.$username.'</p>';
                            $msg .= '<p style="font-size: 16px;font-family: Arial, sans-serif;color: #fff">Thank you for registering with us.<br>';
                            $msg .= 'Keep these credentials private and enjoy our services.</p>';
                            $msg .= '<p style="font-size: 16px;font-family: Arial, sans-serif;color: #fff">Username: &nbsp;<font style="font-size: 15px;color: #0066cc;font-style: italic">'.$email.'</font><br>';
                            $msg .= 'Password: &nbsp;<font style="font-size: 15px;color: #0066cc;font-style: italic">'.$pass.'</font></p>';
                            $msg .= '<p style="font-size: 17px;font-family: Arial, sans-serif;color: #fff">Regards<br>Intellicargo International</p>';
                            $altMsg = 'Welcome '.$username.'\r\nThank you for registering with us.\r\nKeep these credentials private and enjoy our services.\r\n';
                            $altMsg .= 'Username: '.$email.'\r\nPassword: '.$pass.'\r\nRegards\r\nIntellicargo International';
                            $sendMailObj = new mailHandler();
                            $json_mailResult = $sendMailObj->saveMail($username,$email,$subj,$ttl,$msg,$altMsg, 'User','Register - App','None');
                            $json['message'] =  $json_mailResult['message'];

                        }else{
                            $json['success'] = 0;
                            $json['message'] = "Error in registering. Please Try again or contact us for support.";
                        }
                    }catch(Exception $e){
                        $json['success'] = 0;
                        $json['message'] = "Error generating token.";
                    }

					


                    mysqli_close($this->db->getDb());
                }
                else{
                    $json['success'] = 0;
                    $json['message'] = "Error in registering. Email Address is not valid";
                } 
            }
            return $json;
        }

        //... User Login ...
        public function loginUsers($mail, $pass){
            $json = array();
            $canUserLogin = $this->isLoginExist($mail, $pass);
            if($canUserLogin){
                $this->updateStats();
                $json['success'] = 1;
                $json['message'] = "Successfully logged in";
                $json['userid'] = $this->userID;
                $json['firstname'] = $this->firstName;
                $json['lastName'] = $this->lastName;
                $json['emailAddress'] = $this->emailAddress;
                $json['contact'] = $this->contact;
                $json['userPriv'] = $this->userPriv;
                $json['userTpe'] = $this->userTpe;
                $json['profPic'] = $this->profPic;
                $json['token'] = $this->token;
            }else{
                $json['success'] = 0;
                $json['message'] = "Incorrect details";
            }
            return $json;
        }

        //... Get Auth Token ...
        public function appAuthToken($mail, $pass){
            $json = array();
            $canUserLogin = $this->isLoginExist($mail, $pass);
            if($canUserLogin){
                $this->updateStats();
                $json['success'] = 1;
                $json['message'] = "Successfully logged in";
                $json['userid'] = $this->userID;
                $json['firstname'] = $this->firstName;
                $json['lastName'] = $this->lastName;
                $json['emailAddress'] = $this->emailAddress;
                $json['contact'] = $this->contact;
                $json['userPriv'] = $this->userPriv;
                $json['userTpe'] = $this->userTpe;
                $json['profPic'] = $this->profPic;
                $json['token'] = $this->token;
            }else{
                $json['success'] = 0;
                $json['message'] = "Incorrect details";
                $json['token'] = "-";
            }
            return $json;
        }

        //... Update User Stats ...
        public function updateStats(){
            $newCount = 0;
            $nowDate = date("Y-m-d H:i:s");
            $queryGetStats = "SELECT * FROM ".$this->db_stats." WHERE User_Id='$this->userID' Limit 1";
            $resultGetStats = mysqli_query($this->db->getDb(), $queryGetStats);
            while($reading = mysqli_fetch_array($resultGetStats)){
                if($reading['Log_Count'] !== NULL){
                    $newCount = (int)$reading['Log_Count'];
                }
                $newCount += 1;
                $queryUpdateStats = "UPDATE ".$this->db_stats." SET `Log_Count` = '$newCount', `Last_Login` = '$nowDate' WHERE `User_Id` = '$this->userID'";
                $res = mysqli_query($this->db->getDb(), $queryUpdateStats);
                mysqli_close($this->db->getDb());
            }
        }

        //... Update User Details ...
        public function updateUser($id,$fName,$lName){
            $json = array();
            $query = "UPDATE ".$this->db_table." SET `User_Name` = '$fName', `User_Surname` = '$lName' WHERE `User_Id` = '$id'";
            //$inserted = mysqli_query($this->db->getDb(), $query);
            if(mysqli_query($this->db->getDb(), $query)){
                $json['success'] = 1;
                $json['message'] = "Update Success";
            }
            else{
                $json['success'] = 0;
                $json['message'] = "Update Failed";
            }
            return $json;
        }

        //... Upload Profile Pic ...
        public function uploadProfPic($id,$img){
            $json = array();
            $json['message'] = "Upload Empty";
            $date = date("Y-m-d H:i:s");
            $stat = 'true';
            define ("FILEREPOSITORY","../");
            $folder = 'Prof_Pics';
            if (! is_dir(FILEREPOSITORY.$folder)) {
                mkdir(FILEREPOSITORY.$folder);
            }

            $binary=base64_decode($img);
            $file = fopen(FILEREPOSITORY.$folder."/"."$id.jpg", 'wb');
            if(fwrite($file, $binary)){
                $query = "UPDATE ".$this->db_table." SET `Profile_Pic` = '$stat', `Date_Updated` = '$date' WHERE `User_Id` = '$id'";
                //$inserted = mysqli_query($this->db->getDb(), $query);
                if(mysqli_query($this->db->getDb(), $query)){
                    $json['success'] = 1;
                    $json['message'] = "Upload Success";
                }
                else{
                    $json['success'] = 0;
                    $json['message'] = "Upload Success but update failed";
                }
            }else{
                $json['success'] = 0;
                $json['message'] = "Upload Failed";
            }
            return $json;
        }
    }
    ?>