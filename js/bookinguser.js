'use strict'
let cform = document.querySelector(".cform")

// map

const map = L.map('map').setView([30.045938546830993, 31.33835582808007], 16);
const atributtion = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
const tilesurl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
L.tileLayer(tilesurl,{atributtion}).addTo(map)
// L.marker(["30.12190055847168", "31.40559959411621"]).addTo(map);
// Create a red marker icon
let redIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28]
});

// Create a marker with the red icon and add it to the map
let marker1 = L.marker([30.10606975444649, 31.25440830747331], {icon: redIcon}).addTo(map);
let marker2 = L.marker([30.03717111265041, 31.395124713543016], {icon: redIcon}).addTo(map);

// Create two markers
// const marker1 = L.marker([30.10606975444649, 31.25440830747331]);
// const marker2 = L.marker([30.03717111265041, 31.395124713543016]).addTo(map);
const marker3 = L.marker([30.106581, 31.287601]).addTo(map);
const marker4 = L.marker([30.092935, 31.315136]).addTo(map);
const marker5 = L.marker([30.089039, 31.329727]).addTo(map);
const marker6 = L.marker([30.048743, 31.339051]).addTo(map);
marker1.addTo(map)
marker2.addTo(map)
marker1.bindTooltip(`Start Point`).openTooltip();
marker2.bindTooltip(`End Point`).openTooltip();
marker3.bindTooltip(`bus8`).openTooltip();
marker4.bindTooltip(`bus9`).openTooltip();
marker5.bindTooltip(`bus10`).openTooltip();
marker6.bindTooltip(`bus11`).openTooltip();
// Create a polyline between the markers
const polyline = L.polyline([marker1.getLatLng(), marker2.getLatLng()], {color: 'blue'});
polyline.addTo(map)
// zoom the map to the polyline
map.fitBounds(polyline.getBounds());

const freeSeats = Math.floor(Math.random() * 13) + 1; // Random number between 1 and 5
const arriveAt = new Date(Date.now() + Math.floor(Math.random() * 3600000)); // Random time within the next hour
const bookOnline = freeSeats > 5 ? 'Available' : 'Not Available'; // Randomly determine if booking online is available
const distance = Math.floor(Math.random() * 300) + 1; // Random number between 1 and 300
document.querySelector(".jquantity").innerHTML = freeSeats
document.querySelector(".distance").innerHTML = `${distance}m`
document.querySelector(".arrive").innerHTML = arriveAt.toLocaleTimeString()
document.querySelector(".bonline").innerHTML = bookOnline




const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))