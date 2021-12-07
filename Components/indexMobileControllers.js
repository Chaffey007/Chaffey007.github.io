(function () {
    'use strict';
    var myApp = angular.module('Body');


    /** ***********************************************************************************************************/
    /************************************************* Main Controller Mobile ************************************************************/
    /** ***********************************************************************************************************/
    myApp.controller('mainControllerMobile', function($scope, $location, $rootScope, $timeout, $log, $http){

        $rootScope.isMobile = true;
        $scope.toLogistics = ToLogistics;
        function ToLogistics(){
            $rootScope.loading = true;
            $timeout(function(){
                $location.path('/logistics');
            },500);
        }
    });
    /** ***********************************************************************************************************/
    /************************************************* Logistics Controller Mobile ************************************************************/
    /** ***********************************************************************************************************/
    myApp.controller('logisticsControllerMobile',['$scope', '$rootScope', '$timeout', '$log', '$http', '$location', 'GlobeVars', 'scrollPageService', '$sce', 'currencyConvert', function($scope, $rootScope, $timeout, $log, $http, $location, GlobeVars, scrollPageService, $sce, currencyConvert){

        $rootScope.miniScroll = false;
        $rootScope.isMobile = true;
        var panAct = '',
            panDir = 0;
        /******************************** Load Doc *************************************/
        $rootScope.indexReady = false;
        angular.element(document).ready(function(){
            $timeout(function() {
                $rootScope.indexReady = true;
                $rootScope.loading = false;
                //...

                //... Touch Actions ...
                var mainElement = document.getElementById('mainPage');
                var mc = new Hammer(mainElement);
                mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                // listen to events...
                mc.on("panleft panright panup pandown tap press", function(ev) {
                    if((ev.type === 'panup') || (ev.type === 'pandown')){
                        panAct = ev.type;
                    }
                    //... initiate scroll only when animation finished.
                    if((panAct === ev.type) && (panDir === 0)){
                        panDir = ev.direction;
                        scrollPageService.pageOnScroll('touch', panAct);
                    }
                    //... Open/Close Side menu ...
                    if(((ev.type === 'panleft') || (ev.type === 'panright')) && (panDir === 0)){
                        panDir = ev.direction;
                        $rootScope.togSideMenu(ev.type);
                    }
                });
            }, 1);
        });

        /******************************** Tog Side Menu *************************************/
        $scope.headMenu = 'menu';
        $scope.showFullRightMenu = false;
        $scope.showProfMenuIco = true;

        //... Toggle Left Menu ...
        $rootScope.togSideMenu = function(action){
            if((action === 'click')){
                $scope.showFullRightMenu = false;
                $scope.showProfMenuIco = true;
                $scope.showFullLeftMenu = !$scope.showFullLeftMenu;
                if(!$scope.showFullLeftMenu){
                    $scope.headMenu = 'menu';
                }
                if($scope.showFullLeftMenu){
                    $scope.headMenu = 'close';
                }
            }else if((action === 'clickProf')){
                if($rootScope.miniLoggedIn){
                    $rootScope.mainTabDisp = 'miniProf';
                }
                else{
                    $rootScope.mainTabDisp = 'miniLogin';
                }
                $scope.showFullRightMenu = !$scope.showFullRightMenu;
                if($scope.showFullRightMenu){
                    $scope.showFullLeftMenu = false;
                    $scope.headMenu = 'menu';
                    $scope.showFullRightMenu = true;
                    $scope.showProfMenuIco = false;
                }else{
                    $scope.showFullRightMenu = false;
                    $scope.showProfMenuIco = true;
                }

            }
            else if((action === 'panright')){
                if(($scope.actPhase === 4) && ($scope.actOffer > 0)){
                    moveList('neg');
                }
                else if((!$scope.showFullLeftMenu) && (!$scope.showFullRightMenu)){
                    $scope.showFullLeftMenu = true;
                    $scope.headMenu = 'close';
                }else if((!$scope.showFullLeftMenu) && ($scope.showFullRightMenu)){
                    $scope.showFullRightMenu = false;
                    $scope.showProfMenuIco = true;
                }

            }else if((action === 'panleft')){
                if(($scope.actPhase === 4) && ($scope.actOffer < ($scope.quoteOfferList.length - 1))){
                    moveList('pos');
                }
                else if((!$scope.showFullLeftMenu) && (!$scope.showFullRightMenu)){
                    $scope.showProfMenuIco = false;
                    $scope.showFullRightMenu = true;
                }else if(($scope.showFullLeftMenu) && (!$scope.showFullRightMenu)){
                    $scope.showFullLeftMenu = false;
                    $scope.headMenu = 'menu';
                }

            }
            $timeout(function(){
                panDir = 0;
            }, 400);
        };
        /******************************** Left Menu *************************************/
        //... Close Left Menu ...
        $scope.closeLeftMen = CloseLeftMen;
        function CloseLeftMen(){
            $scope.showFullLeftMenu = false;
        }


        /******************************** Left Menu Selection *************************************/
        $scope.menuOptionList = [];
        $scope.menuOptions = ['Home','About Me','Experience Overview','Goals Overview','Skills Overview','My GitHub','More'];
        for(let a = 0; a < $scope.menuOptions.length; a++){
            $scope.menuOptionList.push({
                id: a,
                title: $scope.menuOptions[a]
            });
        }

        //... Call Page Change from Directive ...
        $rootScope.shiftPafe = ShiftPage;
        function ShiftPage(newPage){
            $scope.selectDispPage(newPage);
        }
        //... Select Page To Display ...
        $rootScope.pageAnimDir = 'up';
        $rootScope.curPage = 0;
        $rootScope.selectedPage = 0;
        $rootScope.dispCurPageTitle = true;
        //... Set Page Transition Variables ...
        $scope.selectDispPage = function(selID){
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
            changePage(selID);
        };

        //... Execute Page transition ...
        function changePage(selID){
            /*if(selID !== 1){
                resetPageCounters();
            }*/
            $rootScope.dispCurPageTitle = false;
            $rootScope.selectedPage = selID;
            $scope.showFullLeftMenu = false;
            $scope.headMenu = 'menu';
            $rootScope.curPage = selID;
            $timeout(function(){
                $rootScope.dispCurPageTitle = true;
            }, 10);
            $timeout(function(){
                panDir = 0;
            }, 300);
        }

        /********************************************* Right Menu **************************************************/
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

        //..............................................

        /******************************** Main Page *************************************/
        $rootScope.miniLoggedIn = false;
        $scope.actPhase = 1;
        $scope.adrPage = 1;

        //... Next Phase ...
        $scope.toNextPhase = ToNextPhase;
        function ToNextPhase(){
            if(($scope.actPhase === 1) && ($scope.validStepOne) && ($scope.adrPage === 1)){
                $scope.actPhase = 1;
                $scope.adrPage = 2;
                retestValid();
            }else if((($scope.actPhase === 1) && ($scope.validStepOne) && ($scope.adrPage === 2)) || ($scope.actPhase === 2 && $scope.validStepTwo && !$rootScope.miniLoggedIn) || ($scope.actPhase === 4 && validStepFour) || ($scope.actPhase === 5) && (payTerms)){
                $scope.hidePhase = true;
                $scope.actPhase++;
                $timeout(function(){
                    $scope.hidePhase = false;
                    retestValid();
                },300);
            }else if(($scope.actPhase === 2 && $scope.validStepTwo && $rootScope.miniLoggedIn) || ($scope.actPhase === 3 && isValidCont)){
                $scope.qtPop = 0;
                togQteSumPop();
            }else if(($scope.actPhase === 5) && (!payTerms)){
                $scope.qtPop = 2;
                togQteSumPop();
            }else{
                console.log('Phase Incomplete. Cant proceed.');
            }
        }
        //... Previous Phase ...
        $scope.toPrevPhase = ToPrevPhase;
        function ToPrevPhase(){
            if($scope.actPhase === 4){
                $scope.hidePhase = true;
                $scope.actPhase = 1;
                $scope.adrPage = 1;
                $timeout(function(){
                    $scope.hidePhase = false;
                    retestValid();
                },300);
            }
            else if($scope.actPhase > 1){
                $scope.hidePhase = true;
                $scope.sixStep = 1;
                $scope.actPhase--;
                $timeout(function(){
                    $scope.hidePhase = false;
                    retestValid();
                },300);
            }else if(($scope.actPhase === 1) && ($scope.adrPage === 2)){
                $scope.adrPage = 1;
                retestValid();
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




        /******************************** About Me *************************************/
        $scope.AboutUsInfo = 'I am a software developer who absolutely loves coding. \n\nI enjoy the struggle of creating a brand new feature that almost has to be invented, the excitement of having to learn a new language for a specific project, the combination of coffee and all-nighters to debug a system, and of course the joy of testing your code and seeing that it works.\n\n' +
            'As you can see, I am passionate about development. \nI prefer being a full stack developer. This allows me to interact with many different scinarios, requirements, environments, languafes, systems and platforms. For me, "Never a dull moment" is what makes software developing exciting.\n\n' +
            'My motto, when it comes to deveoping software, is "Anything can be done. If i havn\'t done it before, I will learn how and make it happen!"';
        //... Animate counters ...
        let cOne = 50000, cTwo = 200, cThree = 20, cFour = 20, cFive = 100, cSix = 111;
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
                    perOne += 125;
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

        /******************************** Experience Overview *************************************/
        $scope.headOne = 'Intellicargo Global';
        $scope.textOne = 'I was the lead Software Engineer for Intellicargo Global.\nThis was a startup company where ideas were generated, i was presented with designs and then had to make those designs a reality.\n' +
            'This was a complete online system. It contained just about every possible feature i can think of.';
        $scope.headTwo = 'Sunset Food Holdings';
        $scope.textTwo = 'While this was a family-run business, I\'ve spent time developing an entire new management system there.';
        $scope.headThree = 'KrakenKode';
        $scope.textThree = 'I am the CFO of KrakenKode. This is the brain child of me and a fellow colleague. ' +
            '\nWe created this company that we hope to take into the future with our state of the art software development skills.';
        $scope.headFour = 'Private';
        $scope.textFour = 'I have been a part of many private development projects, both for individual clients, as well as small businesses.';
        $scope.headFive = 'EWCop';
        $scope.textFive = 'I am currently a Full Stack Developer for EWCop.\nI enjoy the challenges they present to me and my colleagues are great.\nPlus, working from home is always a bonus. ';

        /******************************** Goals Overview *************************************/
        $scope.techheadOne = 'Past';
        $scope.techTtlOne = 'Achieved Goals';
        $scope.techTxtOne = 'I am a proud graduate of HTS Rustenburg.\nI graduated 3rd in my class and got accepted to at all the universities i applied to.\n' +
            'I have done some traveling and seen the world. This allows me to focus on where i am and where i want to go.';
        $scope.techheadTwo = 'Present';
        $scope.techTtlTwo = 'Current Goals';
        $scope.techTxtTwo = 'My main current goal, is to finish my BSc IT degree at NWU.\nThis will open more doors for a brighter future.\nThen i would like to do other qualifications as well, such as multiple AWS and W3 certificates, as well as my Honors degree in AI.';
        $scope.techheadThree = 'Future';
        $scope.techTtlThree = 'Long Term Goals';
        $scope.techTxtThree = 'I hope to develop my skills as a software developer to become a head developer at one the leading software companies in the world.\nPerhaps even further my own company and become successful in that.';

        /******************************** Skills Overview *************************************/
        $scope.solheadOne = 'Operating Systems';
        $scope.soltextOne = 'I have extensive knowledge and skills in both Microsoft Windows (95-11) and Linux. While i have not been in contact with too many Mac OS systems, i do have a basic knowledge of that as well.';
        $scope.solheadTwo = 'Back End';
        $scope.soltextTwo = 'While there are many options for back end development, i personally prefer PHP. It is an extremely versatile and powerful language. I have never been left wanting, and since i have been using it for many years, i am quite proficient with it.';
        $scope.solheadThree = 'Front End';
        $scope.soltextThree = 'Front end development is a very satisfying and fun aspect, but it can be time consuming. I have built up a skill set in these languages: \n HTML5, JQuery, JavaScript, AngularJS, Angular, CSS, SCSS';
        $scope.solheadFour = 'Mobile';
        $scope.soltextFour = 'I have extensive knowledge in Android development and a basic knowledge of IOS.';
        $scope.solheadFive = 'Database';
        $scope.soltextFive = 'Over the years, i have aquired skills using these databases: MySQL, SqlServer, Oracle, Microsoft Access.';
        $scope.solheadSix = 'Misc';
        $scope.soltextSix = 'I have completed a course in Tridium, the developer of Niagara Framework. I have also completed numerous projects on a Raspberry Pi using Linux, Raspbian and Python. Furthermore, I have aquired skills in numerous lesser known languages like IPL and FP. Anything i dont yet know, I will learn as needed.';

        /******************************** API Page *************************************/
        function getGitInfo() {
            let user = "chaffey007";
            $scope.userNotFound = false;
            $scope.Gitloaded = false;
            $rootScope.loading = true;

            $http({
                method: 'GET',
                url: 'https://api.github.com/users/'+user
            }).then(function (response){
                if (response.data.name == "") {
                    data.name = response.data.login;
                }
                $scope.git_user = response.data;
                $scope.Gitloaded = true;
                $rootScope.loading = false;
                console.log(response.data);
                $http({
                    method: 'GET',
                    url: "https://api.github.com/users/" + user + "/repos"
                }).then(function (response2){
                    $scope.repos = response2.data;
                    $scope.reposFound = response2.data.length > 0;
                    $rootScope.loading = false;
                    console.log(response2.data);
                },function (error){
                    $scope.userNotFound = true;
                    $rootScope.loading = false;
                    alert("Github API Failure 2");
                });
            },function (error){
                $scope.userNotFound = true;
                $rootScope.loading = false;
                alert("Github API Failure");
            });
        }
        getGitInfo();

        $scope.terms = 'Website Terms of Use\n' +
            'This is a privately created website. No trademarks, certificates, or autenticators have been created or broken.\n\nPlease do not misuse the information on this page.';

    }]);


})();