
    //map class initialize
    var map = L.map('map').setView([39.925533, 32.866287], 13);
    map.zoomControl.setPosition('topright')

    //adding osm tilelayer
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // watercolor 
    var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	    subdomains: 'abcd',
	    minZoom: 1,
	    maxZoom: 16,
	    ext: 'jpg'
    });

    //esri imagery
    var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    //mtbmap
    var MtbMap = L.tileLayer('http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp; USGS'
    });
    
    var OpenRailwayMap = L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
	    maxZoom: 19,
	    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    //adding marker in the center 
    var singleMarker = L.marker([39.925533, 32.866287])
        .bindPopup('AnkaramMmMmMmM')
        .openPopup();

    //add map scale
    L.control.scale().addTo(map);

    //map coordinate display
    map.on('mousemove',function(e) {
        console.log(e)
        $('.coordinate').html(`Lat: ${e.latlng.lat} Lng:  ${e.latlng.lng}`);
    })

    //GeoJSON
    var MarkerCluster = L.markerClusterGroup();
    var fg = L.geoJSON(data,{
        onEachFeature: function(feature,layer){
            layer.bindPopup(feature.properties.name)
        }
    })
    fg.addTo(MarkerCluster);
    //MarkerCluster.addTo(map);



    //Leaflet layer Control
    var baseMaps ={
        'OSM' : osm,
        'Water Color Map': Stamen_Watercolor,
        'Imagery' : Esri_WorldImagery,
        'DEM' : MtbMap
    }

    var overlayerMaps = {
        //'GeoJSON Markers': MarkerCluster,
        'Single Markers': singleMarker,
        'Railways': OpenRailwayMap
    }

    L.control.layers(baseMaps,overlayerMaps,{position:'topleft'}).addTo(map)

