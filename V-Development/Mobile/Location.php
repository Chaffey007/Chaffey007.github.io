<?php

	include_once 'db-connect.php';

    class Location{
        private $db;
        private $db_table = "locations";
        private $userID;
        public function __construct(){
            $this->db = new DbConnect();
        }


        //... Save Location Call ...
        public function saveNewLoc($locName,$locType,$locAddr,$locMail,$locPhone,$locTel,$locConName,$locUnitId,$locUserId,$locLong,$locLat){
            $hasHome = false;
            if($locType == "Home"){
                $hasHome = $this->hasHomeLocation($locUserId);
            }

            if($hasHome){
                $json['success'] = 0;
                $json['message'] = "Error saving home address. You already have a home address saved. \r\nPlease sync your data to be sure it shows on the map.";
            }else{
                $query = "INSERT INTO ".$this->db_table." (Loc_Name, Loc_Type, Loc_Add, Loc_Email, Loc_Phone, Loc_Tel, Loc_Con_Name_Surname, Loc_Unit_Id, Loc_User_ID, Loc_Create_Date, Loc_Longitude, Loc_Latitude) values ('$locName', '$locType', '$locAddr', '$locMail', '$locPhone', '$locTel', '$locConName', '$locUnitId', '$locUserId', NOW(), '$locLong', '$locLat' )";
                $inserted = mysqli_query($this->db->getDb(), $query);

                if($inserted == 1){
                    // Obtain last inserted id
                    $last_id = mysqli_insert_id($this->db->getDb());
                    $json['success'] = 1;
                    $json['message'] = "Successfully saved location";
                    $json['item_id'] = $last_id;
                }else{
                    $json['success'] = 0;
                    $json['message'] = "Error Saving Location. Please Try again or contact us for support.";
                }
                mysqli_close($this->db->getDb());
            }
            return $json;
        }

        //... Check if user already has home location ...
        public function hasHomeLocation($locUserId){
            $query = "SELECT * FROM ".$this->db_table." WHERE Loc_User_ID = '$locUserId'";
            $result = mysqli_query($this->db->getDb(), $query);

            if(mysqli_num_rows($result) > 0){
                mysqli_close($this->db->getDb());
                return true;
            }
            return false;
        }

    }

?>