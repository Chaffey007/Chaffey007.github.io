/*
registration
log
*/
(function () {
    'use strict';
    var myApp = angular.module('Body');

    /** ***********************************************************************************************************/
    /************************************************* Direct To Page ************************************************************/
    /** ***********************************************************************************************************/
    myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $rootScope, $locationProvider){
        //... Check if Mobile ...
        var _tst = window.mobileAndTabletcheck = function() {
            var check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        };

        _tst() ? $rootScope.isMobile = true : $rootScope.isMobile = false;
        //console.log($rootScope.isMobile);

        $routeProvider
        //.......... Standard ..........
            .when('/main',{
                //templateUrl: (_tst())?'Templates/indexMainMobile.php':'Templates/indexMain.php',
                templateUrl: (_tst())?'Templates/index_Update_Mobile.php':'Templates/indexMain.php',
                controller: (_tst())?'mainControllerMobile':'mainController'
            })
            .when('/logistics',{
                templateUrl: (_tst())?'Templates/indexLogisticsMobile.php':'Templates/indexLogistics.php',
                controller: (_tst())?'logisticsControllerMobile':'logisticsController'
            })
            .otherwise({
                redirectTo: '/main'
            });

    }]);
    /** ***********************************************************************************************************/
    /************************************************* Initialise Run ************************************************************/
    /** ***********************************************************************************************************/
    myApp.run(['$rootScope','$timeout','$document','scrollPageService',function($rootScope, $timeout, $document, scrollPageService){
        console.log('Starting Intellicargo Main Site...');

        //... Check slow network ...
        var slowLoad = window.setTimeout(function(){
            console.log('Slow Network');
        }, 70);
        window.addEventListener('load', function(){
            window.clearTimeout(slowLoad);
        }, false);

        //... Check scroll events for keyboard ...
        var bodyElement = angular.element($document);
        angular.forEach(['keydown'], function(EventName){
            bodyElement.bind(EventName, function(e){
                if((e.key === 'ArrowUp') || (e.key === 'ArrowDown')){
                    scrollPageService.pageOnScroll('keyboard', e.key)
                }
            });
        });
    }]);

    /** ***********************************************************************************************************/
    /************************************************* Loading Controller ************************************************************/
    /** ***********************************************************************************************************/
    myApp.controller('loadingController',['$scope','$rootScope','$timeout','$log','$http', function($scope, $rootScope, $timeout, $log, $http){
        $rootScope.documentReady = false;
        $rootScope.loading = true;

        angular.element(document).ready(function(){
            $timeout(function() {
                $rootScope.documentReady = true;
                $rootScope.loading = false;
            }, 2000);
        });
    }]);
    /** ***********************************************************************************************************/
    /************************************************* Main Controller ************************************************************/
    /** ***********************************************************************************************************/
    myApp.controller('mainController',['$scope','$location','$rootScope','$timeout','$log','$http', function($scope, $location, $rootScope, $timeout, $log, $http){

        $rootScope.isMobile = false;
        $scope.toLogistics = ToLogistics;
        function ToLogistics(){
            $rootScope.loading = true;
            //... Fullscreen ...
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
            $location.path('/logistics');
        }

    }]);

    /** ***********************************************************************************************************/
    /************************************************* Logistics Controller ************************************************************/
    /** ***********************************************************************************************************/
    myApp.controller('logisticsController',['$scope', '$rootScope', '$timeout', '$log', '$http', '$location', 'GlobeVars', 'scrollPageService', '$sce', 'currencyConvert', function($scope, $rootScope, $timeout, $log, $http, $location, GlobeVars, scrollPageService, $sce, currencyConvert){

        $rootScope.miniScroll = false;
        $rootScope.isMobile = false;

        /************************************************* Dynamically inject Dependency files ************************************************************/
        function loadjscssfile(filename, filetype){
            let fileref;
            if (filetype === "js"){ //if filename is a external JavaScript file
                if(document.querySelectorAll('[src="' + filename + '"]').length > 0){
                    //... Do Nothing ...
                }else{
                    fileref = document.createElement('script');
                    fileref.setAttribute("type","text/javascript");
                    fileref.setAttribute("src", filename);
                }
            }
            else if (filetype === "css"){ //if filename is an external CSS file
                if(document.querySelectorAll('[href="' + filename + '"]').length > 0){
                    //... Do Nothing ...
                }else{
                    fileref = document.createElement("link");
                    fileref.setAttribute("rel", "stylesheet");
                    fileref.setAttribute("type", "text/css");
                    fileref.setAttribute("href", filename);
                }
            }
            if (typeof fileref !== "undefined")
                document.getElementsByTagName("head")[0].appendChild(fileref);
        }

        /************************************************* Dynamically remove Dependency files ************************************************************/
        function removejscssfile(filename, filetype){
            var targetelement=(filetype==="js")? "script" : (filetype==="css")? "link" : "none"; //determine element type to create nodelist from
            var targetattr=(filetype==="js")? "src" : (filetype==="css")? "href" : "none"; //determine corresponding attribute to test for
            var allsuspects=document.getElementsByTagName(targetelement);
            for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
                if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!==null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!==-1){
                    allsuspects[i].parentNode.removeChild(allsuspects[i]); //remove element by calling parentNode.removeChild()
                }
            }
        }
        //removejscssfile("somescript.js", "js") //remove all occurences of "somescript.js" on page

        /******************************** Go To Main *************************************/
        //... Back To Main ...
        $scope.toMain = ToMain;
        function ToMain(){
            $location.path('/main');
        }

        /******************************** Load Doc *************************************/
        $rootScope.indexReady = false;
        angular.element(document).ready(function(){
            $timeout(function() {
                $rootScope.indexReady = true;
                $rootScope.loading = false;
            }, 1);
        });

        /******************************** Left Menu *************************************/
        $rootScope.headMenu = 'menu';

        //... Toggle Left Menu ...
        $rootScope.togLeftMenu = TogLeftMenu;
        function TogLeftMenu(){
            $rootScope.showFullLeftMenu = !$rootScope.showFullLeftMenu;
            if(!$rootScope.showFullLeftMenu){
                $rootScope.headMenu = 'menu';
            }
            if($rootScope.showFullLeftMenu){
                $rootScope.headMenu = 'close';
            }
        }

        /******************************** Menu Selection *************************************/
        $scope.menuOptionList = [];
        $scope.menuOptions = ['Home','About Me','Transport Services Overview','Technology Overview','Skills Overview','Twitter Feed','More'];
        for(let a = 0; a < $scope.menuOptions.length; a++){
            $scope.menuOptionList.push({
                id: a,
                title: $scope.menuOptions[a]
            });
        }

        //... Call Page Change from Directive ...
        $rootScope.shiftPafe = ShiftPage;
        function ShiftPage(newPage, meth){
            $scope.selectDispPage(newPage, meth);
        }
        //... Select Page To Display ...
        $rootScope.pageAnimDir = 'up';
        $rootScope.curPage = 0;
        $rootScope.selectedPage = 0;
        $rootScope.dispCurPageTitle = true;
        //... Set Page Transition Variables ...
        $scope.selectDispPage = function(selID, meth){
            let remClass = '',
                addClass = '',
                item;
            if((selID < $rootScope.curPage) && ($rootScope.pageAnimDir !== 'up')){
                item = document.getElementById("mainPage");
                remClass = 'changeUP';
                addClass = 'changeDOWN';
                item.classList.add(addClass);
                item.classList.remove(remClass);
                $rootScope.pageAnimDir = 'up';
            }
            else if((selID > $rootScope.curPage) && ($rootScope.pageAnimDir === 'up')){
                item = document.getElementById("mainPage");
                remClass = 'changeDOWN';
                addClass = 'changeUP';
                item.classList.add(addClass);
                item.classList.remove(remClass);
                $rootScope.pageAnimDir = 'down';
            }
            changePage(selID, meth);
        };

        //... Execute Page transition ...
        function changePage(selID, meth){
            if((meth !== 'mouse') && (meth !== 'touch')){
                var docElm = document.documentElement;
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen();
                } else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen();
                } else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen();
                } else if (docElm.msRequestFullscreen) {
                    docElm.msRequestFullscreen();
                }
            }
            $rootScope.dispCurPageTitle = false;
            $rootScope.selectedPage = selID;
            $rootScope.showFullLeftMenu = false;
            $rootScope.headMenu = 'menu';
            $rootScope.curPage = selID;
            $timeout(function(){
                $rootScope.dispCurPageTitle = true;
            }, 10);
            //... Remember input values after scroll ...
            if($rootScope.curPage === 0){
                resetMainPage();
            }
        }

        function resetMainPage(){
            $scope.siteOrStreet = orStr;
            $scope.siteOrCity = orCity;
            $scope.siteOrProv = orProv;
            $scope.siteOrPost = orPost;
            $scope.siteDeStreet = deStr;
            $scope.siteDeCity = deCity;
            $scope.siteDeProv = deProv;
            $scope.siteDePost = dePost;
            listLength = 1;
            lastListId = 0;
            //... List of items to quote ...
            $scope.mainQuoteItemList = [
                {
                    listId: lastListId,
                    id: lastListId,
                    descript: '',
                    hs: '',
                    len: '',
                    wid: '',
                    hei: '',
                    wei: '',
                    val: '',
                    qty: ''
                }
            ];
        }



        /******************************** Main Page *************************************/
        $rootScope.miniLoggedIn = false;
        $scope.actPhase = 1;

        //... Next Phase ...
        $scope.toNextPhase = ToNextPhase;
        function ToNextPhase(){
            if(($scope.actPhase === 1 && $scope.validStepOne) || ($scope.actPhase === 2 && $scope.validStepTwo && !$rootScope.miniLoggedIn) || ($scope.actPhase === 4 && validStepFour) || ($scope.actPhase === 5) && (payTerms)){
                $scope.hidePhase = true;
                $scope.actPhase++;
                $timeout(function(){
                    $scope.hidePhase = false;
                    retestValid();
                },300);
            }
            else if(($scope.actPhase === 2 && $scope.validStepTwo && $rootScope.miniLoggedIn) || ($scope.actPhase === 3 && isValidCont)){
                $scope.qtPop = 0;
                togQteSumPop();
            }else if(($scope.actPhase === 5) && (!payTerms)){
                $scope.qtPop = 2;
                togQteSumPop();
            }
        }
        //... Previous Phase ...
        $scope.toPrevPhase = ToPrevPhase;
        function ToPrevPhase(){
            if($scope.actPhase === 4){
                $scope.hidePhase = true;
                $scope.actPhase = 1;
                $timeout(function(){
                    $scope.hidePhase = false;
                    retestValid();
                },300);
            }
            else if(($scope.actPhase === 6) && ($scope.sixStep > 1)){
                if(!$scope.paymentLoading){
                    $scope.sixStep--;
                }
            }
            else if($scope.actPhase > 1){
                $scope.hidePhase = true;
                $scope.actPhase--;
                $timeout(function(){
                    $scope.hidePhase = false;
                    retestValid();
                },300);
            }
        }
        //... Retest if form is valid ...
        function retestValid(){
            $scope.validStep = false;
            if($scope.actPhase === 1){
                testForm();
            }
            if($scope.actPhase === 2){
                testShipmentInfo();
            }
            if($scope.actPhase === 3){
                $scope.validStep = isValidCont;
            }
            if($scope.actPhase === 4){
                ($scope.quoteOfferList[0].car !== undefined) ? $scope.validStep = validStepFour = true : $scope.validStep = validStepFour = false;
            }
            if($scope.actPhase === 5){
                payTerms = false;
                $scope.validStep = true;
            }
        }

        /******************************** Phase 1 *************************************/
        $scope.possibleQuoteContin = false;
        let quoteToContin = '';
        //... Enter Quote Number ...
        $scope.checkQN = function(txt){
            quoteToContin = txt;
            $scope.possibleQuoteContin = !((quoteToContin === '') || (quoteToContin === undefined));
        };

        $scope.phse1SearchMsg = '';
        let shipmentResults = [];
        //... Search for Shipment ID ...
        $scope.procPrevShipID = ProcPrevShipID;
        function ProcPrevShipID(){
            let action = 'search';
            if($scope.possibleQuoteContin){
                $rootScope.loading = true;
                $http({
                    url: 'app-services/manageLogistics.php',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: 'act='+action+'&shipID='+quoteToContin
                }).then(function(response) {
                        if(response.data[0].status === 'DB Problem') {
                            console.log('DB Problem');
                            $rootScope.loading = false;
                        }
                        else if(response.data[0][0].status.includes('No')) {
                            console.log('No Shipment Found');
                            setPhOneSearchMsg('No shipment found with this ID.');
                            $rootScope.loading = false;
                        }
                        else if(response.data[0][0].status.includes('Yes')) {
                            console.log('Shipment Found');
                            shipmentResults = response.data;
                            readyShipmentDetails();
                            $rootScope.loading = false;
                        }
                    },
                    function(){
                        console.log('Unknown error');
                        $rootScope.loading = false;
                    });
            }
        }

        //... Set Search Message ...
        function setPhOneSearchMsg(txt){
            $scope.phse1SearchMsg = txt;
            $timeout(function(){
                $scope.phse1SearchMsg = '';
            },3000);
        }

        //... Sort data to send to phase 4 ...
        let searchProcessed = [];
        $scope.quoteOfferList = [];
        function readyShipmentDetails(){
            //... Unit of Measure ...
            let v, m = '';
            if(shipmentResults[0][0].unit === 'Metric'){
                m = 'kg';
                v = 'cm';
            }else{
                m = 'lbs';
                v = 'inch';
            }
            //... Calculate Progress ...
            let statusInd = '', //... Indicator Dot (early, on time, late)
                curDte = '',    //... Current Date ...
                endD = '',      //... Delivery Date ...
                strtD = '',     //... Pickup Date ...
                curProg = '0',
                tt = '0',
                newStrt = '',
                newEnd = '',
                newStat = 'OnTime';
            if((shipmentResults[0][0].listType === 'Ship') && (shipmentResults[0][0].setTransTime !== null)){
                //... Original Transit Time ...
                tt = parseInt(shipmentResults[0][0].setTransTime);
                var tmpStartD = [],
                    tmpEndD = [];
                //... Get Pickup Date Vars ...
                if(shipmentResults[0][0].datePickup.includes('-') === true){
                    tmpStartD = shipmentResults[0][0].datePickup.split("-");
                    newStrt = new Date(tmpStartD[0], (tmpStartD[1] - 1), tmpStartD[2]);
                    strtD = moment(newStrt, 'YYYY MM DD');
                }
                //... Get Delivery Date Vars ...
                if(shipmentResults[0][0].dateDeliv.includes('-') === true){
                    tmpEndD = shipmentResults[0][0].dateDeliv.split("-");
                    newEnd = new Date(tmpEndD[0], (tmpEndD[1] - 1), tmpEndD[2]);
                    endD = moment(newEnd, 'YYYY MM DD');
                }
                curDte = moment();
                //... Difference Between Current Date and Pickup Date ...
                curProg = curDte.diff(strtD, 'days');
                //... Difference Between Delivery Date and Start Date ...
                statusInd = endD.diff(strtD, 'days');

                //... If Earlier ETA ...
                if(parseInt(statusInd) < parseInt(tt)){
                    newStat = 'Early';
                }
                //... If On Time ETA ...
                else if(parseInt(statusInd) === parseInt(tt)){
                    newStat = 'OnTime';
                }
                //... If Late ETA ...
                else if(parseInt(statusInd) > parseInt(tt)){
                    newStat = 'Late';
                }

                //... Calculate Current Progress ...
                curProg = (parseFloat(curProg) / parseFloat(statusInd));
                curProg = (curProg * 100);
                if(curProg > 100){
                    curProg = 100;
                }
                if(curProg < 0){
                    curProg = 0;
                }
            }
            //... Set data ...
            searchProcessed = [
                {
                    listID: 0,
                    dbId: shipmentResults[0][0].dbId,
                    id: shipmentResults[0][0].id,
                    listType: shipmentResults[0][0].listType,
                    typeStat: shipmentResults[0][0].typeStat,
                    descript: shipmentResults[0][0].descript,
                    company: shipmentResults[0][0].company,
                    user: shipmentResults[0][0].user,
                    dateCreate: shipmentResults[0][0].dateCreate,
                    dateReady: shipmentResults[0][0].dateReady,
                    dateBooked: shipmentResults[0][0].dateBooked,
                    validTill: shipmentResults[0][0].validTill,
                    servType: shipmentResults[0][0].servType,
                    inco: shipmentResults[0][0].inco,
                    direction: shipmentResults[0][0].direction,
                    addrFrom: shipmentResults[0][0].addrFrom,
                    addrTo: shipmentResults[0][0].addrTo,
                    vol: shipmentResults[0][0].vol,
                    weight: shipmentResults[0][0].weight,
                    v: v,
                    m: m,
                    countryFrom: shipmentResults[0][0].countryFrom,
                    countryTo: shipmentResults[0][0].countryTo,
                    datePickup: shipmentResults[0][0].datePickup,
                    dateDeliv: shipmentResults[0][0].dateDeliv,
                    progres: newStat,
                    itemCnt: shipmentResults[0][0].itemCnt,
                    amount: shipmentResults[0][0].amount,
                    curr: shipmentResults[0][0].curr,
                    chosen: shipmentResults[0][0].chosen,
                    docReq: shipmentResults[0][0].docReq,
                    docProv: shipmentResults[0][0].docProv,
                    itemListIco: 'list',
                    reqType: shipmentResults[0][0].reqType,
                    accMan: shipmentResults[0][0].accMan,
                    qCar: shipmentResults[0][0].qCar,
                    qQuoteNo: shipmentResults[0][0].qQuoteNo,
                    qTransTime: shipmentResults[0][0].qTransTime,
                    qServ: shipmentResults[0][0].qServ,
                    qOrChrg: shipmentResults[0][0].qOrChrg,
                    qMainChrg: shipmentResults[0][0].qMainChrg,
                    qDesChrg: shipmentResults[0][0].qDesChrg,
                    qCustChrg: shipmentResults[0][0].qCustChrg,
                    qICD: shipmentResults[0][0].qICD,
                    qCVD: shipmentResults[0][0].qCVD,
                    qVAT: shipmentResults[0][0].qVAT,
                    qExVat: shipmentResults[0][0].qExVat,
                    qInVat: shipmentResults[0][0].qInVat,
                    qCurrency: shipmentResults[0][0].qCurrency,
                    setTransTime: shipmentResults[0][0].setTransTime,
                    contactMail: shipmentResults[0][0].contactMail,
                    progPerc: Math.trunc(curProg)
                }
            ];
            //... Sort Quotes For Logistics To Select ...
            $scope.quoteOfferList = [];
            let tmpList = [];
            if((searchProcessed[0].qCar === null) || (searchProcessed[0].qCar === 'null') || (searchProcessed[0].qCar === '') || (searchProcessed[0].qCar === undefined) || (searchProcessed[0].qCar === 'undefined')){
                $scope.quoteOfferList[0] = [];
            }
            else if(searchProcessed[0].qCar.includes(',') === true){
                var tmpCarriers = searchProcessed[0].qCar.split(",");
                var tmpQuoteNums = searchProcessed[0].qQuoteNo.split(",");
                var tmpTransTimes = searchProcessed[0].qTransTime.split(",");
                var tmpServices = searchProcessed[0].qServ.split(",");
                var tmpOrChrges = searchProcessed[0].qOrChrg.split(",");
                var tmpMainChrges = searchProcessed[0].qMainChrg.split(",");
                var tmpDesChrges = searchProcessed[0].qDesChrg.split(",");
                var tmpCustChrges = searchProcessed[0].qCustChrg.split(",");
                var tmpICD = searchProcessed[0].qICD.split(",");
                var tmpCVD = searchProcessed[0].qCVD.split(",");
                var tmpVAT = searchProcessed[0].qVAT.split(",");
                var tmpExVat = searchProcessed[0].qExVat.split(",");
                var tmpInVat = searchProcessed[0].qInVat.split(",");
                var tmpCurr = searchProcessed[0].qCurrency.split(",");

                var cnt = 0;
                for(let b = 0; b < tmpCarriers.length; b++){
                    if(tmpCarriers[b] !== 'null'){
                        tmpList.push({
                            id: cnt,
                            shipID: searchProcessed[0].id,
                            car: tmpCarriers[b],
                            qNo: tmpQuoteNums[b],
                            tranT: tmpTransTimes[b],
                            serv: tmpServices[b],
                            orChrg: tmpOrChrges[b],
                            mainChrg: tmpMainChrges[b],
                            desChrg: tmpDesChrges[b],
                            custChrg: tmpCustChrges[b],
                            icd: tmpICD[b],
                            cvd: tmpCVD[b],
                            vat: tmpVAT[b],
                            exVat: tmpExVat[b],
                            inVat: tmpInVat[b],
                            curr: tmpCurr[b],
                            adrFr: searchProcessed[0].addrFrom,
                            countFr: searchProcessed[0].countryFrom,
                            adrTo: searchProcessed[0].addrTo,
                            countTo: searchProcessed[0].countryTo,
                            vol: searchProcessed[0].vol,
                            wei: searchProcessed[0].weight,
                            m: searchProcessed[0].m,
                            v: searchProcessed[0].v
                        });
                        $scope.quoteOfferList.push(tmpList[cnt]);
                        cnt++;
                    }
                }
                //$scope.quoteOfferList.push(tmpList);
            }
            else{
                $scope.quoteOfferList[0] = [];
            }

            //... Go to required phase ...
            $scope.hidePhase = true;
            if(searchProcessed[0].listType === 'Ship'){
                $scope.actPhase = 7;

            }else if(searchProcessed[0].listType === 'Quote'){
                if($scope.quoteOfferList[0].length > 0){
                    readyPayment();
                }
                //... Go To Phase ...
                $scope.actPhase = 4;
                ($scope.quoteOfferList[0].car !== undefined) ? $scope.validStep = validStepFour = true : $scope.validStep = validStepFour = false;
            }
            $log.warn(searchProcessed[0].listType);
            $timeout(function(){
                $scope.hidePhase = false;
            },300);
        }

        //... Origin / Destination Location ...
        $scope.oLoc = 'Origin Location';
        $scope.dLoc = 'Destination Location';

        //... Swap Locations ...
        let locationOrder = $scope.swapLocs;
        $scope.swapLocations = SwapLocations;
        function SwapLocations(){
            $scope.swapLocs = !$scope.swapLocs;
            locationOrder = $scope.swapLocs;
        }

        //... Step indicator ...
        $scope.curStep = '1';

        //... Country list ...
        $scope.countries = [];
        let ffg = 'Afghanistan 93 AF;Albania 355 AL;Algeria 213 DZ;Angola 244 AO;Anguilla 1-264 AI;Antarctica 672 AQ;Antigua_and_Barbuda 1-268 AG;Argentina 54 AR;Armenia 374 AM;Aruba 297 AW;Australia 61 AU;Austria 43 AT;Bahamas 1-242 BS;Bangladesh 880 BD;Barbados 1-246 BB;Belarus 375 BY;Belgium 32 BE;Belize 501 BZ;Bermuda 1-441 BM;Bolivia 591 BO;Botswana 267 BW;Brazil 55 BR;British_Indian_Ocean_Territory 246 IO;British_Virgin_Islands 1-284 VG;\n' +
            'Bulgaria 359 BG;Burundi 257 BI;Cambodia 855 KH;Cameroon 237 CM;Canada 1 CA;Cape_Verde 238 CV;Cayman_Islands 1-345 KY;Chad 235 TD;Chile 56 CL;China 86 CN;Christmas_Island 61 CX;Cocos_Islands 61 CC;Colombia 57 CO;Cook_Islands 682 CK;Costa_Rica 506 CR;Croatia 385 HR;Cuba 53 CU;Cyprus 357 CY;Czech_Republic 420 CZ;Congo 243 CD;Denmark 45 DK;Ecuador 593 EC;' +
            'Egypt 20 EG;El_Salvador 503 SV;Estonia 372 EE;Ethiopia 251 ET;Falkland_Islands 500 FK;Faroe_Islands 298 FO;Fiji 679 FJ;Finland 358 FI;France 33 FR;Gabon 241 GA;Gambia 220 GM;Georgia 995 GE;Germany 49 DE;Ghana 233 GH;Gibraltar 350 GI;Greece 30 GR;Greenland 299 GL;Guam 1-671 GU;Guatemala 502 GT;Guinea 224 GN;Haiti 509 HT;Honduras 504 HN;Hong Kong 852 HK;Hungary 36 HU;Iceland 354 IS;India 91 IN;Indonesia 62 ID;Iran 98 IR;' +
            'Iraq 964 IQ;Ireland 353 IE;Isle_of_Man 44-1624 IM;Israel 972 IL;Italy 39 IT;Jamaica 1-876 JM;Japan 81 JP;Kazakhstan 7 KZ;Kenya 254 KE;Kuwait 965 KW;Latvia 371 LV;Lebanon 961 LB;Lesotho 266 LS;Libya 218 LY;Lithuania 370 LT;Macau 853 MO;Macedonia 389 MK;Madagascar 261 MG;Malawi 265 MW;Malaysia 60 MY;Maldives 960 MV;Mali 223 ML;Mauritius 230 MU;' +
            'Mexico 52 MX;Micronesia 691 FM;Moldova 373 MD;Monaco 377 MC;Mongolia 976 MN;Montenegro 382 ME;Montserrat 1-664 MS;Morocco 212 MA;Mozambique 258 MZ;Namibia 264 NA;Nepal 977 NP;Netherlands 31 NL;New_Caledonia 687 NC;New_Zealand 64 NZ;Nicaragua 505 NI;Nigeria 234 NG;North_Korea 850 KP;Norway 47 NO;Pakistan 92 PK;Palau 680 PW;Panama 507 PA;Papua_New_Guinea 675 PG;Paraguay 595 PY;Peru 51 PE;Philippines 63 PH;' +
            'Poland 48 PL;Portugal 351 PT;Qatar 974 QA;Republic_of_the_Congo 242 CG;Romania 40 RO;Russia 7 RU;Rwanda 250 RW;Saint_Helena 290 SH;Samoa 685 WS;San_Marino 378 SM;Saudi_Arabia 966 SA;Senegal 221 SN;Serbia 381 RS;Seychelles 248 SC;Singapore 65 SG;Slovakia 421 SK;Slovenia 386 SI;' +
            'Somalia 252 SO;South_Africa 27 ZA;South_Korea 82 KR;South_Sudan 211 SS;Spain 34 ES;Sri_Lanka 94 LK;Sudan 249 SD;Suriname 597 SR;Swaziland 268 SZ;Sweden 46 SE;Switzerland 41 CH;Syria 963 SY;Taiwan 886 TW;Tajikistan 992 TJ;Tanzania 255 TZ;Thailand 66 TH;Tonga 676 TO;Trinidad_and_Tobago 1-868 TT;Turkey 90 TR;U.S._Virgin_Islands 1-340 VI;Uganda 256 UG;Ukraine 380 UA;United_Arab_Emirates 971 AE;United_Kingdom 44 GB;' +
            'United_States 1 US;Uruguay 598 UY;Uzbekistan 998 UZ;Vanuatu 678 VU;Vatican 379 VA;Venezuela 58 VE;Vietnam 84 VN;Western_Sahara 212 EH;Yemen 967 YE;Zambia 260 ZM;Zimbabwe 263 ZW';
        let countryList = ffg.split(';');
        for(let a = 0; a < countryList.length; a++){
            let cont = countryList[a].split(' ');
            let contNme = '';
            if(cont[0].includes('_')){
                let contNmeFull = cont[0].split('_');
                for(let a = 0; a < contNmeFull.length; a++){
                    contNme += contNmeFull[a] + " ";
                }
            }else{
                contNme = cont[0];
            }
            $scope.countries.push({
                id: a,
                countID: cont[2],
                name: contNme,
                code: cont[1]
            });
        }

        //... Reset focus Vars ...
        $scope.orLocDropArrow = $scope.deLocDropArrow = 'keyboard_arrow_down';
        $scope.orLocDropFocus = false;
        $scope.deLocDropFocus = false;
        $scope.orCountry = $scope.deCountry = 'Country';


        //... Toggle Country Drops ...
        $scope.togOrCoDr = TogOrCoDr;
        function TogOrCoDr(){
            $scope.orCoDr = !$scope.orCoDr;
            if(!$scope.orCoDr){
                $rootScope.miniScroll = false;
                $scope.orLocDropArrow = 'keyboard_arrow_down';
            }else{
                $rootScope.miniScroll = true;
                $scope.orLocDropArrow = 'keyboard_arrow_up';
            }
        }
        $scope.closeOrCoDr = CloseOrCoDr;
        function CloseOrCoDr(){
            $timeout(function(){
                $scope.orCoDr = $rootScope.miniScroll = false;
                $scope.orLocDropArrow = 'keyboard_arrow_down';
            },50)

        }
        $scope.togDeCoDr = TogDeCoDr;
        function TogDeCoDr(){
            $scope.deCoDr = !$scope.deCoDr;
            if(!$scope.deCoDr){
                $rootScope.miniScroll = false;
                $scope.deLocDropArrow = 'keyboard_arrow_down';
            }else{
                $rootScope.miniScroll = true;
                $scope.deLocDropArrow = 'keyboard_arrow_up';
            }
        }
        $scope.closeDeCoDr = CloseDeCoDr;
        function CloseDeCoDr(){
            $timeout(function(){
                $scope.deCoDr = $rootScope.miniScroll = false;
                $scope.deLocDropArrow = 'keyboard_arrow_down';
            },50)
        }

        //... Set new Countries ...
        var orCountry = '';
        var deCountry = '';
        var orCountryCode = '';
        var deCountryCode = '';
        $scope.setNewOrCountry = function(index){
            orCountry = $scope.countries[index].name;
            orCountryCode = $scope.countries[index].countID;
            console.log('Origin Country: ' + orCountry);
            $scope.orCountry = orCountry;
            testForm();
        };
        $scope.setNewDeCountry = function(index){
            deCountry = $scope.countries[index].name;
            deCountryCode = $scope.countries[index].countID;
            console.log('Destination Country: ' + deCountry);
            $scope.deCountry = deCountry;
            testForm();
        };

        //... Change Origin Street ...
        var orStr = '';
        $scope.setOriginStreet = function(txt){
            orStr = txt;
            testForm();
        };
        //... Change Origin City ...
        var orCity = '';
        $scope.setOriginCity = function(txt){
            orCity = txt;
            testForm();
        };
        //... Change Origin Provice / State ...
        var orProv = '';
        $scope.setOriginProv = function(txt){
            orProv = txt;
            testForm();
        };
        //... Change Origin Post ...
        var orPost = '';
        $scope.setOriginPost = function(txt){
            orPost = txt;
            testForm();
        };
        //... Change Destination Street...
        var deStr = '';
        $scope.setDestStreet = function(txt){
            deStr = txt;
            testForm();
        };
        //... Change Destination City ...
        var deCity = '';
        $scope.setDestCity = function(txt){
            deCity = txt;
            testForm();
        };
        //... Change Destination Province / State ...
        var deProv = '';
        $scope.setDestProv = function(txt){
            deProv = txt;
            testForm();
        };
        //... Change Destination Post ...
        var dePost = '';
        $scope.setDestPost = function(txt){
            dePost = txt;
            testForm();
        };

        function testForm(){
            $scope.validStep = $scope.validStepOne = ((orStr !== '') && (orCity !== '') && (orProv !== '') && (orPost !== '') && (orCountry !== '') && (deCountry !== '') && (deStr !== '') && (deCity !== '') && (deProv !== '') && (dePost !== ''));
        }


        /******************************** Phase 2 *************************************/
        /******** Services List *********/
        $scope.shipServType = [];
        var shipServTypeList = ['Domestic Express','Domestic Economy Express','Domestic Same Day Express','Domestic Sunrise Express','Domestic Saturday / Public Holiday Delivery','International Worldwide Express','International End-of-day Express','International Express 12:00','Priority AirCargo','Express AirCargo','Economy AirCargo','Special AirCargo','Temperature Controlled AirCargo','Ocean LCL','Ocean FCL','Ocean Reefer','Ocean Special','Ocean Bulk','Ocean Out-Of-Guage','Road FTL','Road LTL','Road Specialised','Road ColdChain'];
        for(let lk = 0; lk < shipServTypeList.length; lk++){
            $scope.shipServType.push({
                id: lk,
                title: shipServTypeList[lk]
            });
        }
        /********* Incoterm List ********/
        $scope.incoterms = [];
        var incoTermAbr = ['EXW','FCA','FAS','FOB','CFR','CIF','CPT','CIP','DAT','DAP','DDP'];
        var incoTermTtl = ['Ex Works','Free Carrier','Free Alongside Ship','Free on Board','Cost and Freight','Cost, Insurance, Freight','Carriage Paid To','Carriage & Insurance Paid To','Delivered at Terminal','Delivered at Place','Delivered Duty Paid'];
        for(let er = 0; er < incoTermAbr.length; er++){
            $scope.incoterms.push({
                id: er,
                abr: incoTermAbr[er],
                ttl: incoTermTtl[er]
            });
        }

        //... Set Incoterm ...
        let inco = '';
        $scope.setIncoterm = function(index){
            inco = index;
            $scope.selIncoterm = incoTermTtl[inco];
            testShipmentInfo();
        };

        //... Set Service Type ...
        let serv = '';
        $scope.setService = function(index){
            serv = index;
            $scope.selServ = shipServTypeList[serv];
            testShipmentInfo();
        };

        //... Toggle Service Drop ...
        $scope.servDropArrow = 'arrow_drop_down';
        $scope.togServDrop = TogServDrop;
        function TogServDrop(){
            $scope.servDr = !$scope.servDr;
            if(!$scope.servDr){
                $rootScope.miniScroll = false;
                $scope.servDropArrow = 'arrow_drop_down';
            }else{
                $rootScope.miniScroll = true;
                $scope.servDropArrow = 'arrow_drop_up';
            }
        }
        $scope.closeServDrop = CloseServDrop;
        function CloseServDrop(){
            $timeout(function(){
                $scope.servDr = $rootScope.miniScroll = false;
                $scope.servDropArrow = 'arrow_drop_down';
            },50)
        }
        //... Toggle Incoterm Drop ...
        $scope.incoDropArrow = 'arrow_drop_down';
        $scope.togIncoDrop = TogIncoDrop;
        function TogIncoDrop(){
            $scope.incoDr = !$scope.incoDr;
            if(!$scope.incoDr){
                $rootScope.miniScroll = false;
                $scope.incoDropArrow = 'arrow_drop_down';
            }else{
                $rootScope.miniScroll = true;
                $scope.incoDropArrow = 'arrow_drop_up';
            }
        }
        $scope.closeIncoDrop = CloseIncoDrop;
        function CloseIncoDrop(){
            $timeout(function(){
                $scope.incoDr = $rootScope.miniScroll = false;
                $scope.incoDropArrow = 'arrow_drop_down';
            },50)
        }

        $scope.mainQuoteItemUnit = 'Metric';
        $scope.itemWeightUnit = 'kg';
        $scope.itemDimensUnit = 'cm';
        let dbUnit = 1;
        $scope.itemInfoCur = 'ZAR';
        $scope.selServ = 'Service Type';
        $scope.selIncoterm = 'Incoterm';

        //... Toggle Unit Switch ...
        $scope.togMainQuoteItemUnit = TogMainQuoteItemUnit;
        function TogMainQuoteItemUnit(){
            if($scope.mainQuoteItemUnit === 'Metric'){
                $scope.mainQuoteItemUnit = 'Imperial';
                $scope.itemWeightUnit = 'lbs';
                $scope.itemDimensUnit = 'inch';
                dbUnit = 0;
            }else{
                $scope.mainQuoteItemUnit = 'Metric';
                $scope.itemWeightUnit = 'kg';
                $scope.itemDimensUnit = 'cm';
                dbUnit = 1;
            }
        }

        //... Currency List ...
        $scope.curList = [];
        let curListTtl = ['EUR','GBP','USD','ZAR'];
        for(let a = 0; a < curListTtl.length; a++){
            $scope.curList.push({
                id: a,
                title: curListTtl[a]
            });
        }
        //... Toggle Other Currency Popup ...
        $scope.togCurPop = TogCurPop;
        function TogCurPop(){
            $scope.showCurPop = !$scope.showCurPop;

        }
        //... Close Other Currency Popup ...
        $scope.closeCurPop = CloseCurPop;
        function CloseCurPop(){
            $rootScope.miniScroll = false;
            $scope.showCurPop = false;
        }
        //... Set New Currency ...
        let curCur = 'ZAR';
        $scope.setCurrency = function(index){
            curCur = $scope.curList[index].title;
            $scope.itemInfoCur = curCur;
            $scope.showCurPop = false;
        };
        //... Mouse Over Cur Pop ...
        $scope.actMiniScrl = ActMiniScrl;
        function ActMiniScrl(){
            $rootScope.miniScroll = true;
        }

        let listLength = 1;
        let lastListId = 0;
        //... List of items to quote ...
        $scope.mainQuoteItemList = [
            {
                descript: '',
                hs: '',
                len: '',
                wid: '',
                hei: '',
                wei: '',
                val: '',
                qty: ''
            }
        ];

        //... Add item to list ...
        $scope.addToList = AddToList;
        function AddToList(){
            if(($scope.mainQuoteItemList[listLength - 1].descript !== '') && ($scope.mainQuoteItemList[listLength - 1].hs !== '') && ($scope.mainQuoteItemList[listLength - 1].len !== '') && ($scope.mainQuoteItemList[listLength - 1].wid !== '') && ($scope.mainQuoteItemList[listLength - 1].hei !== '') && ($scope.mainQuoteItemList[listLength - 1].wei !== '') && ($scope.mainQuoteItemList[listLength - 1].val !== '') && ($scope.mainQuoteItemList[listLength - 1].qty !== '')){
                listLength++;
                lastListId++;
                $scope.mainQuoteItemList.push({
                    descript: '',
                    hs: '',
                    len: '',
                    wid: '',
                    hei: '',
                    wei: '',
                    val: '',
                    qty: ''
                });
                $rootScope.miniScroll = true;
            }
            else{
                $scope.newItemEr = true;
                $timeout(function(){
                    $scope.newItemEr = false;
                },3000);
            }
        }

        //... Remove item from list ...
        $scope.remItem = function(listID){
            for(var r = 0; r < $scope.mainQuoteItemList.length; r++){
                if(listID === $scope.mainQuoteItemList[r].listId){
                    $scope.mainQuoteItemList.splice(r, 1);
                    listLength--;
                }
            }
        };

        //... Mini Scroll if mouse over list ...
        $scope.activMiniScrl = ActivMiniScrl;
        function ActivMiniScrl(){
            if($scope.mainQuoteItemList.length > 1){
                $rootScope.miniScroll = true;
            }
        }
        //... No Mini Scroll if mouse not over list ...
        $scope.deactMiniScrl = DeactMiniScrl;
        function DeactMiniScrl(){
            $rootScope.miniScroll = false;
        }

        //... Change Description ...
        $scope.setDescript = function(index, txt){
            $scope.mainQuoteItemList[index].descript = txt;
            testShipmentInfo();
        };
        //... Change HS-Code ...
        $scope.setHsCode = function(index, txt){
            $scope.mainQuoteItemList[index].hs = txt;
            testShipmentInfo();
        };
        //... Change Length ...
        $scope.setLen = function(index, txt){
            $scope.mainQuoteItemList[index].len = txt;
            testShipmentInfo();
        };
        //... Change Width ...
        $scope.setWid = function(index, txt){
            $scope.mainQuoteItemList[index].wid = txt;
            testShipmentInfo();
        };
        //... Change Height ...
        $scope.setHei = function(index, txt){
            $scope.mainQuoteItemList[index].hei = txt;
            testShipmentInfo();
        };
        //... Change Weight ...
        $scope.setWei = function(index, txt){
            $scope.mainQuoteItemList[index].wei = txt;
            testShipmentInfo();
        };
        //... Change Value ...
        $scope.setVal = function(index, txt){
            $scope.mainQuoteItemList[index].val = txt;
            testShipmentInfo();
        };
        //... Change Quantity ...
        $scope.setQty = function(index, txt){
            $scope.mainQuoteItemList[index].qty = txt;
            testShipmentInfo();
        };

        //... Test Form Validity ...
        function testShipmentInfo(){
            $scope.validStep = $scope.validStepTwo = (($scope.mainQuoteItemList[listLength - 1].descript !== '') && ($scope.mainQuoteItemList[listLength - 1].hs !== '') && ($scope.mainQuoteItemList[listLength - 1].len !== '') && ($scope.mainQuoteItemList[listLength - 1].wid !== '') && ($scope.mainQuoteItemList[listLength - 1].hei !== '') && ($scope.mainQuoteItemList[listLength - 1].wei !== '') && ($scope.mainQuoteItemList[listLength - 1].val !== '') && ($scope.mainQuoteItemList[listLength - 1].qty !== '') && (inco !== '') && (serv !== ''));
        }

        /******************************** Phase 3 *************************************/
        $scope.nmeIcon = 'close';
        $scope.mailIcon = 'close';
        $scope.telIcon = 'close';
        //... Test Quote Form Validity ...
        $scope.qtResp = '';
        let qtOne = false,
            qtTwo = false,
            qtNme = '',
            qtMai = '',
            qtTel = '';
        let isValidCont = false;
        $scope.isValidNme = false;
        $scope.isValidMail = false;
        $scope.validateQuote = function(type, data){
            $scope.qtResp = '';
            let unme = /^[0-9a-zA-Z ,]+$/;
            let unum = /^[0-9]+$/;
            let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if((type === 'name')){
                qtNme = data;
                (data.match(unme) && data !== '' && data !== undefined) ? qtOne = true : qtOne = false;
                qtOne ? ($scope.nmeIcon = 'check') : ($scope.nmeIcon = 'close');
                qtOne ? ($scope.isValidNme = true) : ($scope.isValidNme = false);
                //$scope.isValidNme = qtOne;
            }
            else if((type === 'mail')){
                qtMai = data;
                (data.match(mail) && data !== '' && data !== undefined) ? qtTwo = true : qtTwo = false;
                qtTwo ? ($scope.mailIcon = 'check') : ($scope.mailIcon = 'close');
                qtTwo ? ($scope.isValidMail = true) : ($scope.isValidMail = false);
                //$scope.isValidMail = qtTwo;
            }
            else if((type === 'num')){
                if(data.match(unum) && data !== '' && data !== undefined){
                    qtTel = data
                }
            }

            (qtOne && qtTwo) ? isValidCont = true : isValidCont = false;
            $scope.validStep = isValidCont;
        };

        /******************************** Phase 4 *************************************/
        $scope.actOffer = 0;
        //$scope.quoteOfferList = [];

        //... Move List ...
        $scope.moveList = function(act){
            if(act === 'pos'){
                if($scope.actOffer < ($scope.quoteOfferList.length - 1)){
                    $scope.actOffer++;
                    readyPayment();
                }
            }else if(act === 'neg'){
                if($scope.actOffer > 0){
                    $scope.actOffer--;
                    readyPayment();
                }
            }
        };

        let validStepFour = false;
        //... Move List on select ...
        $scope.selList = function(index){
            if(index > $scope.actOffer){
                $scope.actOffer++;
            }else if(index < $scope.actOffer){
                $scope.actOffer--;
            }
            readyPayment();
            $scope.validStep = validStepFour = true;
        };

        //... Prepare Payment Values ...
        function readyPayment(){
            //... Seperate String values to calculate financial totals ...
            $scope.dispOrChrg = $scope.dispMainChrg = $scope.dispDesChrg = $scope.dispCustChrg = $scope.dispVatChrg = 0;
            if($scope.quoteOfferList[$scope.actOffer].orChrg.includes('-') === true){
                let sep = $scope.quoteOfferList[$scope.actOffer].orChrg.split("-");
                $scope.dispOrChrg = parseFloat(sep[1]).toFixed(2);
            }
            if($scope.quoteOfferList[$scope.actOffer].mainChrg.includes('-') === true){
                let sep = $scope.quoteOfferList[$scope.actOffer].mainChrg.split("-");
                $scope.dispMainChrg = parseFloat(sep[1]).toFixed(2);
            }
            if($scope.quoteOfferList[$scope.actOffer].desChrg.includes('-') === true){
                let sep = $scope.quoteOfferList[$scope.actOffer].desChrg.split("-");
                $scope.dispDesChrg = parseFloat(sep[1]).toFixed(2);
            }
            if($scope.quoteOfferList[$scope.actOffer].custChrg.includes('-') === true){
                let sep = $scope.quoteOfferList[$scope.actOffer].custChrg.split("-");
                $scope.dispCustChrg = parseFloat(sep[1]).toFixed(2);
            }
            if($scope.quoteOfferList[$scope.actOffer].icd.includes('-') === true){
                let sep = $scope.quoteOfferList[$scope.actOffer].icd.split("-");
                $scope.dispVatChrg += parseFloat(sep[3]);
                sep = $scope.quoteOfferList[$scope.actOffer].cvd.split("-");
                $scope.dispVatChrg += parseFloat(sep[3]);
                sep = $scope.quoteOfferList[$scope.actOffer].vat.split("-");
                $scope.dispVatChrg += parseFloat(sep[3]).toFixed(2);
            }
        }

        /******************************** Phase 5 *************************************/
        $scope.payTerms = 'By clicking on \'Accept\', you confirm all the details for the quote. Any added charges due to incorrect data will be added to the total.';

        //... Ready Date for payment ...
        var tmpNowDte = null, tmpValidDte = null, tmpDteComp = null;
        var tmpPuDateY = '', tmpPuDateM = '', tmpPuDateD = '';
        function readyDates(){
            $scope.sixStep = 1;
            $scope.validPuDate = false;
            document.getElementById('bookPickUpDateY').value = document.getElementById('bookPickUpDateM').value = document.getElementById('bookPickUpDateD').value = '';
            $scope.QuotePuDateMsg = '';
            tmpPuDateY = tmpPuDateM = tmpPuDateD = '';

            tmpNowDte = moment(new Date());
            $scope.frmDte = tmpNowDte.add(1,'days').format('YYYY-MM-DD');
            tmpNowDte = moment(new Date());

            tmpValidDte = moment(searchProcessed[0].validTill);
            $scope.dispTmpvalidTill = tmpValidDte.format('YYYY-MM-DD');
            tmpValidDte = tmpValidDte.add(1,'days');
        }

        /******************************** Phase 6 *************************************/
        $scope.sixStep = 1;
        //... Set Pickup Date ...
        $scope.QuotePuDateMsg = '';
        $scope.validPuDate = false;
        $scope.setPickUpDate = function(act, data){
            $scope.QuotePuDateMsg = '';
            if(act === 'Y'){
                tmpPuDateY = data;
            }else if(act === 'M'){
                tmpPuDateM = data;
            }else if(act === 'D'){
                tmpPuDateD = data;
            }
            tmpDteComp = new Date(parseInt(tmpPuDateY), parseInt(tmpPuDateM - 1), parseInt(tmpPuDateD));
            tmpDteComp = moment(tmpDteComp);
            if((tmpDteComp.isBetween(tmpNowDte, tmpValidDte))){
                $scope.validPuDate = true;
                $scope.QuotePuDateMsg = 'Valid';
            }else{
                $scope.validPuDate = false;
                $scope.QuotePuDateMsg = 'Error\r\nInvalid Date';
            }
        };

        //... Approve Pickup Date Button ...
        $scope.showPaymentResponsePage = false;
        $scope.paymentResponseHead = 'Please Wait';
        $scope.paymentResponseInfo = 'Checking for response from PayFast.';
        let payFastCur = null,
            shipID = null,
            puDate = null,
            ttime = null,
            deDate = null;
        let selItemName = '';

        //... Payment variables ...
        $scope.payMethList = [];
        $scope.payCardList = [];
        var payMethList = ['Debit Card','Credit Card', 'EFT'];
        var payMethListAbr = ['DB','CD',''];
        for(let a = 0; a < payMethList.length; a++){
            $scope.payMethList.push({
                ttl: payMethList[a],
                code: payMethListAbr[a]
            });
        }
        var payCardList = ['Visa','Mastercard','American Express'];
        var payCardListAbr = ['VISA','MASTER','AMEX'];
        var payCardListImg = ['Visa-web.png','Mastercard-web.png','American-Express-web.png'];
        for(let a = 0; a < payCardList.length; a++){
            $scope.payCardList.push({
                ttl: payCardList[a],
                code: payCardListAbr[a],
                img: payCardListImg[a]
            });
        }
        $scope.payMeth = 'Debit Card';
        $scope.payCard = 'Visa';
        $scope.cardImg = 'Visa-web.png';
        $scope.payMethErr = '';


        //... Go to pay form ...
        $scope.toPay = ToPay;
        function ToPay(){
            if($scope.validPuDate){
                $scope.sixStep = 2;
            }
        }


        //... Open Payment Method ...
        $scope.togPayMeth = TogPayMeth;
        function TogPayMeth(){
            if(!$scope.isOpenPayMeth){
                $scope.isOpenPayMeth = !$scope.isOpenPayMeth;
            }
        }
        //... Close Payment Method ...
        $scope.closePayMeth = ClosePayMeth;
        function ClosePayMeth(){
            $scope.isOpenPayMeth = false;
        }
        //... Open Card Type ...
        $scope.togPayCard = TogPayCard;
        function TogPayCard(){
            if(!$scope.isOpenPayCard){
                $scope.isOpenPayCard = !$scope.isOpenPayCard;
            }
        }
        //... Close Card Type ...
        $scope.closePayCard = ClosePayCard;
        function ClosePayCard(){
            $scope.isOpenPayCard = false;
        }
        //... Select Payment Method ...
        let PM = 'DB';
        $scope.newPayMeth = function(index){
            $scope.payMeth = $scope.payMethList[index].ttl;
            if($scope.payMeth === 'Credit Card'){
                PM = 'CD';
                //... Copy&Pay ...
                //loadjscssfile("Components/Interface/Logistics.js?V0.1.5", "js"); //dynamically load and add this .js file
            }else if($scope.payMeth === 'Debit Card'){
                PM = 'DB';
            }else if($scope.payMeth === 'EFT'){
                PM = '';
            }
        };
        //... Select Card Type ...
        let CT = 'VISA';
        $scope.newPayCard = function(index){
            $scope.payCard = $scope.payCardList[index].ttl;
            $scope.cardImg = $scope.payCardList[index].img;
            CT = $scope.payCardList[index].code;
            clearDebitErr();
        };

        //... Change Card No ...
        let tmpCardNo = '';
        $scope.chPayCardNo = function(txt){
            tmpCardNo = txt;
            clearDebitErr();
        };
        //... Change Card Holder ...
        let tmpCardHol = '';
        $scope.chPayCardHol = function(txt){
            tmpCardHol = txt;
            clearDebitErr();
        };
        //... Change Card Expiry Date ...
        let tmpCardExpY = '';
        let tmpCardExpM = '';
        $scope.chPayCardExp = function(txt, tpe){
            if(tpe === 'Y'){
                tmpCardExpY = txt;
            }else if(tpe === 'M'){
                if((txt !== null) && (txt.toString().length < 2)){
                    tmpCardExpM = '0'+txt.toString();
                }else{
                    tmpCardExpM = txt;
                }
            }
            clearDebitErr();
        };
        //... Change Card CVV ...
        let tmpCardCvv = '';
        $scope.chPayCardCvv = function(txt){
            tmpCardCvv = txt;
            clearDebitErr();
        };
        //... Check Debit Card Validity ...
        $scope.debCardErrFields = '';
        function debitCardValidate(){
            let tmpErr = '';
            if((tmpCardNo === null) || (tmpCardNo === '') || (tmpCardNo.toString().length < 5)){
                tmpErr += '0;';
            }
            if((tmpCardExpY === null) || (tmpCardExpY === '') || (tmpCardExpY.toString().length !== 4)){
                tmpErr += '2;';
            }
            if((tmpCardExpM === null) || (tmpCardExpM === '') || (tmpCardExpM.toString().length < 1) || (tmpCardExpM.toString().length > 2)){
                tmpErr += '1;';
            }
            if((tmpCardCvv === null) || (tmpCardCvv === '') || (tmpCardCvv.toString().length < 3)){
                tmpErr += '3;';
            }
            $scope.debCardErrFields = tmpErr;
            return tmpErr;
        }
        //... Clear Debit Card Errors ...
        function clearDebitErr(){
            $scope.debCardErrFields = '';
            $scope.payMethErr = '';
        }

        //... Pay using debit card ...
        $scope.payDebit = PayDebit;
        function PayDebit(){
            if(debitCardValidate() === ''){
                $scope.paymentLoading = true;
                let action = 'PrepCheckoutB';
                let dta = 'act='+action+'&tot='+$scope.quoteOfferList[$scope.actOffer].inVat+'&cur='+$scope.quoteOfferList[$scope.actOffer].curr+'&pType='+PM+'&pBrand='+CT+'&cardNo='+tmpCardNo.toString()+'&cardHol='+tmpCardHol+'&expM='+tmpCardExpM+'&expY='+tmpCardExpY.toString()+'&cvv='+tmpCardCvv.toString();
                console.log(dta);
                $http({
                    url: 'app-services/PeachPay-index.php',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: dta
                }).then(function(responseOne){
                    console.log(responseOne);
                    $scope.paymentLoading = false;

                },function(){
                    console.log('Unknown error');
                    $scope.paymentLoading = false;
                });


            }else{
                $scope.payMethErr = '** Some fields contain invalid data.';
            }
        }



        $scope.toPayment = ToPayment;
        function ToPayment(){
            if(($scope.validPuDate)){
                $scope.paymentLoading = false;
                $rootScope.loading = true;
                let uniqPayId = $scope.quoteOfferList[$scope.actOffer].id + "" + $scope.quoteOfferList[$scope.actOffer].shipID + "" + $scope.quoteOfferList[$scope.actOffer].qNo;
                shipID = $scope.quoteOfferList[$scope.actOffer].shipID;
                let descript = $scope.quoteOfferList[$scope.actOffer].car + "" + $scope.quoteOfferList[$scope.actOffer].serv;
                payFastCur = currencyConvert.convert($scope.quoteOfferList[$scope.actOffer].curr, 'ZAR');
                console.log($scope.quoteOfferList[$scope.actOffer].curr + " " + payFastCur);
                payFastCur = (parseFloat(payFastCur) * parseFloat($scope.quoteOfferList[$scope.actOffer].inVat));
                puDate = tmpDteComp.format('YYYY-MM-DD');
                ttime = $scope.quoteOfferList[$scope.actOffer].tranT;
                deDate = tmpDteComp.add(parseInt(ttime),'days').format('YYYY-MM-DD');
                descript = descript.replace(/ /g, "");
                selItemName = searchProcessed[0].descript;
                $rootScope.loading = false;
                payFastListening();
                /*$http({
                    url: 'app-services/PayFastMain.php',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: 'a='+payFastCur+'&b='+uniqPayId+'&c='+selItemName+'&d='+descript+'&e='+shipID+'&f='+searchProcessed[0].contactMail
                }).then(function(responseOne){


                    $scope.showPayFastForm = true;
                    $scope.payFastForm = $sce.trustAsHtml(responseOne.data);
                    $timeout(function(){
                        var paymentForm = document.getElementById("payForm");
                        paymentForm.style.display = "none";
                        paymentForm.submit();
                        $scope.sixStep++;
                    },100);

                    $timeout(function(){
                        $rootScope.loading = false;
                    },500);

                    payFastListening();

                },function(){
                    console.log('Unknown error');
                    $rootScope.loading = false;
                });*/
            }
        }

        //... Listen for payfast response ...
        $scope.payFastBackgroundStatus = '';
        let pfcount = 0;
        $scope.hidePayfastRecheck = false;
        $scope.checkOnlyPayfastResponse = payfastRecheck;
        function payfastRecheck(){
            $scope.payFastBackgroundStatus = '';
            $scope.paymentResponseHead = 'Please Wait';
            $scope.paymentResponseInfo = 'Checking for response from PayFast.';
            $scope.sixStep = 3;
            pfcount = 0;
            $scope.hidePayfastRecheck = true;
            payFastListening();
        }
        function payFastListening(){
            //console.log('listening');
            $scope.paymentLoading = true;
            $http({
                url: 'app-services/PayFastListen.php',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: 'a='+payFastCur+'&b='+shipID+'&c='+puDate+'&d='+deDate+'&e='+$scope.quoteOfferList[$scope.actOffer].inVat+'&f='+$scope.quoteOfferList[$scope.actOffer].curr+'&g='+$scope.quoteOfferList[$scope.actOffer].id+'&h='+ttime
            }).then(function(responseOne){
                if(responseOne.data.includes('Complete')){
                    $scope.payFastBackgroundStatus = '';
                    //$scope.paymentResponseHead = 'Success';
                    $scope.paymentResponseHead = 'Take Note';
                    //$scope.paymentResponseInfo = 'Your Payment has been completed successfully!\r\nCheck your emails or notifications for shipment updates, or track the progress in the shipments page.';
                    $scope.paymentResponseInfo = 'The payment process is being upgraded!\r\nPlease try again later.';
                    $scope.paymentLoading = false;
                    $scope.sixStep = 3;
                    $scope.hidePayfastRecheck = true;
                    pfcount = 0;
                }else if(responseOne.data.includes('Error')) {
                    if(pfcount < 100){
                        $timeout(function(){
                            pfcount++;
                            $scope.payFastBackgroundStatus = 'Checking for payfast response. ' + pfcount;
                            payFastListening();
                        },3000);
                    }else{
                        $scope.payFastBackgroundStatus = '';
                        $scope.paymentResponseHead = 'Oops';
                        $scope.paymentResponseInfo = 'Request Timed Out!\r\n' + responseOne.data;
                        $scope.paymentLoading = false;
                        $scope.sixStep = 3;
                        $scope.hidePayfastRecheck = false;
                        pfcount = 0;
                    }
                }else{
                    $scope.payFastBackgroundStatus = '';
                    console.warn(responseOne.data);
                    $scope.paymentResponseHead = 'Oops';
                    $scope.paymentResponseInfo = 'Payment was unsuccessfull.\r\nPlease try again.';
                    $scope.paymentLoading = false;
                    $scope.sixStep = 3;
                    $scope.hidePayfastRecheck = true;
                    pfcount = 0;
                }
            });
        }



        //... Close Payment Popup after Response ...
        $scope.closePaymentSumPop = ClosePaymentSumPop;
        function ClosePaymentSumPop(){
            $scope.actPhase = 1;
            $scope.sixStep = 1;
            $scope.paymentLoading = false;
            $scope.paymentResponseHead = 'Please Wait';
            $scope.paymentResponseInfo = 'Checking for response from PayFast.';
        }

        /******************************** Quote Summary *************************************/
        let quoteName = '',
            quoteMail = '',
            quoteTel = '';
        let adrOneA = orStr,
            adrOneB = orCity,
            adrOneC = orProv,
            adrOneD = orPost,
            adrTwoA = deStr,
            adrTwoB = deCity,
            adrTwoC = deProv,
            adrTwoD = dePost,
            adrOneE = orCountry,
            adrTwoE = deCountry,
            fullAddrOne = orStr + ", " + orCity + ", " + orProv + ", " + orCountry + ", " + orPost,
            fullAddrTwo = deStr + ", " + deCity + ", " + deProv + ", " + deCountry + ", " + dePost;
        let totItem = 0,
            totLen = 0,
            totWid = 0,
            totHei = 0,
            totVol = 0,
            totWei = 0,
            totVal = 0;
        //... Toggle Quote Summary ...
        $scope.closeQteSumPop = togQteSumPop;
        function togQteSumPop(){
            if(!$scope.showQteSumPop){
                $rootScope.loading = true;
                let unitDets = [];

                //... Get Contact Details ...

                if($rootScope.miniLoggedIn){
                    quoteName = $scope.miniName;
                    quoteMail = $scope.miniMail;
                    quoteTel = $scope.miniTel;
                }else{
                    quoteName = qtNme;
                    quoteMail = qtMai;
                    quoteTel = qtTel;
                }

                //... Get Location Orientation ...
                if($scope.swapLocs){
                    adrOneA = deStr;
                    adrOneB = deCity;
                    adrOneC = deProv;
                    adrOneD = dePost;
                    adrTwoA = orStr;
                    adrTwoB = orCity;
                    adrTwoC = orProv;
                    adrTwoD = orPost;
                    adrOneE = deCountry;
                    adrTwoE = orCountry;
                    fullAddrOne = adrOneA + ", " + adrOneB + ", " + adrOneC + ", " + adrOneE + ", " + adrOneD;
                    fullAddrTwo = adrTwoA + ", " + adrTwoB + ", " + adrTwoC + ", " + adrTwoE + ", " + adrTwoD;
                }else{
                    adrOneA = orStr;
                    adrOneB = orCity;
                    adrOneC = orProv;
                    adrOneD = orPost;
                    adrTwoA = deStr;
                    adrTwoB = deCity;
                    adrTwoC = deProv;
                    adrTwoD = dePost;
                    adrOneE = orCountry;
                    adrTwoE = deCountry;
                    fullAddrOne = orStr + ", " + orCity + ", " + orProv + ", " + orCountry + ", " + orPost;
                    fullAddrTwo = deStr + ", " + deCity + ", " + deProv + ", " + deCountry + ", " + dePost;
                }

                //... Get Item List Details ...
                totItem = 0;
                totVol = 0;
                totWei = 0;
                totVal = 0;
                for(let a = 0; a < $scope.mainQuoteItemList.length; a++){
                    totItem += parseFloat($scope.mainQuoteItemList[a].qty);
                    totLen += (parseFloat($scope.mainQuoteItemList[a].len) * (parseFloat($scope.mainQuoteItemList[a].qty)));
                    totWid += (parseFloat($scope.mainQuoteItemList[a].wid) * (parseFloat($scope.mainQuoteItemList[a].qty)));
                    totHei += (parseFloat($scope.mainQuoteItemList[a].hei) * (parseFloat($scope.mainQuoteItemList[a].qty)));
                    totVol += (parseFloat($scope.mainQuoteItemList[a].len) * parseFloat($scope.mainQuoteItemList[a].wid) * parseFloat($scope.mainQuoteItemList[a].hei) * (parseFloat($scope.mainQuoteItemList[a].qty)));
                    totWei += parseFloat($scope.mainQuoteItemList[a].wei) * (parseFloat($scope.mainQuoteItemList[a].qty));
                    totVal += parseFloat($scope.mainQuoteItemList[a].val) * (parseFloat($scope.mainQuoteItemList[a].qty));
                    unitDets.push(
                        {
                            title: 'Description',
                            data: $scope.mainQuoteItemList[a].descript
                        },
                        {
                            title: 'HS-Code',
                            data: $scope.mainQuoteItemList[a].hs
                        },
                        {
                            title: 'Volume',
                            data: ($scope.mainQuoteItemList[a].len * $scope.mainQuoteItemList[a].wid * $scope.mainQuoteItemList[a].hei) + " " + $scope.itemDimensUnit + "3"
                        },
                        {
                            title: 'Weight',
                            data: $scope.mainQuoteItemList[a].wei + " " + $scope.itemWeightUnit
                        },
                        {
                            title: 'Value',
                            data: parseFloat($scope.mainQuoteItemList[a].val).toFixed(2) + " " + $scope.itemInfoCur
                        },
                        {
                            title: 'Quantity',
                            data: $scope.mainQuoteItemList[a].qty
                        }
                    );
                }

                //... Set Quote Summary Details ...
                $scope.quoteSuum = [];
                $scope.quoteSuum = [
                    {
                        title: 'Contact Details',
                        subs: [
                            {
                                title: 'Name',
                                data: quoteName
                            },
                            {
                                title: 'Email',
                                data: quoteMail
                            },
                            {
                                title: 'Tel',
                                data: quoteTel
                            }
                        ]
                    },
                    {
                        title: 'Location Details',
                        subs: [
                            {
                                title: 'Origin Location',
                                data: fullAddrOne
                            },
                            {
                                title: 'Destination Location',
                                data: fullAddrTwo
                            }
                        ]
                    },
                    {
                        title: 'Shipment Details',
                        subs: [
                            {
                                title: 'Service Type',
                                data: $scope.selServ
                            },
                            {
                                title: 'Incoterm',
                                data: $scope.selIncoterm
                            }
                        ]
                    },
                    {
                        title: 'Shipment Summary',
                        subs: [
                            {
                                title: 'Tolat # of items',
                                data: totItem
                            },
                            {
                                title: 'Total Volume',
                                data: totVol + " " + $scope.itemDimensUnit + "3"
                            },
                            {
                                title: 'Total Weight',
                                data: totWei + " " + $scope.itemWeightUnit
                            },
                            {
                                title: 'Total Value',
                                data: totVal.toFixed(2) + " " + $scope.itemInfoCur
                            }
                        ]
                    }
                ];

            }

            $scope.showQteSumPop = !$scope.showQteSumPop;
            $rootScope.loading = false;
        }

        $scope.qtPop = 0;
        //... Msg next to Accept ...
        let txtTmp = 'By clicking on \'Accept\', you confirm all the details for the quote. Any added charges due to incorrect data will be added to the total.';
        $scope.acceptTxh = txtTmp;
        //...................... Request Quote .......................
        $scope.requestQte = RequestQte;
        function RequestQte(){
            $rootScope.loading = true;
            //... Generate Full Item List ...
            let complProdList = [];
            for(let a = 0; a < $scope.mainQuoteItemList.length; a++){
                complProdList.push($scope.mainQuoteItemList[a]);
            }
            let combinedUnit = '';
            for(var r = 0; r < complProdList.length; r++){
                combinedUnit += complProdList[r].descript + ',';
                combinedUnit += complProdList[r].wei + ',';
                combinedUnit += complProdList[r].len + ',';
                combinedUnit += complProdList[r].hei + ',';
                combinedUnit += complProdList[r].wid + ',';
                combinedUnit += complProdList[r].qty + ',';
                combinedUnit += complProdList[r].val + ',';
                combinedUnit += complProdList[r].hs;
                if(r !== (complProdList.length - 1)){
                    combinedUnit += ";";
                }
            }
            let miniLogStat = 0;
            $rootScope.miniLoggedIn ? miniLogStat = '1' : miniLogStat = '0';
            let action = 'webQuote';
            $http({
                url: 'app-services/manageLogistics.php',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: 'act='+action+'&a='+$scope.selServ+'&b='+$scope.itemInfoCur+'&c='+dbUnit+'&d='+quoteMail+'&e='+quoteTel+'&f='+fullAddrOne+'&g='+fullAddrTwo+'&h='+totLen+'&i='+totWid+'&j='+totHei+'&k='+totWei+'&l='+totItem+'&m='+totVal+'&n='+totVol+'&o='+orCountryCode+'&p='+deCountryCode+'&q='+quoteName+'&r='+$scope.selIncoterm+'&s='+combinedUnit+'&t='+miniLogStat
            }).then(function(getResponse){
                if(getResponse.data[0].status === 'Yes'){
                    console.log('Quote Requested Successfully');
                    resetMainPage();
                    $scope.actPhase = 1;
                    $scope.acceptTxh = txtTmp;
                    $scope.qtPop = 1;
                    //$scope.showQteSumPop = false;
                    $rootScope.loading = false;
                }
                else{
                    console.log(getResponse.data.status);
                    $scope.acceptTxh = 'Error... Please try again.';
                    $scope.qtPop = 0;
                    $rootScope.loading = false;
                }
            },function(){
                console.log('Error');
                $scope.acceptTxh = 'Error... Please Contact our support team for assistance. \r\n info@intellicargoglobal.com';
                $scope.qtPop = 0;
                $rootScope.loading = false;
            });
        }

        //............................... Accept Terms .................................
        let payTerms = false;
        $scope.acceptPayTerms = AcceptPayTerms;
        function AcceptPayTerms(){
            payTerms = true;
            ToNextPhase();
            $scope.showQteSumPop = false;
            readyDates();
        }

        /******************************** Progress Tracking *************************************/




        /*************************************************** Mini Login ********************************************************/
        //... Change Login Email ...
        let logmail = '';
        $scope.setLogMail = function (txt){
            logmail = txt;
        };
        //... Change Login Passw ...
        let logpass = '';
        $scope.setLogPass = function (txt){
            logpass = txt;
        };

        //... Container Display Selection ...
        $rootScope.mainTabDisp = 'miniLogin';
        $rootScope.selectContainerMain = function(select){
            $rootScope.mainTabDisp = select;
        };

        /****************** Auto Logout on Idle *******************/
        $scope.onInactive = function(millisecond, callback){
            var wait = setTimeout(callback, millisecond);
            document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = document.onkeyup = document.focus = document.onmousewheel = function() {
                clearTimeout(wait);
                wait = setTimeout(callback, millisecond);
            };
        };

        //....................... Log Out .......................
        /** Log Out **/
        $scope.logout = function(){
            $rootScope.loading = true;
            $http({
                url: 'app-services/credentialsClear.php',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(responseOne){
                if(responseOne.data.status === ''){
                    $timeout(function() {
                        $rootScope.miniLoggedIn = false;
                        $rootScope.mainTabDisp = 'miniLogin';
                        document.getElementById('miniLogEmail').value = '';
                        document.getElementById('miniLogPass').value = '';
                        logmail = logpass = '';
                        $scope.showQteSumPop = false;
                        $rootScope.loading = false;
                    }, 400);
                }
            });
        };
        //..............................................

        /********************* Login / Profile ***********************/
        $scope.dispMiniImg = '';
        $scope.miniLogResp = '';
        $scope.miniLogin = function() {
            $rootScope.loading = true;
            $http({
                url: 'app-services/serverLogin.php',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: 'username='+logmail+'&password='+logpass
            }).then(function(response) {
                    if(response.data.status === 'loggedin') {
                        $http({
                            url: 'app-services/credentialsSet.php',
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            data: response.data
                        }).then(function(responseOne){
                                if(responseOne.data.status === 'loggedin'){
                                    $rootScope.mainTabDisp = 'miniProf';
                                    $rootScope.miniLoggedIn = true;
                                    $scope.miniName = responseOne.data.firstname + " " + responseOne.data.lastname;
                                    $scope.miniMail = responseOne.data.email;
                                    $scope.miniTel = responseOne.data.contactnum;
                                    if(responseOne.data.profPic === 'true'){
                                        $scope.dispMiniImg = 'Prof_Pics/'+responseOne.data.userid+".jpg";
                                    }
                                    $scope.miniAdr = responseOne.data.adrOne + ", " + responseOne.data.adrTwo;
                                    $scope.miniCity =  responseOne.data.adrCity;
                                    $scope.miniCount = responseOne.data.adrCountry;
                                    $scope.miniPost = responseOne.data.adrPostal;
                                    $scope.onInactive(900000, $scope.logout);
                                    $rootScope.loading = false;
                                    /*window.location.assign("Interface.php#!/home");*/
                                }
                            },
                            function(e ){
                                $scope.miniLogResp = "**Error: Failed to login !!! Please try again later. **";
                                $rootScope.loading = false;
                            });
                    }
                    else if(response.data.status === 'notFound') {
                        $rootScope.loading = false;
                        $scope.miniLogResp = "**Error: This Email address is not yet registered. **";
                    }
                    else if(response.data.status === 'DB Problem'){
                        $scope.miniLogResp = "** DB Error **";
                    }
                    else {
                        $rootScope.loading = false;
                        $scope.miniLogResp = "**Error: Incorrect Password **";
                    }
                },
                function(){
                    $scope.miniLogResp = "** Error **";
                });
        };

        //... Clear Error Messge ...
        $scope.clearError = function(){
            $scope.logError = false;
            $scope.logErrorMsg = "";
        };






        /******************************************************* About Us *************************************************************/
        $scope.AboutUsInfo = '\r\rIntellicargo International is a global trade and logistics company.' +
            '\nWe focus on providing innovative technologically advanced trade and logistics solutions integrated ' +
            'with our network of world class service providers that expands over 22 industries in more than 220 ' +
            'countries globally. With our industry leading partners we can provide world class supply chains, ' +
            'logistics and transportation solutions no matter the complexity of the operation.\n\n' +
            'Knowing the importance of a streamlined operation, we will create, coordinate and manage a tailored ' +
            'trade and logistics solution to drive down cost and unnecessary recourses without compromising on ' +
            'quality, security or sustainability.\n\n' +
            'Our large range of logistics products and services combined with industry leading technologies that ' +
            'will insure maximum efficiency within a supply chain.';
        //... Animate counters ...
        let cOne = 500000, cTwo = 200, cThree = 20, cFour = 20, cFive = 100, cSix = 150;
        let perOne = 0, perTwo = 0, perThree = 0, perFour = 0, perFive = 0, perSix = 0;
        $scope.aboutOne = $scope.aboutTwo = $scope.aboutThree = $scope.aboutFour = $scope.aboutFive = $scope.aboutSix = 0;
        $scope.startCounter = StartCounter;
        function StartCounter(){
            cntOne();
            cntTwo();
            cntThree();
            cntFour();
            cntFive();
            cntSix();
        }
        function cntOne(){
            if(perOne < cOne){
                $timeout(function(){
                    $scope.aboutOne = perOne;
                    perOne += 1250;
                    cntOne();
                },1);
            }
            if((perOne === cOne) || (isNaN($scope.aboutOne))){
                $scope.aboutOne = cOne;
            }
        }
        function cntTwo(){
            if(perTwo < cTwo){
                $timeout(function(){
                    $scope.aboutTwo = parseInt(perTwo);
                    perTwo += 0.5;
                    cntTwo();
                },4);
            }
            if((perTwo === cTwo) || (isNaN($scope.aboutTwo))){
                $scope.aboutTwo = cTwo;
            }
        }
        function cntThree(){
            if(perThree <= (cThree + 1)){
                $timeout(function(){
                    $scope.aboutThree = parseInt(perThree);
                    perThree += 0.05;
                    cntThree();
                },1);
            }
            if((perThree === cThree) || (isNaN($scope.aboutThree))){
                $scope.aboutThree = cThree;
            }
        }
        function cntFour(){
            if(perFour <= (cFour + 1)){
                $timeout(function(){
                    $scope.aboutFour = parseInt(perFour);
                    perFour += 0.05;
                    cntFour();
                },1);
            }
            if((perFour === cFour) || (isNaN($scope.aboutFour))){
                $scope.aboutFour = cFour;
            }
        }
        function cntFive(){
            if(perFive < cFive){
                $timeout(function(){
                    $scope.aboutFive = parseInt(perFive);
                    perFive += 0.25;
                    cntFive();
                },1);
            }
            if((perFive === cFive) || (isNaN($scope.aboutFive))){
                $scope.aboutFive = cFive;
            }
        }
        function cntSix(){
            if(perSix < cSix){
                $timeout(function(){
                    $scope.aboutSix = parseInt(perSix);
                    perSix += 0.375;
                    cntSix();
                },1);
            }
            if((perSix === cSix) || (isNaN($scope.aboutSix))){
                $scope.aboutSix = cSix;
            }
        }
        //... Reset Page Counters ...
        $scope.resetPageCounters = ResetPageCounters;
        function ResetPageCounters(){
            perOne = 0;
            perTwo = 0;
            perThree = 0;
            perFour = 0;
            perFive = 0;
            perSix = 0;
            $scope.aboutOne = $scope.aboutTwo = $scope.aboutThree = $scope.aboutFour = $scope.aboutFive = $scope.aboutSix = 0;
            StartCounter();
        }

        /******************************** Transport Services *************************************/
        $scope.headOne = 'International Express Courier';
        $scope.textOne = 'Our International Express Courier solutions for smaller parcels (Normally under 75kg) expands to \n' +
            'over 220 countries. Our C2C, B2C, B2B and eCommerce express courier service from world class \n' +
            'carriers will insure secure and reliable delivery of your parcels and documents in a Point-to-point \n' +
            'transport solution. IntellicargoMAX provides you with a platform to quote, book and track your \n' +
            'shipments for the ultimate piece of mind.';
        $scope.headTwo = 'AirCargo';
        $scope.textTwo = 'We provide a wide variety of AirCargo services to fit your time frames and your budget without \n' +
            'compromising on reliability, security or efficiency. Our economy, express, priority and specialised \n' +
            'AirCargo services will insure delivery ON TIME, when it Matters.';
        $scope.headThree = 'OceanCargo';
        $scope.textThree = 'OceanCargo has long been the most cost effective mode of accross ocean transport. Wether you \n' +
            'need a LCL , FCL or Oversized cargo ocean freight solution we will deliver. From standard dry cargo \n' +
            'to specialised “reefer” solutions , there is no one size fits all. Its about what you need when you need \n' +
            'it.';
        $scope.headFour = 'LandCargo';
        $scope.textFour = 'Intellicargo International offers you our global network of carriers for all your road transport needs. \n' +
            'From LTL to FTL solutions that would fit your profile and your budget combined with state of the art \n' +
            'tracking solutions to deliver a new generation of logistics customer service .';
        $scope.headFive = 'Ent-To-End-Service';
        $scope.textFive = 'Intellicargo International offers you a network of over a 150 multinational logistics service providers \n' +
            'operating in more than 220 countries to create and streamline an end-to-end supply chain \n' +
            'operation. Contact us today!';

        /******************************** Technology Overview *************************************/
        $scope.techheadOne = 'LMS, IMS & WMS';
        $scope.techTtlOne = 'Management Technology';
        $scope.techTxtOne = 'We offer integrated management technologies to optimise your supply chain operation as \n' +
            'effectively as possible. Our integrated Logistics Management, Inventory Management and \n' +
            'Warehouse Management technologies will give you detailed overviews into every aspect of your \n' +
            'operation. Intellicargo International offers both the software and the hardware technologies for a \n' +
            'fully integrated solution that does need unnecessary resources and “over the top” funding for \n' +
            'security, reliability and sustainability.';
        $scope.techheadTwo = 'Advanced Location Technology';
        $scope.techTtlTwo = 'Advanced Tracking Technology';
        $scope.techTxtTwo = 'Cargo tracking visibility is a very important part of any logistics operation. Our advanced tracking \n' +
            'technologies will provide you with the visibility on the position of your cargo doesn’t matter where it \n' +
            'is. From RFID to new generation state of the art GPS tracking technologies. We provide it as a \n' +
            'product for our long term clients or as a value added service for once off shipments. Our tracking \n' +
            'technologies won’t necessarily just be used for cargo security reasons, but rather for more precise \n' +
            'time calculations within the supply chain.';
        $scope.techheadThree = 'Warehousing & Inventory Technologies';
        $scope.techTtlThree = 'Warehouse & Inventory';
        $scope.techTxtThree = 'Intellicargo International is a supplier for the new generation of warehouse and inventory \n' +
            'management hardware technologies of a more accurate, effective and safer warehousing operation. \n' +
            'We supply fixed & handheld data terminals, fixed & handheld scanners, label printer & labels, boxes, \n' +
            'mobile computer, rugged tablets and the other necessary technologies. Together with our \n' +
            'integrated software solutions we can provide a end-to-end warehousing and inventory management \n' +
            'technology solutions.';

        /******************************** Solutions Overview *************************************/
        $scope.solheadOne = 'LMS, IMS, OMS & WMS';
        $scope.soltextOne = 'Management is everything! With our solutions you will be able to manage your logistics, inventory \n' +
            'or warehouse without the additional resources. Integrated software solutions will insure a refined \n' +
            'process within your operation from start to finish for improved customer satisfaction.';
        $scope.solheadTwo = 'Manufacturing Logistics';
        $scope.soltextTwo = 'Creating a streamlined supply chain for any manufacturing life cycle will save time, resources and \n' +
            'ultimately unnecessary cost. From raw material to distribution of the final product requires detailed \n' +
            'planning and management. This is where a one size fits all approach won’t fit anyone...';
        $scope.solheadThree = 'Reverse Logistics';
        $scope.soltextThree = 'Aftermarket service to your customer forms a large part of your customer experience. \n' +
            'Transportation of goods from the customer for servicing, product replacement and spare \n' +
            'replacement scenarios can be costly to any company. Our network of specialist will insure a great \n' +
            'customer experience.';
        $scope.solheadFour = 'SupplyChain Solutions';
        $scope.soltextFour = 'Intellicargo International specialize in creating, streamlining and optimising international supply \n' +
            'chains with the goal to drive down cost and unnecessary resources with our integrated logistics \n' +
            'management solutions for the ultimate supply chain operation and visibility.';
        $scope.solheadFive = 'eCommerce';
        $scope.soltextFive = 'Quickly becoming one of the parts of the consumer’s everyday lifestyle, eCommerce forms a large \n' +
            'part of most companies as a value added sales channel to reach customers on a global level without \n' +
            'the expense of a retail setup. Intellicargo International provide customised end- to-end integrated \n' +
            'eCommerce solutions';
        $scope.solheadSix = 'Fullfillment';
        $scope.soltextSix = 'In partnership with our international warehousing and distribution service provider we develop a \n' +
            'fulfillment solutions to fit your operational needs and budget without compromising on security, \n' +
            'reliability and customer service execution. End-to-end fulfillment solutions.';

        /******************************** Enquiry Page *************************************/
        $scope.enqHead = 'Contact Us';
        $scope.enqDesc = 'Intellicargo International provides a wide range of services and solutions within our global network. ' +
            'For any information regarding our services, please fill in our form or email us at ';
        $scope.enqDescSpec = 'info@intellicargoglobal.com';
        $scope.enqDescCont = '. Please note that any service estimate request can take up to 48 hours.';
        var newName = '',
            newMail = '',
            newMsg = '';
        $scope.enqOpt = 'Enquiry Type';
        $scope.enqOptArrow = 'keyboard_arrow_down';
        $scope.enqList = [];
        var enqListItems = ['Other'];
        for(let a = 0; a < enqListItems.length; a++){
            $scope.enqList.push({
                id: a,
                title: enqListItems[a]
            });
        }
        //... Toggle Type Drop ...
        $scope.togEnqDrop = TogEnqDrop;
        function TogEnqDrop(){
            $scope.showEnqDrop = !$scope.showEnqDrop;
            if(!$scope.showEnqDrop){
                $scope.enqOptArrow = 'keyboard_arrow_down';
            }
            else if($scope.showEnqDrop){
                $scope.enqOptArrow = 'keyboard_arrow_up';
            }
        }
        //... Select Enquiry Type ...
        $scope.newEnqType = function(sel){
            $scope.enqOpt = sel;
            $timeout(function(){
                enqValid('', '');
            },100);
        };
        //... Type Name ...
        $scope.newFullname = function(txt){
            newName = txt;
            $timeout(function(){
                enqValid('name', newName);
            },100);
        };
        //... Type Mail ...
        $scope.newEmail = function(txt){
            newMail = txt;
            $timeout(function(){
                enqValid('mail', newMail);
            },100);
        };
        //... Type Msg ...
        $scope.newMessage = function(txt){
            newMsg = txt;
            $timeout(function(){
                enqValid('msg', newMsg);
            },100);
        };
        //... Test Form Validity ...
        var tstNme = false,
            tstMail = false,
            tstMsg = false;
        $scope.isValidEnq = false;
        function enqValid(type, data){
            let unme = /^[0-9a-zA-Z]+$/;
            let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if((type === 'name')){
                (data.match(unme) && data !== '' && data !== undefined) ? tstNme = true : tstNme = false;
            }
            if((type === 'mail')){
                (data.match(mail) && data !== '' && data !== undefined) ? tstMail = true : tstMail = false;
            }
            if(type === 'msg'){
                (data !== '' && data !== undefined) ? tstMsg = true : tstMsg = false;
            }
            ($scope.enqOpt !== 'Enquiry Type' && tstNme && tstMail && tstMsg) ? $scope.isValidEnq = true : $scope.isValidEnq = false;
        }
        //...
        $scope.enqResult = '';
        //... Submit Enquiry ...
        $scope.sendNewEnq = SendNewEnq;
        function SendNewEnq(){
            if($scope.isValidEnq){
                $rootScope.loading = true;
                let action = 'enquiry';
                $http({
                    url: 'app-services/mailWebReq.php',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: 'act='+action+'&nme='+newName+'&mail='+newMail+'&msg='+newMsg+'&tpe='+$scope.enqOpt
                }).then(function(getResponse){
                    newName = $scope.webEnqName = '';
                    newMail = $scope.webEnqMail = '';
                    newMsg = $scope.webEnqMsg = '';
                    enqValid('msg', '');
                    if(getResponse.data === 'Mail sent'){
                        //console.log(getResponse);
                        $scope.enqResult = 'Enquiry Submitted Successfully.';
                    }
                    else if (getResponse.data !== 'Mail sent'){
                        console.log(getResponse.data);
                        $scope.enqResult = 'Enquiry Submition Failed.';
                    }
                    $rootScope.loading = false;
                });
            }
        }

        $scope.terms = 'Website Terms of Use\n' +
            '  \n' +
            'Please read these terms of use carefully as they apply to your use of the IESCO Pty Ltd trading as Intellicargo International (“Intellicargo International”), website. By using the Intellicargo International website, you agree to be bound by these terms of use. We may amend these terms of use at any time. Your continued use of the Intellicargo International website is considered to be acceptance of the amended terms of use.   \n' +
            '  \n' +
            'Liability \n' +
            'Intellicargo International makes no warranties or representations about this website or any of its content. We are not responsible to you or anyone else for any direct or consequential loss suffered in connection with the use of this website. We exclude, to the extent permitted by law, any liability which may arise as a result of use of this website. By using Intellicargo International website, you agree to indemnify us for any loss or liability arising out of your use of this website.  \n' +
            '\n' +
            'Intellicargo International Intellectual Property   \t \n' +
            'Intellicargo International owns this intellectual property, including copyright, in all content of the Intellicargo International website. We are happy for you to link our website; however, it is your responsibility to maintain the currency of your links to our website. We reserve the right to deny any person permission to link our website.     \n' +
            '\n' +
            'Links from this website    \n' +
            'The external linked websites within the Intellicargo International website are not under the control of Intellicargo International. We do not take responsibility for the content in, or currency of, any externally linked sites. The inclusion of any link within our website does not imply endorsement by Intellicargo International of the linked website, nor does it suggest any relationship with the organization linked.    \n' +
            'SPAM  \n' +
            'Intellicargo International publishes electronic addresses on this website to facilitate communication relating to our business functions. This is not to be inferred as consent by Intellicargo International or the relevant addresses to receiving unsolicited commercial messages or SPAM.  \n' +
            ' \n' +
            'Electronic Communications  \n' +
            'When a user visits Intellicargo International or sends an email to Intellicargo International, that user consents to receiving communications from Intellicargo International electronically and agrees that all agreements, notices, disclosures and other communications sent by Intellicargo International satisfies any legal requirements, including but not limited to, the requirements that such communications should be “in writing”. \n' +
            ' \n' +
            'Framing \n' +
            'No person, business or web site may frame this site or any of the pages on this site in any way whatsoever. \n' +
            ' \n' +
            'Spiders and Crawlers \n' +
            'No person, business or web site may use any technology to search and gain any information from this site without the prior written permission of Intellicargo International.   \n' +
            '        \n' +
            'Disclaimer \n' +
            'Apart from the provision of sections 43(5) and 43(6) of the Electronic Communications and Transactions Act, neither Intellicargo International nor any of its agents or representatives shall be liable for any damage, loss or liability of whatsoever nature arising from the use or inability to use this web site or representations or warranties, implied or otherwise, that amongst others, the content and technology available from this website are free from errors or omissions or that the service will be 100% uninterrupted and error free. Users are encouraged to report any possible malfunctions and errors to queries@intellicargoi.com\n' +
            ' \n' +
            'This website is supplied on an “as is” basis and has not been compiled or supplied to meet the user’s individual requirements.  It is the sole responsibility of the user to satisfy itself prior to entering into this agreement with Intellicargo International that the service available from and through this web site will meet the user’s individual requirements and be compatible with the user’s hardware and/or software. \n' +
            ' \n' +
            'Information, ideas and opinions expressed on this site should not be regarded as professional advice or the official opinion of Intellicargo International and users are encouraged to consult professional advice before taking any course of action related to information, ideas or opinions expressed on this site. \n' +
            ' \n' +
            'Neither Intellicargo International nor any of its agents or representatives shall be liable for any damage, loss or liability of whatsoever nature arising from the use of inability to use any product sold on this web site. \n';

        /************************************************ Register *****************************************************/
        var uname = '',
            email = '',
            passw = '';
        $scope.regMsg = '';
        $scope.userRegister = function(regType){
            $rootScope.loading = true;

            var error = "Invalid data!";

            if(($scope.uname === 'pass') && ($scope.mail === 'pass') && ($scope.pass === 'pass') && ($scope.passCon === 'pass')){

                $http({
                    url: 'app-services/userRegister.php',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: 'unme='+uname+'&mail='+email+'&pass='+passw
                }).then(function(getResponse){
                    $log.log(getResponse.data.status);
                    if(getResponse.data.status.includes('Yes')){
                        $rootScope.loading = false;
                        document.getElementById('regNameb').value = '';
                        document.getElementById('regMailb').value = '';
                        document.getElementById('regPassb').value = '';
                        document.getElementById('regPassConb').value = '';
                        $scope.regMsg = "Registration Successful!\r\nPlease log in using your credentials.";
                    }
                    else if (getResponse.data.status === 'Unavailible'){
                        $scope.regMsg = 'This email address is already registered.\nPlease use another email or recover your password.';
                        $rootScope.loading = false;
                    }
                    else if (getResponse.data.status === 'DB Problem'){
                        $scope.regMsg = 'The server was unable to connect.\\r\\nPlease try again later.';
                        $rootScope.loading = false;
                    }
                    else {
                        $scope.regMsg = "An unexpected error stopped the registration process.\nPlease try again.";
                        $rootScope.loading = false;
                    }
                });
            }
            else{
                if(($scope.uname === 'fail') || ($scope.mail === 'fail') || ($scope.pass === 'fail') || ($scope.passCon === 'fail')){
                    error += "\r\nMake sure that:\n";
                }

                if($scope.uname === 'fail'){
                    error += "- Username consists of only alphanumeric characters (a-z, A-Z, 0-9).\n";

                }
                if($scope.mail === 'fail'){
                    error += "- Email address is valid (user@example.com).\n";

                }
                if($scope.pass === 'fail'){
                    error += "- Password contains at least 8 alphabetic characters (a-z, A-Z), at least 1 numeric character (0-9) and 1 special character ($@$!%*#?&).\n";

                }
                if($scope.passCon === 'fail'){
                    error += "- 'Password' matches 'Confirm Password'.";

                }
                $scope.regMsg = error;
                //alert(error);
                $rootScope.loading = false;
            }
        };

        $scope.validateReg = function(type, data){
            $scope.regMsg = '';
            var unme = /^[0-9a-zA-Z ]+$/;
            var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var pass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
            if((type === 'uname')){
                uname = data;
                if(data === undefined){
                    $scope.uname = 'fail';
                }
                else if(data.match(unme)){
                    $scope.uname = 'pass';
                }
                else{
                    $scope.uname = 'fail';
                }
            }
            if((type === 'email')){
                email = data;
                if(data === undefined){
                    $scope.mail = 'fail';
                }
                else if(data.match(mail)){
                    $scope.mail = 'pass';
                }
                else{
                    $scope.mail = 'fail';
                }
            }
            if((type === 'password')){
                passw = data;
                $scope.regPassCon = "";
                $scope.passCon = 'fail';
                if(data === undefined){
                    $scope.pass = 'fail';
                }
                else if(data.match(pass)){
                    $scope.pass = 'pass';
                }
                else{
                    $scope.pass = 'fail';
                }
            }
            if((type === 'passwordCon')){
                if(data === undefined){
                    $scope.passCon = 'fail';
                }
                else if(data === passw){
                    $scope.passCon = 'pass';
                }
                else{
                    $scope.passCon = 'fail';
                }
            }
        };

        /*************** Currencies ******************/
        $timeout(function(){
            //... Get Currencies ...
            $http({
                url: 'https://openexchangerates.org/api/latest.json?app_id=f4a23fe692cf401a85f151cfc4e290c3',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function(response){
                if(response.data.error !== 'true'){
                    //console.log(response.data);
                    GlobeVars.currencyList = response.data.rates;

                }
                else{
                    GlobeVars.currencyList = [];
                }
            },function(){
                console.warn('currency offline');
            },500);
        });


    }]);

    /** ***********************************************************************************************************/
    /************************************************* Login ************************************************************/
    /** ***********************************************************************************************************/

    /******************************** Login / Register *************************************/
    myApp.controller('loginCntrl',['$scope','$rootScope','$timeout','$mdSidenav','$log','$http', function ($scope, $rootScope, $timeout, $mdSidenav, $log, $http) {
        $rootScope.showLogPop = false;

        /*** Main ***/
        $rootScope.Registerlog = false;
        $scope.loginInputOne = "Email";

        //... Go to login page ...
        $rootScope.loginRegister = function(){
            if($rootScope.miniLoggedIn){
                $rootScope.loading = true;
                window.location.assign("Interface.php#!/home");
            }else{
                $rootScope.showLogPop = !$rootScope.showLogPop;
                $scope.logpop = "login";
            }
        };
        //... Go to register page
        $rootScope.registerPage = function(){
            $rootScope.showRegPop = false;
            $rootScope.mainTabDisp = 'reg';
        };

        //... Go to Forgot password page
        $scope.logpop = "login";
        $scope.togLogPops = function(sel){
            $scope.logpop = sel;
        };

        //... Change mail ...
        var email = '',
            maile = false;
        $rootScope.validateReset = function(data){
            $scope.logError = false;
            $scope.logErrorMsg = "";
            var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            email = data;
            ((data.match(mail)) && (data !== undefined) && (data !== '')) ? maile = true : maile = false ;
        };
        /***************************** Reset ************************************/
        $rootScope.reset = Reset;
        function Reset(){
            if(maile){
                let action = 'pwReset';
                $rootScope.loading = true;
                $http({
                    url: 'app-services/mailWebReq.php',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: 'act='+action+'&mail='+email
                }).then(function(getResponse){
                    $log.error(getResponse.data);
                    maile = false;
                    if(getResponse.data === 'DB Problem'){
                        $scope.logError = true;
                        $scope.logErrorMsg = "Connection Error. Please Try again later.";
                    }
                    else if(getResponse.data === 'notFound'){
                        $scope.logError = true;
                        $scope.logErrorMsg = "Error... The email address entered is not registered yet.";
                    }
                    else if(getResponse.data.includes("Success")){
                        $rootScope.mainTabDisp = "miniLogin";
                        $scope.logError = true;
                        $scope.logErrorMsg = $rootScope.resetResp = "Recovery mail Successfully sent to " + email;
                    }
                    else{
                        $scope.logError = true;
                        $scope.logErrorMsg = "Error... Recovery email not sent. Please try again.";
                    }
                    $rootScope.loading = false;
                });
            }else{
                $scope.logError = true;
                $scope.logErrorMsg = "Invalid Email Address";
            }
        }


        /***************************** Login ************************************/
        $scope.login = function() {
            $rootScope.loading = true;
            var username = $rootScope.loginUsername;
            var password = $rootScope.loginPassword;
            $http({
                url: 'app-services/serverLogin.php',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: 'username='+username+'&password='+password
            }).then(function(response) {
                    if(response.data.status === 'loggedin') {
                        $http({
                            url: 'app-services/credentialsSet.php',
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            },
                            data: response.data
                        }).then(function(responseOne){
                                if(responseOne.data.status === 'loggedin'){
                                    window.location.assign("Interface.php#!/home");
                                }
                            },
                            function(e ){
                                //alert('!!! Failed to login !!! \r\n\r\n Please try again later.\r\n\r\n' + e);
                                $scope.logError = true;
                                $scope.logErrorMsg = "** Failed to login !!! Please try again later. **";
                                $rootScope.loading = false;
                            });
                    }
                    else if(response.data.status === 'notFound') {
                        $rootScope.loading = false;
                        $scope.logError = true;
                        $scope.logErrorMsg = "** This Email address is not yet registered. **";
                    }
                    else if(response.data.status === 'DB Problem'){
                        $scope.logErrorMsg = "** DB Error **";
                    }
                    else {
                        $rootScope.loading = false;
                        $scope.logError = true;
                        $scope.logErrorMsg = "** Incorrect Password **";
                    }
                },
                function(){
                    $scope.logErrorMsg = "** ERROR **";
                });
        };

        //... Clear Error Messge ...
        $scope.clearError = function(){
            $scope.logError = false;
            $scope.logErrorMsg = "";
        };


    }]);
})();