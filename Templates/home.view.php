<!--------------------------------------- Loader -------------------------------------------------->

<div id="loader" class="loader" ng-if="!$root.docReady">
    <div class="loadImgContainer">
        <image ng-src="Images/Intellicargo Logo White small.png" class="loaderImg"/>
    </div>
    <div class="loadingProgress" ng-if="$root.loadOne">
        <image ng-src="Images/Intellicargo Logo small.png" class="loaderImg"/>
    </div>
    <font class="ldt fading">{{statusTxt}}</font>

    <div class="fadingSlow optMenu" ng-if="$root.loadComplete">
        <div class="collection" layout="row">
            <div class="opt" ng-if="($root.curUserPriv === 'Admin')">
                <font class="txt" ng-click="setCurProf('Admin')">Admin</font>
            </div>
            <div class="opt" ng-if="($root.curUserPriv === 'Admin') || ($root.curUserPriv === 'Manager')">
                <font class="txt" ng-click="setCurProf('Manager')">Manager</font>
            </div>
            <div class="opt" ng-if="($root.curUserComp.length > 0) && (($root.curUserPriv === 'Private') || ($root.curUserPriv === 'Manager') || ($root.curUserPriv === 'Admin'))">
                <font class="txt" ng-click="setCurProf('Business')">Business</font>
            </div>
            <div class="opt" ng-if="($root.curUserPriv === 'Admin') || ($root.curUserPriv === 'Manager') || ($root.curUserPriv === 'Private')">
                <font class="txt" ng-click="setCurProf('Private')">Private</font>
            </div>
        </div>
    </div>

    <div class="home" ng-click="$root.logout()">
        <font class="txt">Return Home</font>
        <md-icon aria-label="loadingHome" md-svg-src="./Images/SVG/neighborhood.svg" class="ico">
    </div>

    <div class="foot">
        <div ng-class="{botAnim: !$root.loadComplete, botAnimPlseDim: strtPlse, botAnimPlseBright: !strtPlse && $root.loadComplete}" ng-if="$root.loadOne"></div>
    </div>
</div>






