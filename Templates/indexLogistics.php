<div class="mainBody" ng-if="$root.indexReady" > <!-- showLogPop -->
    <!------------------------------------------------ Header -------------------------------------------------->
    <div class="headerBar">
        <div class="leftSide" layout="row">
            <div class="leftMen tipped" ng-click="$root.togLeftMenu()">
                <div class="index-custom-md-tooltip"><font>Menu</font></div>
                <ng-md-icon class="menuIcon" icon="{{$root.headMenu}}" size="30"></ng-md-icon>
            </div>
            <img src="Images/logo.png" class="headIcon" ng-click="toMain()" />
        </div>
    </div>
    <!------------------------------------------------ Left Menu -------------------------------------------------->
    <div class="menuLeft" ng-class="{menuLeftOpen: $root.showFullLeftMenu}">
        <div class="options" layout="column">
            <div class="menuList" ng-repeat="option in menuOptionList">
                <div class="item tipped" ng-class="{itemActive: $root.selectedPage === option.id && $root.showFullLeftMenu}" ng-click="selectDispPage(option.id, 'click')" layout="row">
                    <div class="index-custom-md-tooltip" ng-if="!$root.showFullLeftMenu"><font>{{option.title}}</font></div>
                    <div class="unselected" ng-class="{selected: $root.selectedPage === option.id, unselectedFull: $root.showFullLeftMenu}"></div>
                    <font class="txt fade-in-med" ng-class="{txtActive: $root.selectedPage === option.id}" ng-if="$root.showFullLeftMenu">{{option.title}}</font>
                </div>
            </div>
        </div>
    </div>
    <!------------------------------------------------ Main Page -------------------------------------------------->
    <div id="mainPage" class="mainPage changeUP" page-scroll>
        <div class="mainPageCont" ng-if="$root.curPage === 0">
            <div class="med-overlay">
                <div class="left">
                    <font class="head" ng-show="(actPhase >= 1) && (actPhase <= 3)">Get Quote</font>
                    <font class="head" ng-show="(actPhase >= 4) && (actPhase <= 6)">Book Shipment</font>
                    <font class="head" ng-show="actPhase >= 7">Shipment Status</font>
                    <div class="quoteCont">
                        <!------------------------------------------------ Phase 1 -------------------------------------------------->
                        <div class="phase" ng-show="actPhase === 1 && !hidePhase">
                            <div class="EQN">
                                <input class="longIn" ng-change="checkQN(EQNin)" ng-model="EQNin" id="EQNin" placeholder="Enter Quote ID" type="text" />
                                <button class="clickEQN" ng-class="{clickEQNdis: !possibleQuoteContin}" ng-click="procPrevShipID()">Proceed</button>
                                <font class="searchMsg" ng-show="phse1SearchMsg !== ''">{{phse1SearchMsg}}</font>
                            </div>
                            <div class="addresses" layout="row">
                                <div class="addr O">
                                    <font class="title" ng-class="{titleRight: swapLocs}">{{oLoc}}</font>
                                    <input class="siteAddrOne" ng-change="setOriginStreet(siteOrStreet)" ng-model="siteOrStreet" id="siteOrStreet" placeholder="Street Address" type="text" />
                                    <input class="siteAddrOne" ng-change="setOriginCity(siteOrCity)" ng-model="siteOrCity" id="siteOrCity" placeholder="City" type="text" />
                                    <input class="siteAddrOne" ng-change="setOriginProv(siteOrProv)" ng-model="siteOrProv" id="siteOrProv" placeholder="Province / State" type="text" />
                                    <div class="lastLine" layout="row">
                                        <input class="sitePostOne" ng-change="setOriginPost(siteOrPost)" ng-model="siteOrPost" id="siteOrPost" placeholder="Postal Code" type="text" />
                                        <div class="siteCountry" id="orlocDropT" ng-click="togOrCoDr()" ng-blur="closeOrCoDr()">
                                            <font class="txt">{{orCountry}}</font>
                                            <ng-md-icon class="icon orig" icon="{{orLocDropArrow}}" size="20"></ng-md-icon>
                                        </div>
                                        <div class="countryDrop" ng-show="orCoDr" ng-mouseleave="closeOrCoDr()">
                                            <div class="scrl">
                                                <div class="list" ng-repeat="country in countries" ng-click="setNewOrCountry($index)">
                                                    <font class="txt">{{country.name}}</font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="addr D">
                                    <font class="title" ng-class="{titleLeft: swapLocs}">{{dLoc}}</font>
                                    <input class="siteAddrOne" ng-change="setDestStreet(siteDeStreet)" ng-model="siteDeStreet" id="siteDeStreet" placeholder="Street Address" type="text" />
                                    <input class="siteAddrOne" ng-change="setDestCity(siteDeCity)" ng-model="siteDeCity" id="siteDeCity" placeholder="City" type="text" />
                                    <input class="siteAddrOne" ng-change="setDestProv(siteDeProv)" ng-model="siteDeProv" id="siteDeProv" placeholder="Province / State" type="text" />
                                    <div class="lastLine" layout="row">
                                        <input class="sitePostOne" ng-change="setDestPost(siteDePost)" ng-model="siteDePost" id="siteDePost" placeholder="Postal Code" type="text" />
                                        <div class="siteCountry" ng-click="togDeCoDr()" ng-blur="closeDeCoDr()">
                                            <font class="txt">{{deCountry}}</font>
                                            <ng-md-icon class="icon" icon="{{deLocDropArrow}}" size="20"></ng-md-icon>
                                        </div>
                                        <div class="countryDrop" ng-show="deCoDr" ng-mouseleave="closeDeCoDr()">
                                            <div class="scrl">
                                                <div class="list" ng-repeat="country in countries" ng-click="setNewDeCountry($index)">
                                                    <font class="txt">{{country.name}}</font>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="switch" layout="column" ng-click="swapLocations()">
                                <font class="txt">Switch</font>
                                <ng-md-icon class="icon f" ng-class="{fAct: swapLocs}" icon="arrow_forward" size="15"></ng-md-icon>
                                <ng-md-icon class="icon b" ng-class="{bAct: swapLocs}" icon="arrow_back" size="15"></ng-md-icon>
                            </div>
                        </div>
                    </div>
                    <!------------------------------------------------ Phase Controlls -------------------------------------------------->
                    <div class="controls">
                        <button class="canc" ng-click="toPrevPhase()" ng-class="{cancGone: actPhase === 1 || paymentLoading}" >Back</button>
                        <div class="txtSect" layout="row">
                            <div class="center">
                                <font class="txt one">Step</font>
                                <font class="txt two"> {{actPhase}} </font>
                                <font class="txt three">of 6</font>
                            </div>

                        </div>
                        <button class="proc" ng-click="toNextPhase()" ng-class="{procDis: !validStep, procGone: actPhase === 6}">Proceed</button>
                    </div>
                </div>

                <!------------------------------------------------ Mini Login -------------------------------------------------->
                <div class="containerMain">
                    <form id="loginForm" name="form" ng-show="$root.mainTabDisp === 'miniLogin'" ng-submit="miniLogin()" role="form" class="quote">
                        <font class="head">Login</font>
                        <div class="contentCont">
                            <input type="text" class="input" name="miniLogEmail" id="miniLogEmail" ng-model="miniLogEmail" placeholder="Email Address" ng-change="clearError(); setLogMail(miniLogEmail)" required/>
                        </div>
                        <div class="contentCont">
                            <input type="password" class="input" id="miniLogPass" ng-model="miniLogPass" placeholder="Password" ng-change="clearError(); setLogPass(miniLogPass)" required />
                        </div>

                        <div class="underInput" layout="row">
                            <font class="forgottPW" ng-click="selectContainerMain('fpass')">Forgot Password?</font>
                            <font class="regButt" ng-click="selectContainerMain('reg')">Register</font>
                        </div>

                        <font class="qtMsg" ng-class="{qtEr: miniLogResp.includes('Error')}">{{miniLogResp}}</font>
                        <button class="quoteBtn" ng-click="miniLogin()" ng-disabled="form.$invalid || loading">Login</button>

                    </form>
                    <!------------------------------------------------ Register -------------------------------------------------->
                    <div class="register" ng-show="$root.mainTabDisp === 'reg'">
                        <div class="regPage" layout="column">
                            <font class="head">Register</font>
                            <div class="contentCont">
                                <input class="input" type="text" id="regNameb" ng-model="regNamePriv" placeholder="First Name" ng-change="validateReg('uname', regNamePriv)" required />
                            </div>
                            <div class="contentCont">
                                <input class="input" type="text" id="regMailb" ng-model="regMailPriv" placeholder="Email" ng-change="validateReg('email', regMailPriv)" required />
                            </div>
                            <div class="contentCont">
                                <input class="input" type="password" id="regPassb" ng-model="regPass" placeholder="Password" ng-change="validateReg('password', regPass)" required />
                            </div>
                            <div class="contentCont">
                                <input class="input" type="password" id="regPassConb" ng-model="regPassCon" placeholder="Confirm Password" ng-change="validateReg('passwordCon', regPassCon)" required />
                            </div>
                            <div class="underReg">
                                <font class="logBtn" ng-click="selectContainerMain('miniLogin')">Login</font>
                            </div>

                            <font class="msg" ng-class="{msgEr: !regMsg.includes('Successful!')}">{{regMsg}}</font>
                            <button class="regButton" ng-click="userRegister(regType)">Register</button>
                        </div>
                    </div>
                    <!------------------------------------------------ Forgot Password -------------------------------------------------->
                    <form id="loginFormPass" name="formPass" ng-show="$root.mainTabDisp === 'fpass'" ng-submit="$root.reset()" role="form" class="fPass">
                        <font class="head">Password Reset</font>
                        <div class="contentCont">
                            <input class="input" type="text" id="fPW" ng-model="fPW" placeholder="Email Address" ng-change="$root.validateReset(fPW)" required />
                        </div>
                        <font class="forgotPW" ng-click="selectContainerMain('miniLogin')">Back To Login</font>
                        <button class="resetBtn" ng-click="$root.reset()" ng-disabled="formPass.$invalid || loading">Reset Password</button>
                        <div class="logErrorMsg" ng-class="{logErrorMsgOK: $root.resetResp.includes('Successfully')}" ng-show="$root.resetResp !== null">{{$root.resetResp}}</div>
                    </form>
                    <!------------------------------------------------ Logged In Profile -------------------------------------------------->
                    <div class="loggedProf" ng-show="$root.mainTabDisp === 'miniProf'">
                        <div class="head" layout="row">
                            <div class="profPic">
                                <ng-md-icon class="icon" icon="account_circle" size="80"></ng-md-icon>
                                <img class="crp" ng-class="{crpNone: dispMiniImg === ''}" ng-src="{{dispMiniImg}}"/>
                            </div>
                            <div class="title" layout="column">
                                <font class="nme">{{miniName}}</font>
                                <font class="comp">Private</font>
                            </div>
                        </div>
                        <div class="dets">
                            <div class="line">
                                <font class="ttl">Email:</font>
                                <font class="data">{{miniMail}}</font>
                            </div>
                            <div class="line">
                                <font class="ttl">Tel:</font>
                                <font class="data">{{miniTel}}</font>
                            </div>
                            <div class="line">
                                <font class="ttl">Address:</font>
                                <font class="data">{{miniAdr}}</font>
                            </div>
                            <div class="line">
                                <font class="ttl">City:</font>
                                <font class="data">{{miniCity}}</font>
                            </div>
                            <div class="line">
                                <font class="ttl">Country:</font>
                                <font class="data">{{miniCount}}</font>
                            </div>
                            <div class="line">
                                <font class="ttl">Postal Code:</font>
                                <font class="data">{{miniPost}}</font>
                            </div>
                        </div>
                        <div class="out" layout="row" ng-click="logout()">
                            <font class="txt">Sign Out</font>
                            <ng-md-icon class="icon" icon="logout" size="25"></ng-md-icon>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <!------------------------------------------------ About Us -------------------------------------------------->
        <div class="mainPageCont" ng-if="$root.curPage === 1">
            <div class="aboutUs" ng-init="resetPageCounters()">
                <div class="overlay">
                    <div class="left" layout="column">
                        <div class="head"><font class="txt">About Intellicargo International</font></div>
                        <div class="info">
                            <font class="txt">{{AboutUsInfo}}</font>
                        </div>
                    </div>
                    <div class="right" layout="column">
                        <div class="row top">
                            <div class="block one" layout="row">
                                <font class="count">{{aboutOne}}</font>
                                <font class="plus">+</font>
                                <font class="txt">Industry Experts Within Our Network</font>
                                <md-icon md-svg-src="Images/SVG/Customer.svg" class="ico"></md-icon>
                            </div>
                        </div>
                        <div class="row mid" layout="row">
                            <div class="block two" layout="column">
                                <font class="count">{{aboutTwo}} +</font>
                                <md-icon md-svg-src="Images/SVG/Global Countries.svg" class="ico"></md-icon>
                                <font class="txt">Serviced Countries</font>
                            </div>

                            <div layout="column" style="width: calc(50% - 5px)">
                                <div class="block three" layout="column">
                                    <font class="count">{{aboutThree}} +</font>
                                    <md-icon md-svg-src="Images/SVG/airplane-shape.svg" class="ico"></md-icon>
                                    <font class="txt">Major Airlines</font>
                                </div>
                                <div class="block four" layout="column">
                                    <font class="count">{{aboutFour}} +</font>
                                    <md-icon md-svg-src="Images/SVG/boat.svg" class="ico"></md-icon>
                                    <font class="txt">Major Shipping Lines</font>
                                </div>
                            </div>
                        </div>
                        <div class="row bot" layout="row">
                            <div class="block five" layout="column">
                                <font class="count">{{aboutFive}} +</font>
                                <md-icon md-svg-src="Images/SVG/boxCircle.svg" class="ico"></md-icon>
                                <font class="txt">Solutions</font>
                            </div>
                            <div class="block five" layout="column">
                                <font class="count">{{aboutSix}} +</font>
                                <md-icon md-svg-src="Images/SVG/handshake.svg" class="ico"></md-icon>
                                <font class="txt">Global Logistics SP</font>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <!------------------------------------------------ Transport Services -------------------------------------------------->
        <div class="mainPageCont" ng-if="$root.curPage === 2">
            <div class="transpServ">
                <div class="overlay">
                    <div class="contain" layout="column">
                        <div class="top" layout="row">
                            <div class="big" layout="column">
                                <div class="divTop">
                                    <font class="divHead">{{headOne}}</font>
                                    <md-icon md-svg-src="Images/SVG/international-travel-and-tourism.svg" class="divIco" ng-click=""></md-icon>
                                </div>
                                <font class="divTxt">{{textOne}}</font>
                                <div class="listing" layout="column">
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoExpress</div>
                                        <div class="nme">International Document</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoExpress</div>
                                        <div class="nme">International Parcel</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoExpress</div>
                                        <div class="nme">International Distribution</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoExpress</div>
                                        <div class="nme">eCommerce</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoExpress</div>
                                        <div class="nme">Fulfillment</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoExpress</div>
                                        <div class="nme">Pharma & Healthcare</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoExpress</div>
                                        <div class="nme">Domestic</div>
                                    </div>
                                </div>
                            </div>
                            <div class="sml" layout="column">
                                <div class="divTop">
                                    <font class="divHead">{{headFive}}</font>
                                    <md-icon md-svg-src="Images/SVG/international-delivery.svg" class="divIco"></md-icon>
                                </div>
                                <font class="divTxt">{{textFive}}</font>
                                <div layout="row">
                                    <div class="listingNo" layout="column">
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargoAir</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargoOcean</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargoRoad</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargoRail</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargoExpress</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargoDistribution</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargoProduction</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargoFulfillment</div>
                                        </div>
                                    </div>
                                    <div class="listingNo" layout="column">
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargo Aftermarket</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargo eCommerce</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargo Spares</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargo Projects</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargo Warehousing</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargo Industries Specialised</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargo Management Systems</div>
                                        </div>
                                        <div class="itemise" layout="row">
                                            <div class="ar">> iCargo Technologies</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bot" layout="row">
                            <div class="sml" layout="column">
                                <div class="divTop">
                                    <font class="divHead">{{headTwo}}</font>
                                    <md-icon md-svg-src="Images/SVG/airplane-shape.svg" class="divIco" ></md-icon>
                                </div>
                                <font class="divTxt">{{textTwo}}</font>
                                <div class="listing" layout="column">
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoAir</div>
                                        <div class="nme">Priority</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoAir</div>
                                        <div class="nme">Express</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoAir</div>
                                        <div class="nme">Economy</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoAir</div>
                                        <div class="nme">Charter Service</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoAir</div>
                                        <div class="nme">Temperature Controlled</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoAir</div>
                                        <div class="nme">Multimodal Solutions</div>
                                    </div>
                                </div>
                            </div>
                            <div class="smlOne" layout="column">
                                <div class="divTop">
                                    <font class="divHead">{{headThree}}</font>
                                    <md-icon md-svg-src="Images/SVG/boat.svg" class="divIco"></md-icon>
                                </div>
                                <font class="divTxt">{{textThree}}</font>
                                <div class="listing" layout="column">
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoOcean</div>
                                        <div class="nme">FCL (Full Container Load)</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoOcean</div>
                                        <div class="nme">LCL (Less than Container Load)</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoOcean</div>
                                        <div class="nme">Bulk & Breakbulk</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoOcean</div>
                                        <div class="nme">Charter Services</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoOcean</div>
                                        <div class="nme">Temperature Controlled</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoOcean</div>
                                        <div class="nme">Multiline Console</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoOcean</div>
                                        <div class="nme">Multimodal</div>
                                    </div>
                                </div>
                            </div>
                            <div class="smlOne" layout="column">
                                <div class="divTop">
                                    <font class="divHead">{{headFour}}</font>
                                    <md-icon md-svg-src="Images/SVG/fast-delivery.svg" class="divIco" ></md-icon>
                                </div>
                                <font class="divTxt">{{textFour}}</font>
                                <div class="listing" layout="column">
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoLand</div>
                                        <div class="nme">Road FTL (Full Truck Load)</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoLand</div>
                                        <div class="nme">Road LTL (Less than Truck Load)</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoLand</div>
                                        <div class="nme">Road Groupage</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoLand</div>
                                        <div class="nme">Road Distribution</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoLand</div>
                                        <div class="nme">Rail FCL & LCL</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoLand</div>
                                        <div class="nme">Rail Specialised</div>
                                    </div>
                                    <div class="itemise" layout="row">
                                        <div class="ar">></div>
                                        <div class="srv">iCargoLand</div>
                                        <div class="nme">Rail Multimodal</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!------------------------------------------------ Technology Overview -------------------------------------------------->
        <div class="mainPageCont" ng-if="$root.curPage === 3">
            <div class="techOver">
                <div class="overlay">
                    <div class="contain" layout="row">
                        <div class="div" layout="column">
                            <font class="head">{{techheadOne}}</font>
                            <div class="img one"></div>
                            <font class="ttl">{{techTtlOne}}</font>
                            <font class="txt">{{techTxtOne}}</font>
                        </div>
                        <div class="div" layout="column">
                            <font class="head">{{techheadTwo}}</font>
                            <div class="img two"></div>
                            <font class="ttl">{{techTtlTwo}}</font>
                            <font class="txt">{{techTxtTwo}}</font>
                        </div>
                        <div class="div" layout="column">
                            <font class="head">{{techheadThree}}</font>
                            <div class="img three"></div>
                            <font class="ttl">{{techTtlThree}}</font>
                            <font class="txt">{{techTxtThree}}</font>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!------------------------------------------------ Solutions Overview -------------------------------------------------->
        <div class="mainPageCont" ng-if="$root.curPage === 4">
            <div class="solutOv">
                <div class="overlay">
                    <div class="contain" layout="column">
                        <div class="top" layout="row">
                            <div class="sml" layout="column">
                                <div class="divTop">
                                    <font class="divHead">{{solheadOne}}</font>
                                    <md-icon md-svg-src="Images/SVG/Delivered ICON.svg" class="divIco" ng-click=""></md-icon>
                                </div>
                                <font class="divTxt">{{soltextOne}}</font>
                            </div>
                            <div class="smlOne" layout="column">
                                <div class="divTop">
                                    <font class="divHead">{{solheadTwo}}</font>
                                    <md-icon md-svg-src="Images/SVG/handshake.svg" class="divIco" ng-click=""></md-icon>
                                </div>
                                <font class="divTxt">{{soltextTwo}}</font>
                            </div>
                            <div class="smlOne" layout="column">
                                <div class="divTop">
                                    <font class="divHead">{{solheadThree}}</font>
                                    <md-icon md-svg-src="Images/SVG/box.svg" class="divIco" ng-click=""></md-icon>
                                </div>
                                <font class="divTxt">{{soltextThree}}</font>
                            </div>
                        </div>
                        <div class="bot" layout="row">
                            <div class="sml" layout="column">
                                <div class="divTop">
                                    <font class="divHead">{{solheadFour}}</font>
                                    <md-icon md-svg-src="Images/SVG/world.svg" class="divIco" ng-click=""></md-icon>
                                </div>
                                <font class="divTxt">{{soltextFour}}</font>
                            </div>
                            <div class="smlOne" layout="column">
                                <div class="divTop">
                                    <font class="divHead">{{solheadFive}}</font>
                                    <md-icon md-svg-src="Images/SVG/shopping-cart.svg" class="divIco" ng-click=""></md-icon>
                                </div>
                                <font class="divTxt">{{soltextFive}}</font>
                            </div>
                            <div class="smlOne" layout="column">
                                <div class="divTop">
                                    <font class="divHead">{{solheadSix}}</font>
                                    <md-icon md-svg-src="Images/SVG/arrow.svg" class="divIco" ng-click=""></md-icon>
                                </div>
                                <font class="divTxt">{{soltextSix}}</font>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!------------------------------------------------ Contact Us -------------------------------------------------->
        <div class="mainPageCont" ng-if="$root.curPage === 5">
            <div class="overlayEnq">
                <div class="contactForm" layout="column" ng-if="!showEnqStatus">
                    <font class="headerTxt">{{enqHead}}</font>
                    <div class="desc">
                        <font class="descript">{{enqDesc}}</font>
                        <font class="descriptSpec">{{enqDescSpec}}</font>
                        <font class="descript">{{enqDescCont}}</font>
                    </div>
                    <div class="form" layout="column">
                        <div class="bar thin">
                            <input ng-change="newFullname(webEnqName)" ng-model="webEnqName" id="webEnqName" placeholder="Name & Surname" class="in" type="text" />
                        </div>
                        <div class="bar thin">
                            <input ng-change="newEmail(webEnqMail)" ng-model="webEnqMail" id="webEnqMail" placeholder="Email" class="in" type="text" />
                        </div>
                        <div class="bar thin">
                            <div class="toDrop" ng-click="togEnqDrop()">
                                <font class="txt">{{enqOpt}}</font>
                                <ng-md-icon class="icon" icon="{{enqOptArrow}}" size="25"></ng-md-icon>
                                <div class="drop" ng-if="showEnqDrop">
                                    <div class="scr" layout="column">
                                        <div class="list" ng-repeat="item in enqList">
                                            <div class="cont" ng-click="newEnqType(item.title)">
                                                <font class="item">{{item.title}}</font>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bar thick">
                            <textarea ng-change="newMessage(webEnqMsg)" ng-model="webEnqMsg" id="webEnqMsg" placeholder="Message" class="in" ></textarea>
                        </div>
                        <font class="msg" ng-class="{msgFail: enqResult === 'Enquiry Submition Failed.'}">{{enqResult}}</font>
                        <button class="submit" ng-class="{submitDis: !isValidEnq}" ng-click="sendNewEnq()">Send Enquiry</button>
                    </div>
                </div>

            </div>
        </div>

        <!------------------------------------------------ Footer -------------------------------------------------->
        <div class="footer" ng-class="{fullFooter: $root.curPage === 6}">
            <div id="smallFoot" ng-if="$root.curPage !== 6">
                <div class="border"></div>
                <div class="txt"  ng-if="$root.dispCurPageTitle">{{menuOptionList[$root.curPage].title}}</div>
            </div>
            <div id="bigFoot" ng-if="$root.curPage === 6">
                <div class="content">
                    <div class="top" layout="row">
                        <div class="left" layout="row">
                            <div class="list bord" layout="column">
                                <div class="item" layout="row">
                                    <md-icon md-svg-src="Images/SVG/international-delivery.svg" class="ico"></md-icon>
                                    <font class="txts">Africa</font>
                                </div>
                                <div class="item" layout="row">
                                    <md-icon md-svg-src="Images/SVG/international-delivery.svg" class="ico"></md-icon>
                                    <font class="txts">Asia</font>
                                </div>
                                <div class="item" layout="row">
                                    <md-icon md-svg-src="Images/SVG/international-delivery.svg" class="ico"></md-icon>
                                    <font class="txts">Australia & Oceana</font>
                                </div>
                                <div class="item" layout="row">
                                    <md-icon md-svg-src="Images/SVG/international-delivery.svg" class="ico"></md-icon>
                                    <font class="txts">Europe</font>
                                </div>
                                <div class="item" layout="row">
                                    <md-icon md-svg-src="Images/SVG/international-delivery.svg" class="ico"></md-icon>
                                    <font class="txts">North America</font>
                                </div>
                                <div class="item" layout="row">
                                    <md-icon md-svg-src="Images/SVG/international-delivery.svg" class="ico"></md-icon>
                                    <font class="txts">South America</font>
                                </div>
                            </div>
                            <div class="list" layout="column">
                                <div class="item">
                                    <font class="mail">info@intellicargoglobal.com</font>
                                </div>
                                <div class="item">
                                    <font class="mail">info@intellicargoglobal.com</font>
                                </div>
                                <div class="item">
                                    <font class="mail">info@intellicargoglobal.com</font>
                                </div>
                                <div class="item">
                                    <font class="mail">info@intellicargoglobal.com</font>
                                </div>
                                <div class="item">
                                    <font class="mail">info@intellicargoglobal.com</font>
                                </div>
                                <div class="item">
                                    <font class="mail">info@intellicargoglobal.com</font>
                                </div>
                            </div>
                            <div class="listLast" layout="column">
                                <div class="item">
                                    <font class="txts">Products & Services</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mailb">Air</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mailb">Ocean</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mailb">Road</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mailb">Rail</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mailb">Express</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mailb">Warehousing</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mailb">SupplyChain</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mailb">Online</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mailb">Fulfill</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mailb">Trade</font>
                                </div>

                            </div>
                        </div>
                        <div class="right">
                            <div class="topLeft">
                                <font class="txt">Please note that all products are subject to availablility withineach global section and it's countries.</font>
                            </div>
                            <div class="toTop" ng-click="selectDispPage(0)">
                                <ng-md-icon class="icon" icon="keyboard_arrow_up" size="40"></ng-md-icon>
                                <font class="toptxt">Back To Top</font>
                            </div>
                            <img src="Images/Intellicargo Logo White small.png" class="footImg" />
                            <!--<div class="social" layout="row">
                                <div class="circ">
                                    <ng-md-icon class="icon" icon="linkedin" size="20"></ng-md-icon>
                                </div>
                                <div class="circ">
                                    <ng-md-icon class="icon" icon="google-plus" size="20"></ng-md-icon>
                                </div>
                                <div class="circ">
                                    <ng-md-icon class="icon" icon="facebook" size="20"></ng-md-icon>
                                </div>
                                <div class="circ">
                                    <ng-md-icon class="icon" icon="twitter" size="20"></ng-md-icon>
                                </div>
                            </div>-->
                        </div>

                    </div>
                    <div class="bot">
                        <font class="ttl">Copyright Intellicargo International Group 2018. All Rights Reserved</font>
                        <div class="right" layout="row">
                            <font class="btn" ng-click="showTerms = true">Terms & Conditions</font>
                            <!--<font class="btn bord">Payment Policy</font>-->
                        </div>
                    </div>
                    <div class="terms" ng-show="showTerms === true">
                        <font class="close" ng-click="showTerms = false">Close</font>
                        <div class="cont">
                            <font class="info">{{terms}}</font>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!------------------------------------------------ Quote Popup -------------------------------------------------->
    <div class="QteSum" ng-show="showQteSumPop">
    <!--<div class="QteSum" ng-show="showQteSumPop">-->
        <div class="container">
            <div class="block" ng-show="qtPop === 0">
                <font class="title">Quote Summary</font>
                <font class="close" ng-click="closeQteSumPop()">Close</font>
                <div class="scr" layout="column">
                    <div class="sect" layout="column" ng-repeat="section in quoteSuum">
                        <font class="title">{{section.title}}</font>
                        <div class="line" ng-repeat="line in section.subs">
                            <font class="ttl">{{line.title}}</font>
                            <font class="data">{{line.data}}</font>
                        </div>
                    </div>
                    <div class="bot" layout="row">
                        <div class="info">
                            <font class="txt">{{acceptTxh}}</font>
                        </div>
                        <button class="btn" ng-click="requestQte()">Accept</button>
                    </div>
                </div>
            </div>
            <div class="block" ng-show="qtPop === 1">
                <font class="title">Quote Result</font>
                <font class="close" ng-click="closeQteSumPop()">Close</font>
                <div class="scr" layout="column">
                    <font class="infoTxt">Your request has been received successfully.<br>Check your email regularly for updates and quote returns.</font>
                    <div class="bot" layout="row">
                        <button class="btn" ng-click="closeQteSumPop()">Continue</button>
                    </div>
                </div>
            </div>
            <div class="block" ng-show="qtPop === 2">
                <font class="title">Term & Conditions</font>
                <font class="close" ng-click="closeQteSumPop()">Close</font>
                <div class="scr" layout="column">
                    <font class="payTerms">{{payTerms}}</font>
                    <div class="bot" layout="row">
                        <button class="btn" ng-click="acceptPayTerms()">Accept</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>