
/*var app = angular.module('plnkrApp', ['ngMaterial']);

 app
 .controller("DemoController", function($scope, $mdSidenav){
 $scope.helloworld = 'Hello World';
 $scope.clickSide = function(dir) {
 $mdSidenav(dir).toggle();
 };
 });
 */
//////////////////////////////////// Angular Body Module //////////////////////////////////////////////////
//////////////////////////////////// Menu Slider //////////////////////////////////////////////////
angular.module('Body', ['ngMaterial', 'ngAnimate'])
    //........................... Header ..................................//

    .controller('HeaderCtrl', function($scope) {
        $scope.posts = [{id: 1}];//, {id: 2}];

        $scope.funcName = function(id) {
            return HeaderImages[id];
        };
        //........................... Header Variables ..................................//
        var HeaderImages = {
            1: 'Images/ExxovLogoPNG Standard[114].png'//,
            //2: 'Images/InternationalTrade&Logistics[120].png'
        }
    })

    .controller('mTabBut', function($scope, $timeout, $mdDialog){
        /**
         ****************************************** Toggles Menu Bar Active Button *******************************************
         */
        $scope.mb0 = true;
        $scope.MB0 = function(){
            $scope.mb1 = $scope.mb2 = $scope.mb3 = $scope.mb4 = $scope.mb5 = $scope.mb6 = $scope.mb7 = $scope.mb8 = $scope.mb9 = false;
            $timeout(function() {
                $scope.mb0 = true;
            }, 200);
        };
        $scope.MB1 = function(){
            $scope.mb0 = $scope.mb2 = $scope.mb3 = $scope.mb4 = $scope.mb5 = $scope.mb6 = $scope.mb7 = $scope.mb8 = $scope.mb9 = false;
            $timeout(function() {
                $scope.mb1 = true;
            }, 200);
        };
        $scope.MB2 = function(){
            $scope.mb0 = $scope.mb1 = $scope.mb3 = $scope.mb4 = $scope.mb5 = $scope.mb6 = $scope.mb7 = $scope.mb8 = $scope.mb9 = false;
            $timeout(function() {
                $scope.mb2 = true;
            }, 200);
        };
        $scope.MB3 = function(){
            $scope.mb0 = $scope.mb2 = $scope.mb1 = $scope.mb4 = $scope.mb5 = $scope.mb6 = $scope.mb7 = $scope.mb8 = $scope.mb9 = false;
            $timeout(function() {
                $scope.mb3 = true;
            }, 200);
        };
        $scope.MB4 = function(){
            $scope.mb0 = $scope.mb2 = $scope.mb3 = $scope.mb1 = $scope.mb5 = $scope.mb6 = $scope.mb7 = $scope.mb8 = $scope.mb9 = false;
            $timeout(function() {
                $scope.mb4 = true;
            }, 200);
        };
        $scope.MB5 = function(){
            $scope.mb0 = $scope.mb2 = $scope.mb3 = $scope.mb4 = $scope.mb1 = $scope.mb6 = $scope.mb7 = $scope.mb8 = $scope.mb9 = false;
            $timeout(function() {
                $scope.mb5 = true;
            }, 200);
        };
        $scope.MB6 = function(){
            $scope.mb0 = $scope.mb2 = $scope.mb3 = $scope.mb4 = $scope.mb5 = $scope.mb1 = $scope.mb7 = $scope.mb8 = $scope.mb9 = false;
            $timeout(function() {
                $scope.mb6 = true;
            }, 200);
        };

        /**
         ****************************************** Toggles Menu inside QuickShip *******************************************
         */
        $scope.items = [
            {
                id: "1",
                Type : "Title.html",
                Content : "Welcome to this Site",
                Input: '<md-input-container md-no-float class="md-block trackinput" flex-gt-sm> <input ng-model="user.serial" placeholder="Serial Number"> </md-input-container>',
                TemplateURL: "Templates/QuickshipOne.html"
                /**
                 * NB!!!
                 *
                 *
                 *
                 * Try adding HTML components in index.php and show them using visibility.
                 *
                 *
                 *
                 *
                 */
            },
            'Two',
            'Three'

        ];
        $scope.IsVisibleQS = true;
        $scope.QSValue = $scope.items[0].Content;
        $scope.QSOneVis = true;
        /**
         * Supplies a function that will show or hide the
         * requested data.
         */
        $scope.ShowHideQSOne = function(){
            $scope.IsVisibleQS = false;
            $scope.QSTwoVis = $scope.QSThreeVis = $scope.QSFourVis = false;
            $scope.QSValue = '';
            $scope.QSValue = $scope.items[0].Content;
            $timeout(function() {
                $scope.IsVisibleQS = true;
                $scope.QSOneVis = true;
            }, 500);

        };
        $scope.ShowHideQSTwo = function(){
            $scope.IsVisibleQS = false;
            $scope.QSOneVis = $scope.QSThreeVis = $scope.QSFourVis = false;
            $scope.QSValue = '';
            $scope.QSValue = $scope.items[1];
            $timeout(function() {
                $scope.IsVisibleQS = true;
                $scope.QSTwoVis = true;
            }, 500);
        };
        $scope.ShowHideQSThree = function(){
            $scope.IsVisibleQS = false;
            $scope.QSTwoVis = $scope.QSOneVis = $scope.QSFourVis = false;
            $scope.QSValue = '';
            $scope.QSValue = $scope.items[2];
            $timeout(function() {
                $scope.IsVisibleQS = true;
                $scope.QSThreeVis = true;
            }, 500);
        };
        $scope.ShowHideQSFour = function(){
            $scope.IsVisibleQS = false;
            $scope.QSTwoVis = $scope.QSOneVis = $scope.QSThreeVis = false;
            $scope.QSValue = '';
            $scope.QSValue = $scope.items[2];
            $timeout(function() {
                $scope.IsVisibleQS = true;
                $scope.QSFourVis = true;
            }, 500);
        };

        /**
         ****************************************** Toggles Menu inside WorldWide *******************************************
         */
        $scope.worldData = [
            {
                id: "0",
                Title : "Express Shipping",
                ContentOne : "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani " +
                "labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent." +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,"+
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his," +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,",
                ContentTwo: "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani " +
                "labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent."

            },
            {
                id: "1",
                Title : "Freight Shipping",
                ContentOne : "Labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent.",
                ContentTwo: "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani " +
                "labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent." +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,"+
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his," +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,"

            },
            {
                id: "2",
                Title : "Warehousing",
                ContentOne : "Reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent." +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,",
                ContentTwo: "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent."

            },
            {
                id: "3",
                Title : "Custom Services",
                ContentOne : "Tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent." +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,"+
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his," +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,",
                ContentTwo: "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani " +
                "labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent."

            },
            {
                id: "4",
                Title : "Specialized Services",
                ContentOne : "Reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent." +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,",
                ContentTwo: "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent."

            },
            {
                id: "5",
                Title : "Supply Chain Management",
                ContentOne : "Tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent." +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,"+
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his," +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,",
                ContentTwo: "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani " +
                "labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent."

            },
            {
                id: "6",
                Title : "Trade Consulting",
                ContentOne : "Reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent." +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,",
                ContentTwo: "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent."

            },
            {
                id: "7",
                Title : "Logistics Consulting",
                ContentOne : "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani " +
                "labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent." +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,"+
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his," +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,",
                ContentTwo: "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani " +
                "labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent."

            },
            {
                id: "8",
                Title : "What You Should Know?",
                ContentOne : "Tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent." +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,"+
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his," +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,",
                ContentTwo: "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani " +
                "labitur disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum labores honestatis eu. Nec quem lucilius in, eam praesent " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent."

            },
            {
                id: "9",
                Title : "Contact us for Solutions",
                ContentOne : "Reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent." +
                "Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his,",
                ContentTwo: "Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani " +
                "reformidans no. Sed laudem aliquam ne. Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci " +
                "tritani maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu. Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent."

            }

        ];
        $scope.Worldexpress = function(){
            $scope.WorldOptOne = $scope.worldData[0].ContentOne;
            $scope.WorldOptTwo = $scope.worldData[0].ContentTwo;
            $scope.WorldHead = $scope.worldData[0].Title;
        };
        $scope.Worldfreight = function(){
            $scope.WorldOptOne = $scope.worldData[1].ContentOne;
            $scope.WorldOptTwo = $scope.worldData[1].ContentTwo;
            $scope.WorldHead = $scope.worldData[1].Title;
        };
        $scope.Worldwarehousing = function(){
            $scope.WorldOptOne = $scope.worldData[2].ContentOne;
            $scope.WorldOptTwo = $scope.worldData[2].ContentTwo;
            $scope.WorldHead = $scope.worldData[2].Title;
        };
        $scope.Worldcustom = function(){
            $scope.WorldOptOne = $scope.worldData[3].ContentOne;
            $scope.WorldOptTwo = $scope.worldData[3].ContentTwo;
            $scope.WorldHead = $scope.worldData[3].Title;
        };
        $scope.Worldspecial = function(){
            $scope.WorldOptOne = $scope.worldData[4].ContentOne;
            $scope.WorldOptTwo = $scope.worldData[4].ContentTwo;
            $scope.WorldHead = $scope.worldData[4].Title;
        };
        $scope.Worldsupply = function(){
            $scope.WorldOptOne = $scope.worldData[5].ContentOne;
            $scope.WorldOptTwo = $scope.worldData[5].ContentTwo;
            $scope.WorldHead = $scope.worldData[5].Title;
        };
        $scope.Worldtrade = function(){
            $scope.WorldOptOne = $scope.worldData[6].ContentOne;
            $scope.WorldOptTwo = $scope.worldData[6].ContentTwo;
            $scope.WorldHead = $scope.worldData[6].Title;
        };
        $scope.Worldlogistics = function(){
            $scope.WorldOptOne = $scope.worldData[7].ContentOne;
            $scope.WorldOptTwo = $scope.worldData[7].ContentTwo;
            $scope.WorldHead = $scope.worldData[7].Title;
        };
        $scope.Worldinfo = function(){
            $scope.WorldOptOne = $scope.worldData[8].ContentOne;
            $scope.WorldOptTwo = $scope.worldData[8].ContentTwo;
            $scope.WorldHead = $scope.worldData[8].Title;
        };
        $scope.Worldcontact = function(){
            $scope.WorldOptOne = $scope.worldData[9].ContentOne;
            $scope.WorldOptTwo = $scope.worldData[9].ContentTwo;
            $scope.WorldHead = $scope.worldData[9].Title;
        };
        /**
         ****************************************** Language *******************************************
         */

        $scope.showLanguage = function(ev) {
            $('html,body').animate({scrollTop: 0},200);
            $timeout(function() {
                $mdDialog.show({
                        controller: DialogController,
                        templateUrl: 'Templates/langPopup.php',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose:true
                    })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            }, 250);
        };
        function DialogController($scope, $timeout, $mdDialog) {
            $scope.langMain = true;
            $scope.logoOn = true;
            $scope.langListBar = true;

            $scope.langToMain = function(){
                $scope.logoOn = false;
                $scope.langAfrica = $scope.langAsia = $scope.langAmerica = $scope.langEurope = false;
                $timeout(function() {
                    $scope.langMain = true;
                    $scope.logoOn = true;
                    $scope.langListBar = true;
                }, 300);
            };
            $scope.langSelectAfrica = function(){
                $scope.logoOn = false;
                $scope.langMain = false;
                $scope.langListBar = false;
                $timeout(function() {
                    $scope.langAfrica = true;
                    //$scope.logoOn = true;
                }, 300);
            };
            $scope.langSelectAsia = function(){
                $scope.logoOn = false;
                $scope.langMain = false;
                $scope.langListBar = false;
                $timeout(function() {
                    $scope.langAsia = true;
                    //$scope.logoOn = true;
                }, 300);
            };
            $scope.langSelectAmerica = function(){
                $scope.logoOn = false;
                $scope.langMain = false;
                $scope.langListBar = false;
                $timeout(function() {
                    $scope.langAmerica = true;
                    //$scope.logoOn = true;
                }, 300);
            };
            $scope.langSelectEurope = function(){
                $scope.logoOn = false;
                $scope.langMain = false;
                $scope.langListBar = false;
                $timeout(function() {
                    $scope.langEurope = true;
                    //$scope.logoOn = true;
                }, 300);
            };
            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };

            /************************* DropDown ***********************/
            $scope.langList = false;
            $scope.langListToggle = function(){
                if($scope.langList == false)
                {
                    $scope.logoOn = false;
                    $scope.langMain = false;
                    $timeout(function() {
                        $scope.langList = true;
                        //$scope.logoOn = true;
                    }, 300);
                }
                if($scope.langList == true)
                {
                    $scope.langList = false;
                    $timeout(function() {
                        $scope.langMain = true;
                        $scope.logoOn = true;
                    }, 300);
                }

            };
        }

        /**
         ****************************************** Login & Register *******************************************
         **/
        $scope.showLogin = function(ev) {
            $('html,body').animate({scrollTop: 0},200);
            $timeout(function() {
                $mdDialog.show({
                        controller: loginDialogController,
                        templateUrl: 'Templates/loginPopup.php',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose:true
                    })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            }, 250);
        };
        function loginDialogController($scope, $timeout, $mdDialog) {
            /*** Main ***/
            $scope.logMain = true;

            $scope.logToMain = function(){
                $scope.logLogin = $scope.logRegister = false;
                $timeout(function() {
                    $scope.logMain = true;
                    //$scope.logoOn = true;
                }, 250);
            };
            $scope.mainLogin = function(){
                $scope.logMain = false;
                $timeout(function() {
                    $scope.logLogin = true;
                    //$scope.logoOn = true;
                }, 250);
            };
            $scope.mainRegister = function(){
                $scope.logMain = false;
                $timeout(function() {
                    $scope.logRegister = true;
                    //$scope.logoOn = true;
                }, 250);
            };

            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }
        /**
         ****************************************** Contact Us *******************************************
         **/
        $scope.showContact = function(ev) {
            $('html,body').animate({scrollTop: 0},200);
            $timeout(function() {
                $mdDialog.show({
                        controller: contactDialogController,
                        templateUrl: 'Templates/contactPopup.php',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose:true
                    })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            }, 250);
        };
        function contactDialogController($scope, $mdDialog) {
            /*** Main ***/

            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }

        /**
         ****************************************** T's & C's *******************************************
         */
        $scope.showTerms = function(ev) {
            $('html,body').animate({scrollTop: 0},200);
            $timeout(function() {
                $mdDialog.show({
                        controller: termsDialogController,
                        templateUrl: 'Templates/TsCs.php',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose:true
                    })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            }, 250);
        };
        function termsDialogController($scope, $mdDialog) {

            $scope.hide = function() {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }
    })

    /**
     ****************************************** Service to scroll to *******************************************
     */
    .service('anchorSmoothScroll', function() {

        this.scrollTo = function(eID) {

            // This scrolling function
            // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

            var startY = currentYPosition();
            var stopY = elmYPosition(eID);
            var distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                scrollTo(0, stopY);
                return;
            }
            var speed = Math.round(distance / 100);
            if (speed >= 20) speed = 20;
            var step = Math.round(distance / 25);
            var leapY = stopY > startY ? startY + step : startY - step;
            var timer = 0;
            if (stopY > startY) {
                for (var i = startY; i < stopY; i += step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY += step;
                    if (leapY > stopY) leapY = stopY;
                    timer++;
                }
                return;
            }
            for (var i = startY; i > stopY; i -= step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY -= step;
                if (leapY < stopY) leapY = stopY;
                timer++;
            }

            function currentYPosition() {
                // Firefox, Chrome, Opera, Safari
                if (self.pageYOffset) return self.pageYOffset;
                // Internet Explorer 6 - standards mode
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                // Internet Explorer 6, 7 and 8
                if (document.body.scrollTop) return document.body.scrollTop;
                return 0;
            }

            function elmYPosition(eID) {
                var elm = document.getElementById(eID);
                var y = elm.offsetTop;
                var node = elm;
                while (node.offsetParent && node.offsetParent != document.body) {
                    node = node.offsetParent;
                    y += node.offsetTop;
                }
                return y;
            }
        };

    })


    //////////////////////////////////// Map Popup //////////////////////////////////////////////////
    .controller('popUpToggle', function ($scope, $timeout, $mdSidenav, $log, $location, anchorSmoothScroll) {
        /**
         ****************************************** Show / Hide Scroll to Top *******************************************
         */
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            console.log(scroll);
            $timeout(function() {
                if(scroll > 50 || scroll == undefined){
                    $scope.showUpArrow = true;
                }else{
                    $scope.showUpArrow = false;
                }
            }, 50);
            $scope.$apply();

        });

        /**
         ****************************************** Scroll to Tracker *******************************************
         */
        $scope.gotoElement = function (eID){
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('oop');

            // call $anchorScroll()
            anchorSmoothScroll.scrollTo(eID);
        };
        /**
         ****************************************** Scroll to top on page open *******************************************
         */
        $scope.topOfPage = function() {
            $('html,body').animate({scrollTop: 0},200);
        };
        /**
         ****************************************** SideNave Over Map *******************************************
         */
        $scope.toggleRight = buildToggler('left');
        $scope.isOpenRight = function(){
            return $mdSidenav('left').isOpen();
        };

        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */

        function buildToggler(navID) {
            return function() {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            };
        }
    })
    .controller('mapHeadCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.closetop = function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
        /*********************************** AnimationOne ************************************/
        $scope.animPlane = false;
        $scope.animateOne = function(){
            $scope.animPlane = !$scope.animPlane;
            $timeout(function() {
                $scope.fullOpen = !$scope.fullOpen;
            }, 300);
        };

        $scope.autoAnimate = function(){
            $timeout(function() {
                openOne();
            }, 500);
        };
        function openOne(){
            $scope.animPlane = true;
            $timeout(function() {
                $scope.fullOpen = true;
            }, 300);
            $timeout(function() {
                closeOne();
            }, 10000);
        }
        function closeOne(){
            $scope.animPlane = false;
            $scope.fullOpen = false;
            $timeout(function() {
                openOne();
            }, 5000);
        }

        /*************************************/
    })
    .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    })

    /////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////// IGL /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////
    .controller('IGLOne', function ($scope, $timeout, $mdSidenav, $log, $location, anchorSmoothScroll) {

    });
/***************************************************************************************************
 ****************************************************************************************************
 ***************************************************************************************************/
