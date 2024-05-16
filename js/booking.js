'use strict'
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');
const price = urlParams.get('price');
const Capacity = urlParams.get('capacity');
const active = urlParams.get('active');
let cform = document.querySelector(".cform")
let wlongtiude2 = urlParams.get('longtiude2');
let longtiude2 = wlongtiude2.split(",")
let wlongtiude = urlParams.get('longtiude');
let longtiude = wlongtiude?.split(",")
let main = document.querySelector(".main")
let jprice = document.querySelector(".jprice")
jprice.textContent = `${price}£`
let jtitle = document.querySelector(".jdestination")
jtitle.textContent = title
let jquantity = document.querySelector(".jquantity")
jquantity.textContent = Capacity
const form = document.querySelector('#login-form');
let input = document.querySelector(".jinput")
let total = document.querySelector(".tprice")
let check = document.querySelector(".btncheack")
let demoticket = document.querySelector(".demoticket")
let reg = /\d+/

const regex = /From:\s*(.*?)\s*To:\s*(.*?)$/;
const [, from, to] = title.match(regex);

console.log(from); // "Matariyyah"
console.log(to); // "First of Abbas"
check.addEventListener("click",function(){
    console.log(input.value)
    console.log(jprice.textContent.match(reg))
        total.textContent = `${(Number(input.value))*(Number(jprice.textContent.match(reg)))}`
})


// map

const map = L.map('map').setView([30.045938546830993, 31.33835582808007], 16);
const atributtion = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
const tilesurl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
L.tileLayer(tilesurl,{atributtion}).addTo(map)
// L.marker(["30.12190055847168", "31.40559959411621"]).addTo(map);

// Create two markers
const marker1 = L.marker(longtiude);
const marker2 = L.marker(longtiude2).addTo(map);
marker1.addTo(map)
marker2.addTo(map)
marker1.bindTooltip(`${from}`).openTooltip();
marker2.bindTooltip(`${to}`).openTooltip();
// Create a polyline between the markers
const polyline = L.polyline([marker1.getLatLng(), marker2.getLatLng()], {color: 'blue'});
polyline.addTo(map)
// zoom the map to the polyline
map.fitBounds(polyline.getBounds());
console.log(title)



if (active == "true"){
    main.classList.add("hidden")
    cform.classList.remove("hidden")
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        if (username.toLowerCase() === 'user' && password === '1234') {
            // Successful login
            window.location.href = `bookinguser.html`;
            // Redirect the user to user booking
        } else if (username.toLowerCase() === 'driver' && password === '1234'){
            // Redirect the user to admin booking
            window.location.href = `bookingdriver.html`;
        } 
        else{
            // Failed login
            alert('Invalid username or password.');
        }
    })
}
else{
}
demoticket.addEventListener("click",function(){
    window.location.href = `demoTicket.html`;
})