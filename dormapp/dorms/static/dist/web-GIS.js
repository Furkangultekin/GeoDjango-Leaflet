    //full screen map view
    var mapId = document.getElementById('map')
    function fullScreenView() {
        if(document.fullscreenElement){
            document.exitFullscreen()
        } else{
            mapId.requestFullscreen();
        }

    }
    // Map print 
    $('.print-map').click(function(){
        window.print();
    })

    L.control.browserPrint({position: 'topright'}).addTo(map);

    //Leaflet-Measure
    var measure = L.control.measure({ 
        primaryLengthUnit: 'meters',
        primaryAreaUnit: 'sqmeters',
    })
    measure.addTo(map);

    //Leaflet Search
    L.Control.geocoder().addTo(map);

    //zoom to layer
    $('.zoom-to-layer').click(function(){
        map.setView([39.925533, 32.866287], 13)
    })