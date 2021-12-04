<div class="mainBodyMobile" id="logisticsMob" ng-show="$root.indexReady">
    <!------------------------------------------------ Header -------------------------------------------------->
    <div class="headerBar">
        <div class="leftSide" layout="row">
            <div class="leftMen" ng-click="$root.togSideMenu('click')" ng-blur="closeLeftMen()">
                <ng-md-icon class="menuIcon" icon="{{headMenu}}" size="100"></ng-md-icon>
            </div>
            <img src="Images/Intellicargo Logo small.png" class="headIcon" ng-click="toMain()"/>
        </div>
        <div class="rightSide" ng-click="$root.loginRegister()">
            <ng-md-icon class="menuIcon" icon="dashboard" size="100"></ng-md-icon>
        </div>
    </div>
    <!------------------------------------------------ Left Menu -------------------------------------------------->
    <div class="menuLeftOpen" ng-show="showFullLeftMenu">
        <div class="options" layout="column">
            <div class="menuList" ng-repeat="option in menuOptionList">
                <div class="item" ng-class="{itemActive: $root.selectedPage === option.id && showFullLeftMenu}" ng-click="selectDispPage(option.id)" layout="row">
                    <font class="txt" ng-class="{txtActive: $root.selectedPage === option.id}" ng-if="showFullLeftMenu">{{option.title}}</font>
                </div>
            </div>
        </div>
    </div>
    <!------------------------------------------------ Right Menu -------------------------------------------------->
    <div ng-class="{profIconMain: showProfMenuIco, profIconMainHide: !showProfMenuIco}" ng-click="$root.togSideMenu('clickProf')">
        <ng-md-icon class="icon" icon="account_circle" size="120"></ng-md-icon>
        <img class="crp" ng-class="{crpNone: dispMiniImg === ''}" ng-src="{{dispMiniImg}}"/>
    </div>
    <div class="menuRightOpen" ng-show="showFullRightMenu">
        <!------------------------------------------------ Mini Login -------------------------------------------------->
        <div class="containerMain" layout="row">
            <div class="close" ng-click="$root.togSideMenu('clickProf')"><font class="txt">X</font></div>
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
                <br>
                <button class="quoteBtn" ng-click="miniLogin()" ng-disabled="form.$invalid || loading">Login</button>

            </form>
            <!------------------------------------------------ Register -------------------------------------------------->
            <div class="register" ng-show="$root.mainTabDisp === 'reg'">
                <div class="regPage" layout="column">
                    <font class="head">Register</font>
                    <div class="contentCont">
                        <input class="input" type="text" id="regNameb" ng-model="regNamePriv" placeholder="Username" ng-change="validateReg('uname', regNamePriv)" required />
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
                    <br>
                    <font class="msg" ng-class="{msgEr: !regMsg.includes('Successful!')}">{{regMsg}}</font>
                    <br>
                    <button class="regButton" ng-click="userRegister(regType)">Register</button>
                </div>
            </div>
            <!------------------------------------------------ Forgot Password -------------------------------------------------->
            <form id="loginFormPass" name="formPass" ng-show="$root.mainTabDisp === 'fpass'" ng-submit="resetPass()" role="form" class="fPass" layout="column">
                <font class="head">Password Reset</font>
                <div class="contentCont">
                    <input class="input" type="text" id="fPW" ng-model="fPW" placeholder="Email Address" ng-change="" required />
                </div>
                <font class="forgottPW" ng-click="selectContainerMain('miniLogin')">Back To Login</font>
                <br>
                <div class="logErrorMsg" ng-class="{logErrorMsgOK: resetResp.includes('Successfully')}" ng-show="logError">{{logErrorMsg}}</div>
                <br>
                <button class="resetBtn" ng-click="resetPass()" ng-disabled="formPass.$invalid || loading">Reset Password</button>

            </form>
            <!------------------------------------------------ Logged In Profile -------------------------------------------------->
            <div class="loggedProf" ng-show="$root.mainTabDisp === 'miniProf'">
                <div class="head" layout="row">
                    <div class="profPic">
                        <ng-md-icon class="icon" icon="account_circle" size="250"></ng-md-icon>
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
                    <ng-md-icon class="icon" icon="logout" size="50"></ng-md-icon>
                </div>
            </div>
        </div>
    </div>
    <!------------------------------------------------ Main Page -------------------------------------------------->
    <div id="mainPage" class="mainPage">
        <div ng-class="{mainPageContAct: $root.curPage === 0, mainPageContTop: $root.curPage > 0}">
            <div class="med-overlay">
                <div class="phases" layout="row">
                    <!------------------------------------------------ Phase 1 -------------------------------------------------->
                    <div class="phase" ng-show="actPhase === 1 && !hidePhase">
                        <font class="title">Book / Track</font>
                        <div class="EQN">
                            <input class="longIn" ng-change="checkQN(EQNin)" ng-model="EQNin" id="EQNin" placeholder="Enter Shipment ID" type="text" />
                            <button class="clickEQN" ng-class="{clickEQNdis: !possibleQuoteContin}" ng-click="procPrevShipID()">GO</button>
                            <br>
                            <font class="searchMsg" ng-show="phse1SearchMsg !== ''">{{phse1SearchMsg}}</font>
                        </div>
                        <font class="title">New Quote</font>
                        <div class="addresses" layout="row">
                            <div class="addr O" ng-show="adrPage === 1" layout="column">
                                <font class="title" ng-class="{titleRight: swapLocs}">{{oLoc}}</font>
                                <input class="siteAddrOne" ng-change="setOriginStreet(siteOrStreet)" ng-model="siteOrStreet" id="siteOrStreet" placeholder="Street Address" type="text" />
                                <input class="siteAddrOne" ng-change="setOriginCity(siteOrCity)" ng-model="siteOrCity" id="siteOrCity" placeholder="City" type="text" />
                                <input class="siteAddrOne" ng-change="setOriginProv(siteOrProv)" ng-model="siteOrProv" id="siteOrProv" placeholder="Province / State" type="text" />
                                <div class="lastLine" layout="row">
                                    <input class="sitePostOne" ng-change="setOriginPost(siteOrPost)" ng-model="siteOrPost" id="siteOrPost" placeholder="Postal Code" type="text" />
                                    <div class="siteCountry" id="orlocDropT" ng-click="togOrCoDr()" ng-blur="closeOrCoDr()">
                                        <font class="txt">{{orCountry}}</font>
                                        <ng-md-icon class="icon" icon="{{orLocDropArrow}}" size="50"></ng-md-icon>
                                    </div>
                                    <div class="countryDrop" ng-show="orCoDr">
                                        <div class="scrl">
                                            <div class="list" ng-repeat="country in countries" ng-click="setNewOrCountry($index)">
                                                <font class="txt">{{country.name}}</font>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="addr D" ng-show="adrPage === 2" layout="column">
                                <font class="title" ng-class="{titleLeft: swapLocs}">{{dLoc}}</font>
                                <input class="siteAddrOne" ng-change="setDestStreet(siteDeStreet)" ng-model="siteDeStreet" id="siteDeStreet" placeholder="Street Address" type="text" />
                                <input class="siteAddrOne" ng-change="setDestCity(siteDeCity)" ng-model="siteDeCity" id="siteDeCity" placeholder="City" type="text" />
                                <input class="siteAddrOne" ng-change="setDestProv(siteDeProv)" ng-model="siteDeProv" id="siteDeProv" placeholder="Province / State" type="text" />
                                <div class="lastLine" layout="row">
                                    <input class="sitePostOne" ng-change="setDestPost(siteDePost)" ng-model="siteDePost" id="siteDePost" placeholder="Postal Code" type="text" />
                                    <div class="siteCountry" ng-click="togDeCoDr()" ng-blur="closeDeCoDr()">
                                        <font class="txt">{{deCountry}}</font>
                                        <ng-md-icon class="icon" icon="{{deLocDropArrow}}" size="50"></ng-md-icon>
                                    </div>
                                    <div class="countryDrop" ng-show="deCoDr">
                                        <div class="scrl">
                                            <div class="list" ng-repeat="country in countries" ng-click="setNewDeCountry($index)">
                                                <font class="txt">{{country.name}}</font>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!------------------------------------------------ Phase 2 -------------------------------------------------->
                    <div class="phase" ng-show="actPhase === 2 && !hidePhase">
                        <div class="title">Shipment Information</div>
                        <div class="row" layout="column">
                            <div class="one" ng-click="togServDrop()" ng-blur="closeServDrop()">
                                <font class="txt">{{selServ}}</font>
                                <ng-md-icon class="icon" ng-class="{bAct: swapLocs}" icon="{{servDropArrow}}" size="60"></ng-md-icon>
                            </div>
                            <div class="drop servType" ng-show="servDr" ng-mouseleave="closeServDrop()">
                                <div class="scr">
                                    <div class="listt" ng-repeat="item in shipServType" ng-click="setService($index)">
                                        <font class="txt">{{item.title}}</font>
                                    </div>
                                </div>
                            </div>
                            <div class="one" ng-click="togIncoDrop()" ng-blur="closeIncoDrop()">
                                <font class="txt">{{selIncoterm}}</font>
                                <ng-md-icon class="icon" ng-class="{bAct: swapLocs}" icon="{{incoDropArrow}}" size="60"></ng-md-icon>
                            </div>
                            <div class="drop incoTerm" ng-show="incoDr" ng-mouseleave="closeIncoDrop()">
                                <div class="scr">
                                    <div class="listt" ng-repeat="item in incoterms" ng-click="setIncoterm($index)">
                                        <font class="txt">{{item.ttl}}</font>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="title">
                            <font class="ttl">Item Information</font>
                            <div class="toggle" layout="row" ng-click="togMainQuoteItemUnit()">
                                <font class="txt" ng-class="{txtAct: mainQuoteItemUnit === 'Metric'}">Metric</font>
                                <div class="switch">
                                    <div class="bar"></div>
                                    <div class="dot" ng-class="{dotRight: mainQuoteItemUnit === 'Imperial'}"></div>
                                </div>
                                <font class="txt" ng-class="{txtAct: mainQuoteItemUnit === 'Imperial'}">Imperial</font>
                            </div>
                        </div>
                        <div class="scr">
                            <div class="list" ng-repeat="item in mainQuoteItemList">
                                <div class="row" layout="row">
                                    <div class="num">
                                        <font class="txt">{{$index + 1}}</font>
                                    </div>
                                    <input class="in aa" ng-readonly="($index + 1) !== mainQuoteItemList.length" ng-change="setDescript($index, siteItemDescr)" ng-model="siteItemDescr" id="siteItemDescr{{$index}}" placeholder="Description" type="text" />
                                    <input class="in bb" ng-readonly="($index + 1) !== mainQuoteItemList.length" ng-change="setHsCode($index, siteItemCode)" ng-model="siteItemCode" id="siteItemCode{{$index}}" placeholder="HS-Code" type="text" />
                                </div>
                                <div class="row" layout="row">
                                    <input class="in cc" ng-readonly="($index + 1) !== mainQuoteItemList.length" id="mainPageTLen{{$index}}" ng-change="setLen($index, mainPageTLen)" ng-model="mainPageTLen" placeholder="Length  ({{itemDimensUnit}})" type="text" />
                                    <input class="in ff" ng-readonly="($index + 1) !== mainQuoteItemList.length" id="mainPageWid{{$index}}" ng-change="setWid($index, mainPageWid)" ng-model="mainPageWid" placeholder="Width  ({{itemDimensUnit}})" type="text" />
                                    <input class="in cc" ng-readonly="($index + 1) !== mainQuoteItemList.length" id="mainPageHei{{$index}}" ng-change="setHei($index, mainPageHei)" ng-model="mainPageHei" placeholder="Height  ({{itemDimensUnit}})" type="text" />
                                </div>
                                <div class="row" layout="row">
                                    <input class="in dd" ng-readonly="($index + 1) !== mainQuoteItemList.length" id="mainPageVal{{$index}}" ng-change="setVal($index, mainPageVal)" ng-model="mainPageVal" placeholder="Value" type="text" />
                                    <div class="curDisp">
                                        <font class="txt">{{itemInfoCur}}</font>
                                    </div>
                                    <div class="curSel" ng-click="togCurPop()">
                                        <font class="txt">Other Currency</font>
                                    </div>
                                    <input class="in bb" ng-readonly="($index + 1) !== mainQuoteItemList.length" id="mainPageWei{{$index}}" ng-change="setWei($index, mainPageWei)" ng-model="mainPageWei" placeholder="Weight  ({{itemWeightUnit}})" type="text" />
                                </div>
                                <div class="row" layout="row">
                                    <input class="in ee" ng-readonly="($index + 1) !== mainQuoteItemList.length" id="mainPageQty" ng-change="setQty($index, mainPageQty)" ng-model="mainPageQty" placeholder="Quantity" type="text" />
                                    <div class="rem" ng-show="mainQuoteItemList.length > 1" ng-click="remItem(item.listId)">
                                        <font class="txt">Remove</font>
                                    </div>
                                </div>
                            </div>
                            <div class="add" ng-click="addToList()">
                                <font class="txt">Add</font>
                                <font class="error" ng-show="newItemEr">Please Complete the current item's info first.</font>
                            </div>
                        </div>
                        <div class="currencyPop" ng-mouseenter="actMiniScrl()" ng-mouseleave="closeCurPop()" ng-show="showCurPop">
                            <div class="scrol">
                                <div class="list" ng-repeat="cur in curList" ng-click="setCurrency($index)">
                                    <font class="txt">{{cur.title}}</font>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!------------------------------------------------ Phase 3 -------------------------------------------------->
                    <div class="phase" ng-show="actPhase === 3 && !hidePhase">
                        <div class="title">
                            <font class="ttl">Contact Information</font>
                        </div>
                        <div class="contact">
                            <div class="row" layout="row">
                                <input class="in" id="mainPageName" ng-change="validateQuote('name', mainPageName)" ng-model="mainPageName" placeholder="Name & Surname" type="text" />
                                <ng-md-icon ng-class="{ico: !isValidNme, icoA: isValidNme}" icon="{{nmeIcon}}" size="70"></ng-md-icon>
                            </div>
                            <div class="row" layout="row">
                                <input class="in" id="mainPageMail" ng-change="validateQuote('mail', mainPageMail)" ng-model="mainPageMail" placeholder="Email Address" type="text" />
                                <ng-md-icon ng-class="{ico: !isValidMail, icoA: isValidMail}" icon="{{mailIcon}}" size="70"></ng-md-icon>
                            </div>
                            <div class="row" layout="row">
                                <input class="in" id="mainPageTel" ng-change="validateQuote('num', mainPageTel)" ng-model="mainPageTel" placeholder="Tel (Optional)" type="text" />
                                <!--<ng-md-icon class="ico" ng-class="{icon: swapLocs}" icon="{{telIcon}}" size="25"></ng-md-icon>-->
                            </div>
                        </div>
                    </div>
                    <!------------------------------------------------ Phase 4 -------------------------------------------------->
                    <div class="phase" ng-show="actPhase === 4 && !hidePhase">
                        <div class="title">
                            <font class="ttl">Available Offers</font>
                        </div>
                        <div class="slider">
                            <div class="listContainer" layout="row">
                                <div class="empty">
                                    <font class="txt" ng-show="quoteOfferList[0].car === undefined">No availible options yet... <br>Please try again later.</font>
                                </div>
                                <div ng-repeat="item in quoteOfferList track by $index" ng-class="{list: $index === actOffer, listP: $index === (actOffer + 1), listM: $index === (actOffer - 1)}" ng-click="selList($index)" ng-show="quoteOfferList[0].car !== undefined">
                                    <div class="headBar">
                                        <font class="carrier">{{item.car}}</font><br>
                                        <font class="service">{{item.serv}}</font>
                                        <div class="time" layout="row">
                                            <font class="num">{{item.tranT}}</font>
                                            <font class="descr" ng-show="item.tranT === '1'">day</font>
                                            <font class="descr" ng-show="item.tranT !== '1'">days</font>
                                        </div>
                                    </div>
                                    <div class="addrBar" layout="column">
                                        <font class="or Country">{{item.countFr}}</font>
                                        <font class="adrr">{{item.adrFr}}</font>
                                        <font class="sep">to</font>
                                        <font class="de Country">{{item.countTo}}</font>
                                        <font class="adrr">{{item.adrTo}}</font>
                                    </div>
                                    <div class="dims" layout="column">
                                        <font class="txt">{{item.vol}} {{item.v}}3</font>
                                        <font class="txt">{{item.wei}} {{item.m}}</font>
                                    </div>
                                    <div class="final" layout="column">
                                        <div class="amount" layout="row">
                                            <font class="cur">{{item.curr}}</font>
                                            <font class="tot"> {{item.inVat}}</font>
                                        </div>
                                        <button class="select" ng-show="actOffer === $index">Selected</button>
                                    </div>
                                </div>
                                <div class="offerInd" ng-show="quoteOfferList[0].car !== undefined">
                                    <div class="dots" layout="row">
                                        <div ng-repeat="dot in quoteOfferList track by $index" ng-class="{dot: $index !== actOffer, dotAct: $index === actOffer}" ng-click="selSpecList($index)">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!------------------------------------------------ Phase 5 -------------------------------------------------->
                    <div class="phase" ng-show="actPhase === 5 && !hidePhase">
                        <font class="title">Logistics Summary</font>
                        <div class="mid" layout="column">
                            <div class="right" layout="column">
                                <font class="carrier">{{quoteOfferList[actOffer].car}}</font>
                                <font class="service">{{quoteOfferList[actOffer].serv}}</font>
                                <div class="time" layout="row">
                                    <font class="num">{{quoteOfferList[actOffer].tranT}}</font>
                                    <font class="descr" ng-show="quoteOfferList[actOffer].tranT === '1'">Day</font>
                                    <font class="descr" ng-show="quoteOfferList[actOffer].tranT !== '1'">Days</font>
                                </div>
                                <div class="dims" layout="column">
                                    <font class="data">{{quoteOfferList[actOffer].wei}} {{quoteOfferList[actOffer].m}}</font>
                                    <font class="data">{{quoteOfferList[actOffer].vol}} {{quoteOfferList[actOffer].v}}3</font>
                                </div>
                            </div>
                            <div class="left">
                                <div class="box" layout="column">
                                    <div class="posi">
                                        <div style="height: 15px"></div>
                                        <div class="chrgItem" layout="row">
                                            <font class="ttl">Origin Charges</font>
                                            <div class="data" layout="row">
                                                <font class="cur">{{quoteOfferList[actOffer].curr}}</font><font class="am">{{dispOrChrg}}</font>
                                            </div>
                                        </div>
                                        <div class="chrgItem" layout="row">
                                            <font class="ttl">Main Charges</font>
                                            <div class="data" layout="row">
                                                <font class="cur">{{quoteOfferList[actOffer].curr}}</font><font class="am">{{dispMainChrg}}</font>
                                            </div>
                                        </div>
                                        <div class="chrgItem" layout="row">
                                            <font class="ttl">Destination Charges</font>
                                            <div class="data" layout="row">
                                                <font class="cur">{{quoteOfferList[actOffer].curr}}</font><font class="am">{{dispDesChrg}}</font>
                                            </div>
                                        </div>
                                        <div class="chrgItem" layout="row">
                                            <font class="ttl">Customs Charges</font>
                                            <div class="data" layout="row">
                                                <font class="cur">{{quoteOfferList[actOffer].curr}}</font><font class="am">{{dispCustChrg}}</font>
                                            </div>
                                        </div>
                                        <div class="chrgItem" layout="row">
                                            <font class="ttl">Duties & Tax</font>
                                            <div class="data" layout="row">
                                                <font class="cur">{{quoteOfferList[actOffer].curr}}</font><font class="am">{{dispVatChrg}}</font>
                                            </div>
                                        </div>
                                        <div class="chrgItem" layout="row">
                                            <font class="ttlTot">Total</font>
                                            <div class="data" layout="row">
                                                <font class="curB">{{quoteOfferList[actOffer].curr}}</font><font class="amB">{{quoteOfferList[actOffer].inVat | number : 2}}</font>
                                            </div>
                                        </div>
                                        <div style="height: 10px"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!------------------------------------------------ Phase 6 -------------------------------------------------->
                    <div class="phase" ng-show="actPhase === 6 && !hidePhase">
                        <div class="box">
                            <div class="puDate" ng-show="sixStep === 1" layout="column">
                                <font class="head">Pickup Date</font>
                                <div class="how" layout="row">
                                    <font class="ttl">Please Select a date between: </font><font class="ttlOne"> {{frmDte}} </font> <font class="ttl"> and </font> <font class="ttlOne"> {{dispTmpvalidTill}}</font>
                                </div>
                                <div class="enter" layout="row">
                                    <input class="in" ng-change="setPickUpDate('Y', bookPickUpDateY)" ng-model="bookPickUpDateY" id="bookPickUpDateY" placeholder="YYYY" type="text" />
                                    <input class="in sep" ng-change="setPickUpDate('M', bookPickUpDateM)" ng-model="bookPickUpDateM" id="bookPickUpDateM" placeholder="MM" type="text" />
                                    <input class="in" ng-change="setPickUpDate('D', bookPickUpDateD)" ng-model="bookPickUpDateD" id="bookPickUpDateD" placeholder="DD" type="text" />
                                </div>
                                <font class="msg" ng-class="{msgEr: QuotePuDateMsg.includes('Error')}">{{QuotePuDateMsg}}</font>
                                <button class="btn" ng-class="{btnDis: !validPuDate}" ng-click="toPayment()">Accept Date</button>
                            </div>
                            <div ng-bind-html="payFastForm" ng-show="showPayFastForm && sixStep === 2"></div>
                            <iframe class="iframeOne" ng-class="{iframeOneVis: sixStep === 2}" name="payFastFrame" src="" zoom="1.5"></iframe>
                            <div class="paymentResponse" ng-show="sixStep === 3">
                                <div class="ttlCont">
                                    <font class="title" ng-class="{titleEr: paymentResponseHead.includes('Oops')}">{{paymentResponseHead}}</font>
                                </div>
                                <div class="contentHolder"><font class="txt">{{paymentResponseInfo}}</font></div>
                                <button class="btn" ng-hide="!hidePayfastRecheck" ng-click="closePaymentSumPop()">OK, GOT IT</button>
                                <button class="btnTwo" ng-hide="hidePayfastRecheck" ng-click="checkOnlyPayfastResponse()">Check Again</button>
                            </div>
                            <div layout="row" layout-sm="column" layout-align="space-around" class="progressCircl" ng-show="paymentLoading">
                                <md-progress-circular md-mode="indeterminate" md-diameter="25"></md-progress-circular>
                            </div>
                        </div>
                    </div>
                </div>
                <!------------------------------------------------ Phase Controlls -------------------------------------------------->
                <div class="controls" layout="row">
                    <button class="canc" ng-click="toPrevPhase()" ng-class="{cancGone: (actPhase === 1) && (adrPage === 1)}" >Back</button>
                    <button class="proc" ng-click="toNextPhase()" ng-class="{procDis: !validStep, procGone: actPhase === 6}">Proceed</button>
                </div>


            </div>
        </div>
        <!------------------------------------------------ About Us -------------------------------------------------->
        <div ng-class="{mainPageContAct: $root.curPage === 1, mainPageContTop: $root.curPage > 1, mainPageContBot: $root.curPage < 1}">
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

        <!------------------------------------------------ Technology Overview -------------------------------------------------->
        <div ng-class="{mainPageContAct: $root.curPage === 2, mainPageContTop: $root.curPage > 2, mainPageContBot: $root.curPage < 2}">
            <div class="techOver">
                <div class="overlay">
                    <div class="contain" layout="column">
                        <div class="div" layout="row">
                            <div layout="column" style="width: 40%; height: 100%">
                                <div class="img one"></div>
                            </div>
                            <div layout="column" style="width: 60%">
                                <font class="ttl">{{techTtlOne}}</font>
                                <font class="txt">{{techTxtOne}}</font>
                            </div>
                        </div>
                        <div class="div" layout="row">
                            <div layout="column" style="width: 40%; height: 100%">
                                <div class="img two"></div>
                            </div>
                            <div layout="column" style="width: 60%">
                                <font class="ttl">{{techTtlTwo}}</font>
                                <font class="txt">{{techTxtTwo}}</font>
                            </div>
                        </div>
                        <div class="div" layout="row">
                            <div layout="column" style="width: 40%; height: 100%">
                                <div class="img three"></div>
                            </div>
                            <div layout="column" style="width: 60%">
                                <font class="ttl">{{techTtlThree}}</font>
                                <font class="txt">{{techTxtThree}}</font>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!------------------------------------------------ Contact Us -------------------------------------------------->
        <div ng-class="{mainPageContAct: $root.curPage === 3, mainPageContTop: $root.curPage > 3, mainPageContBot: $root.curPage < 3}">
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
                                <ng-md-icon class="icon" icon="{{enqOptArrow}}" size="50"></ng-md-icon>
                                <div class="drop" ng-show="showEnqDrop">
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
        <div ng-class="{footer: $root.curPage < 4, fullFooter: $root.curPage === 4}">
            <div id="smallFoot" ng-show="$root.curPage !== 4">
                <div class="border"></div>
                <div class="txt"  ng-show="$root.dispCurPageTitle">{{menuOptionList[$root.curPage].title}}</div>
            </div>
            <div id="bigFoot" ng-show="$root.curPage === 4">
                <div class="content">
                    <div class="top" layout="column">
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
                                    <font class="mail">enquiries@za.intellicargoi.com</font>
                                </div>
                                <div class="item">
                                    <font class="mail">enquiries@group.intellicargoi.com</font>
                                </div>
                                <div class="item">
                                    <font class="mail">enquiries@au.intellicargoi.com</font>
                                </div>
                                <div class="item">
                                    <font class="mail">enquiries@eu.intellicargoi.com</font>
                                </div>
                                <div class="item">
                                    <font class="mail">enquiries@group.intellicargoi.com</font>
                                </div>
                                <div class="item">
                                    <font class="mail">enquiries@group.intellicargoi.com</font>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="listLast" layout="column">
                                <div class="item">
                                    <font class="txts">Products & Services</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mail">iCargo</font>
                                    <font class="mailb">Air</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mail">iCargo</font>
                                    <font class="mailb">Ocean</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mail">iCargo</font>
                                    <font class="mailb">Road</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mail">iCargo</font>
                                    <font class="mailb">Rail</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mail">iCargo</font>
                                    <font class="mailb">Express</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mail">iCargo</font>
                                    <font class="mailb">Warehousing</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mail">iCargo</font>
                                    <font class="mailb">SupplyChain</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mail">iCargo</font>
                                    <font class="mailb">Online</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mail">iCargo</font>
                                    <font class="mailb">Fulfill</font>
                                </div>
                                <div class="itema" layout="row">
                                    <font class="maila">></font>
                                    <font class="mail">iCargo</font>
                                    <font class="mailb">Trade</font>
                                </div>

                            </div>
                            <div class="topLeft">
                                <font class="txt">Please note that all products are subject to availablility withineach global section and it's countries.</font>
                            </div>
                            <div class="toTop" ng-click="selectDispPage(0)">
                                <ng-md-icon class="icon" icon="keyboard_arrow_up" size="60"></ng-md-icon>
                                <font class="toptxt">Back To Top</font>
                            </div>
                            <img src="Images/Intellicargo Logo White small.png" class="footImg" />
                            <div class="social" layout="row">
                                <div class="circ">
                                    <ng-md-icon class="icon" icon="linkedin" size="55"></ng-md-icon>
                                </div>
                                <div class="circ">
                                    <ng-md-icon class="icon" icon="google-plus" size="55"></ng-md-icon>
                                </div>
                                <div class="circ">
                                    <ng-md-icon class="icon" icon="facebook" size="55"></ng-md-icon>
                                </div>
                                <div class="circ">
                                    <ng-md-icon class="icon" icon="twitter" size="55"></ng-md-icon>
                                </div>
                            </div>
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
    <div class="qteSumOver" ng-show="showQteSumPop"></div>
    <div class="QteSum" ng-show="showQteSumPop">
        <!--<div class="QteSum" ng-show="showQteSumPop">-->
        <div class="container">
            <div class="block" ng-show="qtPop === 0">
                <font class="title">Quote Summary</font>
                <font class="close" ng-click="closeQteSumPop()">X</font>
                <div class="scr" layout="column">
                    <div class="scrDiv" layout="column">
                        <div class="sect" layout="column" ng-repeat="section in quoteSuum">
                            <font class="title">{{section.title}}</font>
                            <div class="line" ng-repeat="line in section.subs" layout="row">
                                <font class="ttl">{{line.title}}</font>
                                <font class="data">{{line.data}}</font>
                            </div>
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
                <font class="close" ng-click="closeQteSumPop()">X</font>
                <div class="scr" layout="column">
                    <font class="infoTxt">Your request has been received successfully.<br>Check your email regularly for updates and quote returns.</font>
                    <div class="bot" layout="row">
                        <button class="btn" ng-click="closeQteSumPop()">Continue</button>
                    </div>
                </div>
            </div>
            <div class="block" ng-show="qtPop === 2">
                <font class="title">Term & Conditions</font>
                <font class="close" ng-click="closeQteSumPop()">X</font>
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