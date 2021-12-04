<!DOCTYPE html>
<html ng-app="Body">
<head>
    <meta charset="UTF-8">
    <meta name="Description" content="Online CV for FJ Chaffey">
    <!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
    <!--===================== Tab Icon ===================-->
    <link rel="shortcut icon" type="image/png" href="Images/tab_icon_01.png" />
    <title>FJ Chaffey - Online CV</title>
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
            <img src="Images/logo.png" class="headIcon" />
        </div>
        <font class="info">Your Device's resolution does not support our system requirements.<br>Minimum requirements for Desktop or Laptop is: 1360px-768px.</font>
    </div>
    <div class="unsupportMobile" ng-if="$root.isMobile" ng-cloak>
        <div class="imgHead">
            <img src="Images/logo.png" class="headIcon" />
        </div>
        <font class="info">Your Device's resolution does not support our system.<br>Please rotate your device to Portrait orientation.</font>
    </div>


</div> <!-- End bodyContent -->
<!--================= StyleSheet Dependancies ===================-->
<link rel="stylesheet" href="CSS/Index/indexNew.css?v1.1" />
<link rel="stylesheet" href="CSS/Index/indexMobile.css?v1.0" />
<link rel="stylesheet" href="CSS/CustomTooltip.css?v1.0" />
<link rel="stylesheet" href="bower_components/angular-material/angular-material.min.css" />
<!--================= JS/ Angular Dependancies ===================-->
<script async src="JS/angular.ng-modules.js"></script>
<script src="bower_components/angular-route/angular-route.min.js"></script>
<script src="bower_components/angular-material/angular-material.min.js"></script>
<script src="bower_components/angular-animate/angular-animate.min.js"></script>
<!--<script src="JS/angular-touch.min.js"></script>-->

<script type="text/javascript" src="Components/Index/indexModule.js?v1.0"></script>
<script type="text/javascript" src="Components/Index/indexControllers.js?v1.0"></script>
<script type="text/javascript" src="Components/Index/indexDirectives.js?v1.0"></script>
<script type="text/javascript" src="Components/Index/indexServices.js?v1.0"></script>
<script type="text/javascript" src="Components/Index/indexMobileControllers.js?v1.0"></script>

<script src="bower_components/angular-material-icons/angular-material-icons.min.js"></script>
<script src="bower_components/angular-aria/angular-aria.js"></script>
<script src="bower_components/angular-messages/angular-messages.js"></script>
<script src="bower_components/angular-cookies/angular-cookies.js"></script>
<script async src="bower_components/jquery/dist/jquery.min.js"></script>
<script async src="bower_components/svg-morpheus/compile/minified/svg-morpheus.js"></script>
<script src="JS/hammer.min.js"></script>
<script src="JS/moment.min.js"></script>


</body>
</html>