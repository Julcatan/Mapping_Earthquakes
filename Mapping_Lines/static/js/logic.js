// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([30.18999924, -97.668663992], 5);

//let map = L.map('mapid').setView([36.1733, -120.1794],7);
// Create the map object with a center and zoom level.
//old center setView([40.7, -94.5], 4);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
   // [33.9416, -118.4085], //LAX
    [37.6213, -122.3790], //SFO
   // [40.7899, -111.9791], //SLC
    //[47.4502, -122.3088],// SEA
    [30.18999924, -97.668663992] ,//Austin Berg
    [43.67771760000001, -79.62481969999999], // Toronto
    [40.641766, -73.780968], // JFK
    [27.390665104, -82.552664456] //SRQ
  ];

  // Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue"
    //,stroke-dasharray= ""
  }).addTo(map);
//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//L.circle([34.0522, -118.2437], {
  //  radius: 300,
    //fillColor: '#FFD326',
    //color:'black'
 //}).addTo(map);

 // alternative marker in pixel
//L.circleMarker([34.0522, -118.2437],
//{   radius:300,
   // color: "black",
   // fillcolor: "#fffa1"

//}).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location,{radius: (city.population/100000), fillColor: "#CB8427", color: "#98652E",weight: "4"})
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
