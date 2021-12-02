<!DOCTYPE html>
<html ng-app="Body">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-128240740-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-128240740-1');
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "http://intellicargoi.com",
      "logo": "http://intellicargoi.com/Images/ExxovICONPNGStandard[115].png",
    }
    </script>

    <meta charset="UTF-8">
    <meta name="google-site-verification" content="wwNDWk0C90qMuB8MSSW860_Bfi1RyaeRiazDN2kFVGw" />
    <meta name="Description" content="International Logistics and Trade">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <!--<base href="/V0.9.5.1/" -->
    <!--===================== Tab Icon ===================-->
    <link rel="shortcut icon" type="image/png" href="Images/ExxovICONPNGStandard[115].png" />
    <title>Intellicargo</title>
    <!--================= JS/ Angular Dependancies ===================-->
    <script src="bower_components/angular/angular.js"></script>

</head>
<body>
<div id="bodyContent" class="fade-in bodyContent">
    <!-- ---------------------------------------------- Loading Controller ------------------------------------------------ -->
    <div ng-controller="loadingController">
        <div layout="row" layout-sm="column" layout-align="space-around" class="progressCircle" ng-class="{progressCircleMobile: $root.isMobile}" ng-show="$root.loading">
            <md-progress-circular ng-if="!$root.isMobile" md-mode="indeterminate" md-diameter="40"></md-progress-circular>
            <md-progress-circular ng-if="$root.isMobile" md-mode="indeterminate" md-diameter="80"></md-progress-circular>
        </div>
        <div class="loadingOverlay" ng-if="$root.loading"></div>
        <div class="mainLoading"></div>
    </div>
    <!----------------------------------------------------- Content ----------------------------------------------------------------->
    <div class="pageContainer fade-in" ng-class="{pageContainerMobile: $root.isMobile}" role="main">
        <div class="cont fade-in">
            <div ng-view></div>
        </div>
    </div>
    <!----------------------------------------------------- Unsupported Device ----------------------------------------------------------------->
    <div ng-if="">International Logistics and Trade</div>
    <div class="unsupport" ng-if="!$root.isMobile" ng-cloak>
        <div class="imgHead">
            <img src="Images/Intellicargo Logo small.png" class="headIcon" />
        </div>
        <font class="info">Your Device's resolution does not support our system.<br>Minimum requirements for Desktop or Laptop is: 1360px-768px.</font>
    </div>
    <div class="unsupportMobile" ng-if="$root.isMobile" ng-cloak>
        <div class="imgHead">
            <img src="Images/Intellicargo Logo small.png" class="headIcon" />
        </div>
        <font class="info">Your Device's resolution does not support our system.<br>Please rotate your device to Portrait orientation.</font>
    </div>

    <!------------------------------------------------ LOGIN (new) -------------------------------------------------->
    <!------------------------------------------------ Login Popup -------------------------------------------------->
    <div ng-controller="loginCntrl" ng-cloak>
        <div ng-show="$root.documentReady">
            <div class="logOverlay fade-in-med" ng-show="$root.showLogPop"></div>
            <div class="logAndReg fade-in-med" ng-class="{logAndRegMobile: $root.isMobile}" ng-show="$root.showLogPop">
                <div class="close" ng-click="$root.loginRegister()">Close</div>
                <img src="Images/Intellicargo Logo small.png" class="image" />
                <form id="loginForm" name="form" ng-show="logpop === 'login'" ng-submit="login()" role="form" class="logForm">
                    <div class="loginInputBar">
                        <md-input-container md-no-float class="fader md-block logInput" flex-gt-sm>
                            <input type="text" name="loginUsername" id="loginUsername" ng-model="$root.loginUsername" placeholder="{{loginInputOne}}" ng-change="clearError()" required/>
                        </md-input-container>
                    </div>
                    <div class="loginInputSep"></div>
                    <div class="loginInputBar">
                        <md-input-container md-no-float class="md-block logInput" flex-gt-sm>
                            <input type="password" id="loginPassword" ng-model="$root.loginPassword" placeholder="Password" required />
                        </md-input-container>
                    </div>
                    <div class="underInput" layout="row">
                        <font class="forgotPW" ng-click="togLogPops('fPass')">Forgot your Password?</font>
                    </div>
                    <button class="logBut" ng-click="login()" ng-disabled="form.$invalid || loading">Login</button>
                    <div class="logErrorMsg" ng-show="logError">{{logErrorMsg}}</div>
                    <div class="regSel">
                        <font class="regTxt">Not registered yet? </font><font class="regBut" ng-click="loginRegister(); registerPage()">Register</font><font class="regTxt">Now!</font>
                    </div>
                </form>
                <form id="loginFormPass" name="formPass" ng-show="logpop === 'fPass'" ng-submit="$root.reset()" role="form" class="logFormOne">
                    <md-input-container md-no-float class="fader md-block logInput" flex-gt-sm>
                        <input type="text" class="newInput" id="loginUsernamePass" ng-model="loginUsernamePass" placeholder="Email address" ng-change="$root.validateReset(loginUsernamePass)" required />
                    </md-input-container>
                    <div class="underInput" layout="row">
                        <font class="forgotPW" ng-click="togLogPops('login')">Back To Login</font>
                    </div>
                    <button class="logBut" ng-click="$root.reset()" ng-disabled="formPass.$invalid || loading">Reset Password</button>
                    <div class="logErrorMsg" ng-class="{logErrorMsgOK: logErrorMsg.includes('Successfully')}" ng-show="logError">{{logErrorMsg}}</div>
                </form>
            </div>
        </div>
    </div>


</div> <!-- End bodyContent -->
<!--================= StyleSheet Dependancies ===================-->
<link rel="stylesheet" href="CSS/Index/indexNew.css" />
<link rel="stylesheet" href="CSS/Index/indexMobile.css" />
<link rel="stylesheet" href="CSS/CustomTooltip.css" />
<link rel="stylesheet" href="bower_components/angular-material/angular-material.min.css" />
<!--================= JS/ Angular Dependancies ===================-->
<script async src="JS/angular.ng-modules.js"></script>
<script src="bower_components/angular-route/angular-route.min.js"></script>
<script src="bower_components/angular-material/angular-material.min.js"></script>
<script src="bower_components/angular-animate/angular-animate.min.js"></script>
<!--<script src="JS/angular-touch.min.js"></script>-->

<script type="text/javascript" src="Components/Index/indexModule.js"></script>
<script type="text/javascript" src="Components/Index/indexControllers.js?V0.1.0"></script>
<script type="text/javascript" src="Components/Index/indexDirectives.js"></script>
<script type="text/javascript" src="Components/Index/indexServices.js"></script>
<script type="text/javascript" src="Components/Index/indexMobileControllers.js"></script>

<script src="bower_components/angular-material-icons/angular-material-icons.min.js"></script>
<script src="bower_components/angular-aria/angular-aria.js"></script>
<script src="bower_components/angular-messages/angular-messages.js"></script>
<script src="bower_components/angular-cookies/angular-cookies.js"></script>
<script async src="bower_components/jquery/dist/jquery.min.js"></script>
<script async src="bower_components/svg-morpheus/compile/minified/svg-morpheus.js"></script>
<script src="JS/hammer.min.js"></script>
<script src="JS/moment.min.js"></script>
<!--<script async src="JS/docs.js"></script>-->


</body>
</html>