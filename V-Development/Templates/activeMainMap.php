<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="utf-8" />

    <script src="../Components/Interface/interface.js"></script>

    <script type='text/javascript'>

        var map;
        var footerHeight = 25;
        var mousePoint;
        var loc;
        var userLayer;
        var filtLayer;
        function GetMap()
        {
            map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
                credentials: 'AlYV2VyCVg3H603Dy7m3J4GL9S198JjbzzEmg64kW0iO00_Sge_TfexaOGTPudOQ',
                disableScrollWheelZoom: false,
                minZoom: 3,
                //mapTypeId: Microsoft.Maps.MapTypeId.aerial,
                mapTypeId: Microsoft.Maps.MapTypeId.road,
                zoom: 4,
                showMapTypeSelector: true
            });

            autoSuggest();


            userLayer = new Microsoft.Maps.Layer();
            filtLayer = new Microsoft.Maps.Layer();

            // Binding the events
            Microsoft.Maps.Events.addHandler(map, 'click', function (e) { handleArgs('mapClick', e); });
            Microsoft.Maps.Events.addHandler(map, 'rightclick', function (e) { handleArgs('mapRightclick', e); });
            Microsoft.Maps.Events.addHandler(map, 'dblclick', function (e) { handleArgs('mapDoubleclick', e); });
            Microsoft.Maps.Events.addHandler(map, 'mousewheel', function (e) { handleArgs('mapMousewheel', e); });
            Microsoft.Maps.Events.addHandler(map, 'mousemove', function (e) { handleArgs('mapMousemove', e); });
            Microsoft.Maps.Events.addHandler(map, 'mousedown', function (e) { handleArgs('mapMousedown', e); });
            Microsoft.Maps.Events.addHandler(map, 'mouseout', function (e) { handleArgs('mapMouseout', e); });
            Microsoft.Maps.Events.addHandler(map, 'mouseover', function (e) { handleArgs('mapMouseover', e); });
            Microsoft.Maps.Events.addHandler(map, 'mouseup', function (e) { handleArgs('mapMouseup', e); });
            function handleArgs(id, e) {
                if ((e.targetType == "map") && (id == 'mapRightclick')) {
                    mousePoint = new Microsoft.Maps.Point(e.getX(), e.getY());
                    loc = e.target.tryPixelToLocation(mousePoint);
                    //alert(loc.latitude + ", " + loc.longitude);
                    parent.createLocationAsk(loc.latitude, loc.longitude, id);
                }
                //highlight(id);
                //showValue('isPrimaryVal', e.isPrimary, false);
                //showValue('isSecondaryVal', e.isSecondary, false);
                //showValue('wheelDeltaVal', e.wheelDelta, 0);
            }

            /*
            // Binding the events 02
            Microsoft.Maps.Events.addHandler(map, 'viewchange', function () { document.getElementById('printoutPanel').innerHTML = 'View changing...'; });
            Microsoft.Maps.Events.addHandler(map, 'viewchangeend', function () { document.getElementById('printoutPanel').innerHTML = 'View changed.'; });

            // Update the view changed counter after 2 seconds each time
            Microsoft.Maps.Events.addThrottledHandler(map, 'viewchangeend', function () {
                count++;
                document.getElementById('printoutPanel').innerHTML = 'View changed count: ' + count;
            }, 2000);

            */

            var defaultColor = '#99FF00';
            var hoverColor = '#0062BD';
            var mouseDownColor = '#002E42';
            var center = map.getCenter();
            //Create custom Pushpin

            /*var pin = new Microsoft.Maps.Pushpin(center, {
                color: defaultColor
            });*/
            //Add the pushpin to the map
            /*map.entities.push(pin);
            Microsoft.Maps.Events.addHandler(pin, 'mouseover', function (e) {
                e.target.setOptions({ color: hoverColor });
            });
            Microsoft.Maps.Events.addHandler(pin, 'mousedown', function (e) {
                e.target.setOptions({ color: mouseDownColor });
            });
            Microsoft.Maps.Events.addHandler(pin, 'mouseout', function (e) {
                e.target.setOptions({ color: defaultColor });
            });*/

            showDefPin();
        }


        //............................................... Auto Suggestions ................................................
        function autoSuggest(){
            Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', function () {
                var options = {
                    maxResults: 4,
                    map: map
                };
                var manager = new Microsoft.Maps.AutosuggestManager(options);
                manager.attachAutosuggest(document.getElementById('searchBoxMainTop'),document.getElementById('searchBoxContainer'), selectedSuggestion);
            });

        }
        function selectedSuggestion(suggestionResult) {
            map.entities.clear();
            map.setView({ bounds: suggestionResult.bestView });
            var pushpin = new Microsoft.Maps.Pushpin(suggestionResult.location);
            map.entities.push(pushpin);
            //document.getElementById('printoutPanel').innerHTML =
            //    'Suggestion: ' + suggestionResult.formattedSuggestion +
            //    '<br> Lat: ' + suggestionResult.location.latitude +
            //    '<br> Lon: ' + suggestionResult.location.longitude;
        }

        //............................................... Default user Location ................................................
        function showDefPin(){
            var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(255,0,0,1)" viewBox="0 0 512 512"><path d="M255.999,0C155.481,0,73.705,81.777,73.705,182.295c0,55.358,29.029,125.712,86.281,209.106 c41.96,61.119,83.27,105.913,85.008,107.79L255.96,512l11.009-12.768c1.739-1.864,43.064-46.347,85.035-107.315 c57.259-83.177,86.292-153.704,86.292-209.622C438.295,81.777,356.518,0,255.999,0z M255.999,303.962 c-67.087,0-121.667-54.58-121.667-121.667s54.58-121.667,121.667-121.667c67.087,0,121.667,54.58,121.667,121.667 S323.087,303.962,255.999,303.962z M255.999,90.628c-50.545,0-91.667,41.122-91.667,91.667s41.122,91.667,91.667,91.667s91.667-41.122,91.667-91.667 S306.545,90.628,255.999,90.628z M270.915,238.496h-29.83v-82.582h29.83V238.496z M270.915,149.006h-29.83v-25.12h29.83V149.006z"/></svg>',
                anchor: new Microsoft.Maps.Point(10, 10) });
            map.entities.push(pushpin);
        }

        //...................................... Dynamically add locations to user Layer ............................................
        function showSelPin(){
            var pushpin = new Microsoft.Maps.Pushpin(loc, { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0,0,255,1)" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>',
                anchor: new Microsoft.Maps.Point(10, 20) });

            //var userLayer = new Microsoft.Maps.Layer();
            userLayer = new Microsoft.Maps.Layer();
            userLayer.add(pushpin);
            map.layers.insert(userLayer);

            //map.entities.push(pushpin);
        }

        //................................................... Add test Locations ..........................................................
        function showAPPin(lat, long, type, continents){
            //if (map.layers[0].getVisible()) { map.layers[0].setVisible(false); }
            //else { map.layers[0].setVisible(true); }

            //var ll = filtLayer.getId();
            //map.layers[ll].setVisible(false);

            filtLayer.clear();

            var newPoint = new Microsoft.Maps.Point(lat, long);

            for(var a = 0; a < lat.length; a++){
                if((lat[a] !== undefined) && (long[a] !== undefined) && (lat[a] !== '') && (long[a] !== '')){
                    var location = new Microsoft.Maps.Location(lat[a], long[a]);
                }

                if(type[a] === ' small_airport '){
                    var pushpin = new Microsoft.Maps.Pushpin(location, { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(255,255,0,1)" viewBox="0 0 186 186"><path d="M182.567,70.497l-27.753-19.107c-1.853-1.276-4.867-1.944-6.889-1.944h-36.707c0.103-3.789,0.182-7.162,0.241-10h1.04  c3.032,0,5.5-2.468,5.5-5.5v-8c0-3.032-2.468-5.5-5.5-5.5h-2.271c-1.47-3.206-4.349-4.966-9.713-5.654  c-0.224-1.526-0.511-2.992-0.858-4.361c0.222,0.029,0.432,0.059,0.667,0.087c4.685,0.568,10.905,0.882,17.515,0.882  s12.829-0.313,17.515-0.882c7.459-0.905,8.084-2.077,8.084-3.104s-0.625-2.199-8.084-3.104c-4.686-0.568-10.905-0.882-17.515-0.882  s-12.83,0.313-17.515,0.882c-1.091,0.132-2.021,0.271-2.839,0.414c-1.192-2.058-2.665-3.312-4.408-3.312  c-1.743,0-3.216,1.254-4.407,3.312c-0.818-0.142-1.748-0.281-2.839-0.414c-4.685-0.568-10.905-0.882-17.515-0.882  s-12.83,0.313-17.514,0.882c-7.46,0.905-8.084,2.077-8.084,3.104s0.625,2.199,8.084,3.104c4.685,0.568,10.904,0.882,17.514,0.882  s12.83-0.313,17.515-0.882c0.236-0.029,0.445-0.058,0.667-0.087c-0.363,1.432-0.66,2.971-0.889,4.572  c-4.481,0.803-6.987,2.523-8.327,5.442H74.5c-3.033,0-5.5,2.468-5.5,5.5v8c0,3.032,2.467,5.5,5.5,5.5h1.548  c0.06,2.837,0.138,6.21,0.241,10H38.074c-2.022,0-5.038,0.668-6.888,1.943L3.433,70.497C1.412,71.888,0,74.628,0,77.159v0.539  c0,3.169,2.36,5.747,5.26,5.747h68.745c1.204,0,2.433-0.397,3.521-1.045c0.228,4.662,0.486,9.412,0.779,14.156  c1.199,19.401,2.729,34.877,4.548,45.998c0.444,2.715,0.901,5.138,1.373,7.33l-17.208,12.76c-1.152,0.852-1.851,2.448-1.699,3.881  l1.612,15.215c0.175,1.648,1.458,2.845,3.049,2.845c0.579,0,1.161-0.165,1.684-0.478l22.452-13.433l22.461,13.438  c0.522,0.313,1.105,0.479,1.686,0.479c1.592,0,2.873-1.196,3.047-2.842l1.61-15.203c0.155-1.443-0.543-3.048-1.694-3.899  l-17.844-13.231c0.437-2.071,0.861-4.337,1.273-6.861c1.819-11.121,3.349-26.597,4.548-45.998c0.279-4.509,0.525-9.024,0.745-13.464  c0.671,0.225,1.363,0.353,2.047,0.353h68.744c2.9,0,5.261-2.578,5.261-5.747v-0.539C186,74.628,184.589,71.889,182.567,70.497z"/></svg>',
                        anchor: new Microsoft.Maps.Point(10, 20) });
                }
                if(type[a] === ' medium_airport '){
                    var pushpin = new Microsoft.Maps.Pushpin(location, { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0,51,128,1)" viewBox=""><path d="M12 0c-5.522 0-10 4.394-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.421-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8c4.419 0 8 3.582 8 8s-3.581 8-8 8zm-3.61-7.202l2.831-1.402-2.902-2.475.898-.444 4.697 1.586 2.244-1.111c.592-.297 1.569-.217 1.791.231.035.071.051.152.051.239-.002.458-.46 1.078-.953 1.325l-2.244 1.111-1.586 4.698-.898.444-.209-3.808-2.832 1.401-.584 1.408-.628.31-.219-2.126-1.559-1.464.628-.311 1.474.388z"/></svg>',
                        anchor: new Microsoft.Maps.Point(10, 20) });
                }
                if(type[a] === ' large_airport '){
                    var pushpin = new Microsoft.Maps.Pushpin(location, { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0,255,0,1)" viewBox="0 0 186 186"><path d="M185.957,85.688l-10.582-10.582l7.563-25.388c0.576-1.938-0.043-4.383-1.472-5.811l-1.41-1.41   c-0.799-0.798-1.83-1.237-2.903-1.237c-1.401,0-2.691,0.751-3.452,2.008l-11.374,18.791l-17.644-17.644l0.684-6.838   c0.13-1.302-0.404-2.797-1.327-3.718l-1.846-1.846c-0.633-0.634-1.458-0.982-2.324-0.982c-1.166,0-2.219,0.625-2.817,1.671   l-3.858,6.752C118.606,26.047,99.341,18.44,79.421,18.44C35.628,18.44,0,54.069,0,97.862c0,30.368,17.698,58.486,45.088,71.637   c0.698,0.335,1.435,0.493,2.161,0.493c1.862,0,3.651-1.046,4.511-2.837c1.195-2.489,0.146-5.477-2.343-6.672   C25.472,148.988,10,124.408,10,97.862C10,59.583,41.142,28.44,79.421,28.44c17.43,0,34.288,6.664,47.045,18.407l-8.307,4.747   c-0.909,0.521-1.508,1.395-1.642,2.397s0.215,2.003,0.955,2.743l1.846,1.846c0.817,0.818,2.123,1.347,3.324,1.347   c0.135,0,0.267-0.007,0.395-0.02l8.203-0.82l17.215,17.215l-19.727,11.94c-1.11,0.673-1.832,1.761-1.98,2.986   c-0.148,1.225,0.293,2.453,1.211,3.37l1.408,1.408c1.04,1.04,2.682,1.687,4.285,1.687c0.535,0,1.049-0.072,1.527-0.215   l26.545-7.907L171.9,99.746c1.798,1.798,4.082,2.788,6.431,2.789h0.001c2.377,0,4.725-1.004,6.656-2.861l0.001,0.001l0.129-0.129   l-0.001-0.001C188.681,95.869,189.968,89.701,185.957,85.688z M66.565,156.742c4.11,1.059,7.895,1.691,12.895,1.87v-36.023c-10,0.152-16.781,1.11-23.683,2.624   C58.074,138.479,62.017,149.25,66.565,156.742z M57.916,153.937c-3.552-7.527-6.374-16.782-8.232-27.241c-7.165,2.078-12.922,4.783-16.886,7.748   C39.268,142.966,47.915,149.743,57.916,153.937z M85.459,122.616v35.95c3-0.226,7.636-0.824,11.358-1.768c4.563-7.495,8.501-18.287,10.805-31.587   C101.043,123.77,93.459,122.832,85.459,122.616z M104.946,154.037c10.068-4.169,18.777-10.947,25.292-19.493c-3.968-3.004-9.768-5.746-17.014-7.848   C111.359,137.201,108.521,146.492,104.946,154.037z M55.598,70.588c6.969,1.55,13.861,2.532,23.861,2.686V36.368c-5,0.188-9.326,0.889-13.628,2.047   C61.368,46.18,57.756,57.161,55.598,70.588z M53.279,95.216h26.18v-15.87c-10-0.148-17.384-0.64-24.809-2.25C53.99,82.639,53.372,88.216,53.279,95.216z M54.858,119.112c7.372-1.583,14.602-2.448,24.602-2.594v-16.301H53.285C53.404,107.216,54.091,113.238,54.858,119.112z M57.409,41.263C47.407,45.564,38.783,52.452,32.38,61.089c3.921,3.053,9.727,5.847,17.019,7.991   C51.162,58.444,53.91,48.993,57.409,41.263z M20.456,95.216h26.752c0.098-7,0.548-13.515,1.311-19.597c-8.004-2.268-14.687-5.118-19.506-8.78   C24.044,75.148,20.984,84.216,20.456,95.216z M114.177,120.575c7.973,2.238,14.654,5.243,19.499,8.862c5.276-8.56,8.503-17.221,8.996-29.221h-26.975   C115.571,107.216,115.051,114.157,114.177,120.575z M29.374,129.334c4.833-3.573,11.461-6.543,19.358-8.759c-0.874-6.417-1.394-13.359-1.519-20.359H20.444   C20.935,112.216,24.136,120.798,29.374,129.334z M85.459,95.216h24.171c-0.092-7-0.313-12.577-0.973-18.12c-7.085,1.536-15.197,2.014-23.197,2.226V95.216z M85.459,116.541c8,0.21,15.959,1.061,22.99,2.571c0.767-5.874,1.057-11.896,1.175-18.896H85.459V116.541z M85.459,36.414v36.833c8-0.219,15.711-1.18,22.358-2.659c-2.165-13.468-5.811-24.474-10.293-32.242   C93.612,37.31,89.459,36.652,85.459,36.414z M126.915,85.358l12.482-7.611c-1.259-3.579-2.854-6.996-4.743-10.27l-0.871-0.885c-4.811,3.624-11.444,6.78-19.392,9.032   c0.763,6.082,1.212,12.591,1.311,19.591h8.193c-0.561-2-0.788-2.818-0.622-4.189C123.552,88.727,124.879,86.59,126.915,85.358z M117.293,48.058l0.178-0.102c-3.716-2.699-7.744-4.994-12.025-6.812c3.524,7.752,6.293,17.244,8.065,27.936   c5.784-1.7,10.615-3.813,14.33-6.136l-3.461,0.347c-0.287,0.028-0.583,0.043-0.887,0.043c-2.653,0-5.54-1.171-7.354-2.983   l-0.433-0.433c-1.705-1.705-2.504-4.012-2.193-6.33C113.822,51.269,115.201,49.254,117.293,48.058z"/></svg>',
                        anchor: new Microsoft.Maps.Point(10, 20) });
                }
                if(type[a] === ' heliport '){
                    var pushpin = new Microsoft.Maps.Pushpin(location, { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(255,0,0,1)" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>',
                        anchor: new Microsoft.Maps.Point(10, 20) });
                }
                if(type[a] === ' seaplane_base '){
                    var pushpin = new Microsoft.Maps.Pushpin(location, { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(255,0,255,1)" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>',
                        anchor: new Microsoft.Maps.Point(10, 20) });
                }



                if((lat[a] !== undefined) && (long[a] !== undefined) && (lat[a] !== null) && (long[a] !== null) && (lat[a] !== '') && (long[a] !== '')){
                    filtLayer.add(pushpin);
                }

            }
            if(filtLayer.getVisible()){
                map.layers.insert(filtLayer);
            }

        }
}
    </script>
    <style>
        body, html {
            padding:0;
            margin:0;
        }
    </style>
</head>
<body style="overflow: hidden; z-index: 9999999">

<div id='myMap' style=' width: 100%; height: 100%;'></div>
<!--<div id='myMap' style=' width: 100vw; height: calc(100vh - 65px);'></div>-->



<div id='searchBoxContainer' style="position: absolute; top: 0; z-index: 9999999"><input type='text' id='searchBoxMainTop' autofocus/></div>


<script type='text/javascript' src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap' async defer></script>

</body>
</html>