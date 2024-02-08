var map = L.map('map').setView([38.7670, -90.4115], 10);
  // load a tile layer

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> <a href="https://stamen.com/" target="_blank">&copy; Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
}).addTo(map);

  
$.getJSON("https://raw.githubusercontent.com/WeberStack/GIS5091_Project1/main/MetroBusRoutes_dir_REGISTERED.geojson",
function(data){
    // add GeoJSON layer to the map once the file is loaded
L.geoJson(data, {pointToLayer: function(feature, latlng){
        return L.marker(latlng, {icon:ratIcon});
  }
 }).addTo(map);
});

var ratIcon = L.icon({
    iconUrl:   'https://media.giphy.com/media/IhIDRwEVka6plLPC9z/giphy.gif',
    iconSize: [30, 20]
 });

 $.getJSON("https://geojson.io/#map=9.89/38.6538/-90.2478",
function(data){
    // add GeoJSON layer to the map once the file is loaded
L.geoJson(data, {pointToLayer: function(feature, latlng){
      return L.marker(latlng, {icon:ratIcon});
 }
}).addTo(map);
}); 

 $.getJSON("https://raw.githubusercontent.com/OpenDataDE/State-zip-code-GeoJSON/master/mo_missouri_zip_codes_geo.min.json",
function(data){
    // add GeoJSON layer to the map once the file is loaded
L.geoJson(data, {pointToLayer: function(feature, latlng){
      return L.marker(latlng, {icon:ratIcon});
 }
}).addTo(map);
});

$.getJSON("https://raw.githubusercontent.com/WeberStack/GIS5091_Project1/main/MO_Public_Schools.geojson",
function(data){
    // add GeoJSON layer to the map once the file is loaded
L.geoJson(data, {pointToLayer: function(feature, latlng){
      return L.marker(latlng, {icon:ratIcon});
 }
}).addTo(map);
});


$.getJSON("https://raw.githubusercontent.com/WeberStack/GIS5091_Project1/main/MO_Public_Schools.geojson",function(data){
  var rodents = L.geoJson(data,{
     pointToLayer: function(feature,latlng){
      var marker = L.marker(latlng,{icon: ratIcon});
       marker.bindPopup(feature.properties.Facility + '<br/>' + feature.properties.Address + '<br/>' + feature.properties.City);
       return marker;
     }
   });
   var clusters = L.markerClusterGroup();
   clusters.addLayer(rodents);
   map.addLayer(clusters);
});

var legend = new Legend({
            view: view,
            layerInfos: [
              {
                layer: featureLayer,
                title: "NY Educational Attainment"
              }
            ]
});
          // Add widget to the bottom right corner of the view
          view.ui.add(legend, "bottom-right");
       
