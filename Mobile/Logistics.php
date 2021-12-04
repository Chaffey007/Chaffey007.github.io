<?php

include_once 'db-connect.php';
require_once 'mailHandler.php';

class Logistics{
    private $db;
    private $db_table = "logistics";
    private $db_packlist = "packing_list";
    public function __construct(){
        $this->db = new DbConnect();
    }

    //...
    public function newAppQuote($listType,$TypeStat,$name,$descr,$comp,$user,$serv,$inco,$orAddr,$orLat,$orLong,$deAddr,$deLat,$deLong,$vol,$wei,$unit,$orCountr,$deCountr,$count,$val,$cur,$reqType,$contact,$payMeth,$uName,$combItem){
        $json = array();
        $logistID = '';
        $dir = 'Inbound';
        $blank = null;
        $tmpStat = 'OnTime';
        $profIns = '';
        $length = 0;
        $listLength = 0;
        $date = date("Y-m-d H:i:s");

        $mesUnit = $unit;
        //... Seperate Units ...
        $sepUnits = null;
        $sepSubUnits = null;
        if((strpos($combItem, ";") !== false)){
            $sepUnits = explode(';', $combItem);
            $length = count($sepUnits);
            //... Seperate unit data ...
            for($q = 0; $q < $length; $q++){
                if((strpos($sepUnits[$q], ",") !== false)){
                    $sepSubUnits[$q] = explode(',', $sepUnits[$q]);
                }
            }
            $listLength = count($sepUnits);
        }
        else{
            $sepUnits = $combItem;
            $listLength = 1;
            $sepSubUnits = explode(',', $sepUnits);
        }

        //... Calculate individual Volumes & Total Volume & Total Weight & Total Item Count & Total Value ...
        $sepVol = $totVol = $totWeight = $totItem = $totVal = $singVol = null;
        if($listLength > 1){
            for($t = 0; $t < $listLength; $t++){
                $sepVol[$t] = ((double)$sepSubUnits[$t][3] * (double)$sepSubUnits[$t][4] * (double)$sepSubUnits[$t][5] * (double)$sepSubUnits[$t][2]);
                $singVol[$t] = ((double)$sepSubUnits[$t][3] * (double)$sepSubUnits[$t][4] * (double)$sepSubUnits[$t][5]);
                $totVol += (double)$sepVol[$t];
                $totWeight += ((double)$sepSubUnits[$t][6] * (double)$sepSubUnits[$t][2]);
                $totItem += (double)$sepSubUnits[$t][2];
                $totVal += (double)$sepSubUnits[$t][7];
            }
        }else{
            $sepVol = ((double)$sepSubUnits[3] * (double)$sepSubUnits[4] * (double)$sepSubUnits[5] * (double)$sepSubUnits[2]);
            $singVol = ((double)$sepSubUnits[3] * (double)$sepSubUnits[4] * (double)$sepSubUnits[5]);
            $totVol .= (double)$sepVol;
            $totWeight .= (double)$sepSubUnits[6];
            $totItem .= (double)$sepSubUnits[2];
            $totVal .= (double)$sepSubUnits[7];
        }

        //... Get Last DBID By current user ...
        if($comp != null){
            $queryLocate = "SELECT * FROM ".$this->db_table." WHERE Company_Created = '$comp'";
            $profIns = $logistID = $compiId = $comp;
        }else{
            $queryLocate = "SELECT * FROM ".$this->db_table." WHERE User_Created = '$user'";
            $profIns = $logistID = $user;
        }
        $resultLocate = mysqli_query($this->db->getDb(), $queryLocate);
        $length = mysqli_num_rows($resultLocate);

        //... Generate The new Logistic ID ...
        $tmpDate = date("Ymd");
        $logistID .= $tmpDate . $length;

        //... Set the insertQuery ...
        $queryA = "INSERT INTO ".$this->db_table." (Logistic_Id, List_Type, Type_Status, Logistic_Description, Company_Created, User_Created, Date_Created, Date_ready, Date_Booked, Valid_Until, Service_Type, Inco_Term, Logistic_Direction, From_Address, To_Address, From_Long, From_Lat, To_Long, To_Lat, Total_Volume, Total_Weight, Mesure_Unit, From_Country, To_Country, Deliver_Date, Progress_Status, Item_Count, Quote_Amount, Quote_Cur, Request_Type, contact_info, payment_method) ";
        $queryB = "VALUES ('$logistID', '$listType', '$TypeStat', '$descr', '$comp', '$user', '$date', '$TypeStat', '$TypeStat', '$TypeStat', '$serv', '$inco', '$dir', '$orAddr', '$deAddr', '$orLong', '$orLat', '$deLong', '$deLat', '$totVol', '$totWeight', '$mesUnit', '$orCountr', '$deCountr', '$TypeStat', '$tmpStat', '$totItem', '$totVal', '$cur', '$reqType', '$contact', '$payMeth')";
        $query = $queryA.$queryB;
        $result = mysqli_query($this->db->getDb(), $query);
        if ($result === TRUE) {
            $z = 0;
            //... If Single item Or Multiple Items ...
            if($listLength > 1){
                for($t = 0; $t < $listLength; $t++){
                    //... Set the insertQuery ...
                    $queryC = "INSERT INTO ".$this->db_packlist." (item_weight, ship_id, item_id, item_descript, item_qty, item_length, item_width, item_height, item_volume, item_value, item_cur, user_id, item_name) ";
                    $queryD = "VALUES ('{$sepSubUnits[$t][6]}', '{$logistID}', '{$t}', '{$sepSubUnits[$t][1]}', '{$sepSubUnits[$t][2]}', '{$sepSubUnits[$t][3]}', '{$sepSubUnits[$t][4]}', '{$sepSubUnits[$t][5]}', '{$singVol[$t]}', '{$sepSubUnits[$t][7]}', '{$cur}', '{$profIns}', '{$sepSubUnits[$t][0]}')";
                    $queryE = $queryC.$queryD;
                    $resultE = mysqli_query($this->db->getDb(), $queryE);
                    if ($resultE === TRUE) {
                        $z++;
                    }
                }
            }
            else{
                //... Set the insertQuery ...
                $queryC = "INSERT INTO ".$this->db_packlist." (item_weight, ship_id, item_id, item_descript, item_qty, item_length, item_width, item_height, item_volume, item_value, item_cur, user_id, item_name) ";
                $queryD = "VALUES ('$sepSubUnits[6]', '$logistID', '$blank', '$sepSubUnits[1]', '$sepSubUnits[2]', '$sepSubUnits[3]', '$sepSubUnits[4]', '$sepSubUnits[5]', '$singVol', '$sepSubUnits[7]', '$cur', '$profIns', '$sepSubUnits[0]')";
                $queryE = $queryC.$queryD;
                $resultE = mysqli_query($this->db->getDb(), $queryE);
                if ($resultE === TRUE) {
                    $z++;
                }
            }
            if($z == $listLength){
                $json['success'] = 1;
                $json['message'] = "Request Sent";
            }else{
                $json['success'] = 1;
                $json['message'] = "Some items not saved in packing list.";
            }
            /************************************ EMAIL *****************************************/
            if($mesUnit == "Metric"){
                $m = "cm3";
                $w = "kg";
            }else{
                $m = "inch3";
                $w = "lbs";
            }

            //... Send Confirmation mail ...
            $subj = 'New Request';
            $ttl = 'Request Confirmation';
            $msg = '<p style="font-size: 18px;font-family: Arial, sans-serif;color: #fff">Thank you '.$uName.'. We just received your request.</p>';
            $msg .= '<p style="font-size: 16px;font-family: Arial, sans-serif;color: #fff">Ref No:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$logistID.'</font><br>';
            $msg .= 'Name:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$uName.'</font><br>';
            $msg .= 'Email:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$contact.'</font><br>';
            //$msg .= 'Tel: '. .'</p>';
            $msg .= 'From:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$orAddr.'</font><br>';
            $msg .= 'Longitude:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$orLong.'</font>&nbsp;Latitude:&nbsp;<font style="font-size: 15px;color: #0066cc;font-style: italic">'.$orLat.'</font><br>';
            $msg .= 'To:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$deAddr.'</font><br>';
            $msg .= 'Longitude:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$deLong.'</font>&nbsp;Latitude:&nbsp;<font style="font-size: 15px;color: #0066cc;font-style: italic">'.$deLat.'</font><br>';
            $msg .= 'Service Type:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$serv.'</font><br>';
            $msg .= 'Incoterm:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$inco.'</font><br>';
            $msg .= 'Item Quantity:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$count.'</font><br>';
            $msg .= 'Total Volume:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$vol.$m.'</font><br>';
            $msg .= 'Total Weight:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$wei.$w.'</font><br>';
            $msg .= 'Total Value:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$val.$cur.'</font><br>';
            $msg .= 'Date Requested:&nbsp; <font style="font-size: 15px;color: #0066cc;font-style: italic">'.$date.'</font></p>';
            $msg .= '<p style="font-family: Arial, sans-serif;"><font style="font-size: 15px;color: #0066cc;font-style: italic">Please note that some quotes may take up to 48 hours.</font></p>';
            $msg .= '<p style="font-size: 17px;font-family: Arial, sans-serif;color: #fff">Regards<br>Intellicargo International</p>';
            $altMsg = 'We have received your request. Please take note that some requests may take up to 48 hours to process.\r\nRegards\r\nIntellicargo International';
            $sendMailObj = new mailHandler();
            $json_mailResult = $sendMailObj->saveMail($uName,$contact,$subj,$ttl,$msg,$altMsg,'User', 'Request - App','None');
            $json['message'] .=  " - " .$json_mailResult['message'];
        } else {
            $json['success'] = 0;
            $json['message'] = "Request Failed";
        }
        return $json;
    }
}
?>