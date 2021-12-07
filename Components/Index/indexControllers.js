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
                templateUrl: (_tst())?'Templates/indexMainMobile.html':'Templates/indexMain.html',
                controller: (_tst())?'mainControllerMobile':'mainController'
            })
            .when('/logistics',{
                templateUrl: (_tst())?'Templates/indexLogisticsMobile.html':'Templates/indexLogistics.html',
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
        $scope.menuOptions = ['Home','About Me','Experience Overview','Goals Overview','Skills Overview','My GitHub','More'];
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

        /********************* Login / Profile ***********************/
        $scope.dispMiniImg = '';
        $scope.miniLogResp = '';


        /******************************************************* About Me *************************************************************/
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