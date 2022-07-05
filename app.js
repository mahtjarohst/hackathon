// Intitializes the map
var map = L.map("map").setView([40.91, -96.63], 4);

// Adds a title layer for the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

// Adds Geocoder to the map
L.Control.geocoder().addTo(map);

