<?php

	$goTo = "";
	
	//... Determine What to manage
	if(isset($_POST['table'])){
        //... Sync All ...
        if($_POST['table'] == "SyncAll"){
            //require_once 'Location.php';
            $goTo = "SyncAll";
        }
		//... Locations ...
		if($_POST['table'] == "Location"){
			require_once 'Location.php';
			$goTo = "Location";
		}
        //... Products ...
		else if($_POST['table'] == "Products"){
			require_once 'Products.php';
			$goTo = "Products";
		}
        //... User Update ...
        else if($_POST['table'] == "UserUpd"){
            require_once 'user.php';
            $goTo = "UserUpd";
        }
        //... User Image Upload ...
        else if($_POST['table'] == "UserImgUpl"){
            require_once 'user.php';
            $goTo = "UserImgUpl";
        }
        //... Add Quote ...
        else if($_POST['table'] == "NewAppQuote"){
            require_once 'Logistics.php';
            $goTo = "NewAppQuote";
        }
        //... Get Token ...
        else if($_POST['table'] == "appAuth"){
            require_once 'user.php';
            $goTo = "appAuth";
        }
    }

    //... Handle if "Location" selected ...
    if($goTo == "Location"){
	    $locationObj = new Location();
	    $locName = $_POST['name'];
        $locType = $_POST['type'];
        $locAddr = $_POST['addr'];
        $locMail = $_POST['email'];
        $locPhone = $_POST['phone'];
        $locTel = $_POST['tel'];
        $locConName = $_POST['conName'];
        $locUnitId = $_POST['unitId'];
        $locUserId = $_POST['userId'];
        $locLong = $_POST['locLong'];
        $locLat = $_POST['locLat'];

        $json_locSave = $locationObj->saveNewLoc($locName,$locType,$locAddr,$locMail,$locPhone,$locTel,$locConName,$locUnitId,$locUserId,$locLong,$locLat);
        echo json_encode($json_locSave);

    }

    //... Handle if "User Update" selected ...
    if($goTo == "UserUpd"){
        $userObj = new user();
        $id = $_POST['id'];
        $fName = $_POST['first'];
        $lName = $_POST['last'];
        $json_userUpd = $userObj->updateUser($id,$fName,$lName);
        echo json_encode($json_userUpd);
    }

    //... Handle if "User Pic Upload" selected ...
    if($goTo == "UserImgUpl"){
        $userObj = new user();
        $id = $_POST['id'];
        $img = $_POST['img'];
        $json_userPicUpl = $userObj->uploadProfPic($id,$img);
        echo json_encode($json_userPicUpl);
    }

    //... Handle get auth token ...
    if($goTo == "appAuth"){
        $userOb = new user();
        $mail = $_POST['email'];
        $pass = $_POST['password'];
        $hashed_password = md5($pass);
        $json_userAuth = $userOb->appAuthToken($mail,$hashed_password);
        echo json_encode($json_userAuth);
    }

    //... Handle if "Location" selected ...
    if($goTo == "NewAppQuote"){
    $logistObj = new Logistics();
    $listType = $_POST['listType'];
    $TypeStat = $_POST['TypeStat'];
    $name = $_POST['name'];
    $descr = $_POST['descr'];
    $comp = $_POST['comp'];
    $user = $_POST['user'];
    $serv = $_POST['serv'];
    $inco = $_POST['inco'];
    $orAddr = $_POST['orAddr'];
    $orLat = $_POST['orLat'];
    $orLong = $_POST['orLong'];
    $deAddr = $_POST['deAddr'];
    $deLat = $_POST['deLat'];
    $deLong = $_POST['deLong'];
    $vol = $_POST['vol'];
    $wei = $_POST['wei'];
    $unit = $_POST['unit'];
    $orCountr = $_POST['orCountr'];
    $deCountr = $_POST['deCountr'];
    $count = $_POST['count'];
    $val = $_POST['val'];
    $cur = $_POST['cur'];
    $reqType = $_POST['reqType'];
    $contact = $_POST['contact'];
    $payMeth = $_POST['payMeth'];
    $uName = $_POST['uName'];
    $combItem = $_POST['combItem'];

    $json_logSave = $logistObj->newAppQuote($listType,$TypeStat,$name,$descr,$comp,$user,$serv,$inco,$orAddr,$orLat,$orLong,$deAddr,$deLat,$deLong,$vol,$wei,$unit,$orCountr,$deCountr,$count,$val,$cur,$reqType,$contact,$payMeth,$uName,$combItem);
    echo json_encode($json_logSave);

}

?>