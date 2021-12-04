(function () {
    'use strict';
    var myApp = angular.module('Body');

    /************************************************* Misc Service ************************************************************/
    myApp.service('GlobeVars', function(){
        return{
            uploadFileName: '',
            activeShipmentSelect: '',
            blankRedirect: '',
            isMobile: '',
            //... Global Currencies ...
            currencyList: []
        };
    });

    /************************************************* Convert CurrencyService ************************************************************/
    myApp.service('currencyConvert', function(GlobeVars){
        this.convert = function(current, requsted){
            let     curVal = 0,
                    newVal = 0,
                    calcVal = 0;
            GlobeVars.currencyList !== [] ? ((curVal = GlobeVars.currencyList[current]) && (newVal = GlobeVars.currencyList[requsted])) : ((curVal = 1) && (newVal = 1));

            calcVal = (parseFloat(newVal) / parseFloat(curVal));

            return calcVal;
        }
    });

    /************************************************* Page Scroll Service ************************************************************/
    myApp.service('scrollPageService', function($rootScope){
        //... Scroll Through Pages on mouseWheel ...
        this.pageOnScroll = function(meth, varToGet){
            var direction = '';

            if(!$rootScope.miniScroll){
                meth === 'mouse' ? direction = getMouseScrollDirection(varToGet) : meth === 'touch'? direction = getTouchScrollDirection(varToGet) : direction = getKeyScrollDirection(varToGet);
                setScrollAnim(direction);
                var dir = $rootScope.curPage;
                if(direction === 'down'){
                    if($rootScope.isMobile){
                        if($rootScope.curPage < 4){
                            dir++;
                        }
                    }else{
                        if($rootScope.curPage < 6){
                            dir++;
                        }
                    }
                }
                if(direction === 'up'){
                    if($rootScope.curPage > 0){
                        dir--;
                    }
                }
                if($rootScope.indexReady){
                    $rootScope.shiftPafe(dir, meth);
                }
            }
        };
        //... get direction from mouse event ...
        function getMouseScrollDirection(e){
            var delta = null,
                direction = false;

            if(!e){ //If event not provided, get it from window object.
                e = window.event;
            }
            if(e.wheelDelta){ //...Most Browsers ...
                delta = e.wheelDelta / 60;
            }else if(e.detail){ //...fallback for Firefox
                delta = -e.detail / 2;
            }
            if(delta !== null){
                direction = delta > 0 ? 'up' : 'down';
            }
            return direction;
        }
        //... get direction from Touch event ...
        function getTouchScrollDirection(e){
            return (e === 'pandown') ? 'up' : (e === 'panup') ? 'down' : '';
        }
        //... get direction from keyboard event ...
        function getKeyScrollDirection(e){
            return (e === 'ArrowUp') ? 'up' : (e === 'ArrowDown') ? 'down' : '';
        }
        //... Detect current and Set new page Scroll Animation Direction ...
        function setScrollAnim(direction){
            var remClass = '',
                addClass = '',
                item;
            if($rootScope.pageAnimDir !== direction){
                if(direction === 'up'){
                    item = document.getElementById("mainPage");
                    remClass = 'changeUP';
                    addClass = 'changeDOWN';
                }else{
                    item = document.getElementById("mainPage");
                    remClass = 'changeDOWN';
                    addClass = 'changeUP';
                }

                if($rootScope.indexReady){
                    item.classList.add(addClass);
                    item.classList.remove(remClass);
                    $rootScope.pageAnimDir = direction;
                }

            }
        }


    }); /*** END 'scrollPageService' ***/
})();