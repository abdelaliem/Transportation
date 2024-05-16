'use strict'
// let card = document.querySelector(".card0")
function card1 (){
    window.open("kot.html")
}
function card2 (){
    window.open("tts.html")
}
// elements
const nationalButton = document.querySelector('.national')
const internationalButton = document.querySelector('.international')
const seeMoreCard = document.querySelector('.see-more')
const sortbtn = document.querySelector(".sort")
const national = {
1 : { location : `From: Matariyyah To: First of Abbas`, image :`images/Micro-bus.jpeg` ,type : `Micro-bus`,price : "5" , quantity: "14" , langtude:[30.115319452114065, 31.306312456636352] , langtude2:[30.06826561520614, 31.33624305109926] },
2 : { location : `From: First of Abbas To: Last of Abbas`, image :`images/Micro-bus.jpeg` ,type : `Micro-bus`,price : "3" , quantity: "14",langtude:[30.06826561520614, 31.33624305109926],langtude2:[30.045061664561302, 31.339721285653052] },
3 : { location : `From: El Zahraa To: Al Hay Al Asher`, image :`images/Micro-bus.jpeg` ,type : `Micro-bus`,price : "4" , quantity: "14",langtude:[30.03717111265041, 31.395124713543016],langtude2:[30.024373011709788, 31.388478919502795] },
4 : { location : `From: Salam To: Alf Maskan Square `, image :`images/Micro-bus.jpeg` ,type : `Micro-bus`,price : "4" , quantity: "14",langtude:[30.151933740902876, 31.349334655909416],langtude2:[30.119222762433573, 31.34049743410545] },
5 : { location : `From: Musturad To: Bab El Sharia`, image :`images/Micro-bus.jpeg` ,type : `Micro-bus`,price : "3.5" , quantity: "14",langtude:[30.130346831594114, 31.29245327232977],langtude2:[30.059879970551826, 31.258344229309365] },
6 : { location : `From: Shubra To: First of Abbas`, image :`images/public_bus_cairo_01.jpg` ,type : `Bus`,price : "6" , quantity: "50",langtude:[30.095237432623126, 31.249776258866532],langtude2:[30.06826561520614, 31.33624305109926] },
7 : { location : `From: Abood To: El Zahraa we Al Asher`, image :`images/public_bus_cairo_01.jpg`  ,type : `Bus`,price : "6" , quantity: "50",langtude:[30.10606975444649, 31.25440830747331],langtude2:[30.03717111265041, 31.395124713543016] },
8 : { location : `From: El Zahraa To: Al Hay Al Asher`, image :`images/public_bus_cairo_01.jpg`  ,type : `Bus`,price : "6" , quantity: "50",langtude:[30.03717111265041, 31.395124713543016],langtude2:[30.024373011709788, 31.388478919502795] },
9 : { location : `From: Salam To: Alf Maskan Square `, image :`images/public_bus_cairo_01.jpg`  ,type : `Bus`,price : "6" , quantity: "50",langtude:[30.151933740902876, 31.349334655909416],langtude2:[30.119222762433573, 31.34049743410545] },
10 : { location : `From: Musturad To: Shubra`, image :`images/public_bus_cairo_01.jpg`  ,type : `Bus`,price : "6" , quantity: "50",langtude:[30.130346831594114, 31.29245327232977],langtude2:[30.095237432623126, 31.249776258866532] },
11 : { location : `From: Cairo To: Alexandria (first class)`, image :`images/Train.jpg` ,type : `Train`,price : "93" , quantity: "500",langtude:[30.062751095639687, 31.245850829161768],langtude2:[31.1935166532554, 29.906500171951492] },
12 : { location : `From: Cairo To: Alexandria (second class)`, image :`images/Train.jpg` ,type : `Train`,price : "67.5" , quantity: "500",langtude:[30.062751095639687, 31.245850829161768],langtude2:[31.1935166532554, 29.906500171951492] },
13 : { location : `From: Cairo To: Luxor (first class)`, image :`images/Train.jpg` ,type : `Train`,price : "195" , quantity: "500",langtude:[30.062751095639687, 31.245850829161768],langtude2:[25.687357953649435, 32.64000207820094]},
14 : { location : `From: Cairo To: Luxor (second class)`, image :`images/Train.jpg` ,type : `Train`,price : "115" , quantity: "500" ,langtude:[30.062751095639687, 31.245850829161768],langtude2:[25.687357953649435, 32.64000207820094]},
15 : { location : `From: Cairo To: Sohag (first class)`, image :`images/Train.jpg` ,type : `Train`,price : "115" , quantity: "500" ,langtude:[30.062751095639687, 31.245850829161768],langtude2:[26.551312085972302, 31.699119972132472]},

}
const interNational = {
1 : { location : `From: Cairo To: Beirut`, image :`images/plane.jpg` ,type : `Airplane`,price : `${6205}` , quantity: "200", langtude2:[33.820899963378906,35.488399505615234] },
2 : { location : `From: Cairo To: Tokyo`, image :`images/plane.jpg` ,type : `Airplane`,price : `${8408}`, quantity: "200", langtude2:[35.552299,139.779999] },
3 : { location : `From: Cairo To: London`, image :`images/plane.jpg` ,type : `Airplane`,price : `${9900}`, quantity: "200", langtude2:["51.505299","0.055278"] },
4 : { location : `From: Cairo To: Sydney `, image :`images/plane.jpg` ,type : `Airplane`,price : `${13500}` , quantity: "250", langtude2:[-33.94609833,151.177002] },
5 : { location : `From: Cairo To: Dubai `, image :`images/plane.jpg` ,type : `Airplane`,price : `${9200}` , quantity: "200", langtude2:[25.25279999,55.36439896] },
6 : { location : `From: Cairo To: Paris `, image :`images/plane.jpg` ,type : `Airplane`,price : `${9150}` , quantity: "150", langtude2:[ "48.9693985","2.441390038"] },
7 : { location : `From: Cairo To: Doha `, image :`images/plane.jpg` ,type : `Airplane`,price : `${7250}` , quantity: "150", langtude2:[25.261101,51.565102] },
8 : { location : `From: Cairo To: kentucky `, image :`images/plane.jpg` ,type : `Airplane`,price : `${12000}` , quantity: "250", langtude2:["37.05339813","-84.61589813"] },
9 : { location : `From: Cairo To: Riyad `, image :`images/plane.jpg` ,type : `Airplane`,price : `${6850}` , quantity: "250", langtude2:["24.95759964","46.69879913"] },
10 : { location : `From: Cairo To: Jordan `, image :`images/plane.jpg` ,type : `Airplane`,price : `${5260}` , quantity: "250", langtude2:[31.724978929508076, 35.995480424789584] },
11 : { location : `From: Cairo To: Berlin `, image :`images/plane.jpg` ,type : `Airplane`,price : `${10650}` , quantity: "150", langtude2:["52.35138889","13.49388889"] },
12 : { location : `From: Cairo To: Toronto `, image :`images/plane.jpg` ,type : `Airplane`,price : `${18908}` , quantity: "250" , langtude2:["43.67720032","-79.63059998"]},
13 : { location : `From: Cairo To: Rabat `, image :`images/plane.jpg` ,type : `Airplane`,price : `${6650}` , quantity: "250", langtude2:["34.2989006","-6.595880032"] },
14 : { location : `From: Cairo To: Madrid `, image :`images/plane.jpg` ,type : `Airplane`,price : `${12400}` , quantity: "300", langtude2:["40.49670029","-3.445869923"] },
15 : { location : `From: Cairo To: Vienna`, image :`images/plane.jpg` ,type : `Airplane`,price : `${11694}` , quantity: "250" , langtude2:["48.11029816","16.56970024"]},
16 : { location : `From: Cairo To: New York`, image :`images/plane.jpg` ,type : `Airplane`,price : `${21769}` , quantity: "350", langtude2:["43.11119843","-76.10630035"] },
17 : { location : `From: Cairo To: Mumbai`, image :`images/plane.jpg` ,type : `Airplane`,price : `${12757}` , quantity: "200", langtude2:["19.08869934","72.86789703"] },
18 : { location : `From: Cairo To: Kinshasa`, image :`images/plane.jpg` ,type : `Airplane`,price : `${14285}` , quantity: "210", langtude2:["-4.38575","15.4446"] },
19 : { location : `From: Cairo To: Athens`, image :`images/plane.jpg` ,type : `Airplane`,price : `${6988}` , quantity: "230", langtude2:["37.93640137","23.94449997"] },
20 : { location : `From: Cairo To: Accra`, image :`images/plane.jpg` ,type : `Airplane`,price : `${13565}` , quantity: "230", langtude2:["5.6051898","-0.166786"] },
}
function callCard(imgSrc,titleText,contentText,priceText,quantityText,longtiude2,longtiude){

const card = document.createElement("div");
card.classList.add('card');
card.classList.add('p-0');
card.classList.add('m-5');
card.classList.add('m-sm-auto');
card.setAttribute("onclick","booking(this)")
document.querySelector('.card-container').appendChild(card)
const image = document.createElement("img")
image.classList.add('card-img-top')
image.classList.add('w-100')
// image.classList.add('h-100')
image.style.height="211px"
image.src = imgSrc
card.appendChild(image)
const cardBody = document.createElement("div");
cardBody.classList.add('card-body');
card.appendChild(cardBody)
const cardTitle = document.createElement("h5");
cardTitle.classList.add('card-title')
cardTitle.innerHTML = '<i class="bi bi-geo-alt-fill"></i> '
cardBody.appendChild(cardTitle)
const title = document.createElement("span");
title.classList.add('title')
cardTitle.appendChild(title)
title.innerHTML= titleText
const para = document.createElement('p');
para.innerHTML = '<i class="bi bi-car-front-fill"></i>: '
cardBody.appendChild(para)
const content = document.createElement("span");
content.classList.add('content')
para.appendChild(content)
content.innerHTML= contentText

const pricequant = document.createElement("span");
pricequant.classList.add("pricequant");
const cardsub1 = document.createElement("p");
cardsub1.classList.add("card-subtitle");
const par1 = document.createElement("span");
par1.classList.add("par");
par1.innerHTML=(" Price:");
const price = document.createElement("span");
price.classList.add("price")
cardsub1.appendChild(par1);
cardsub1.appendChild(price);
pricequant.appendChild(cardsub1)
price.innerHTML= priceText

const cardsub2 = document.createElement("p");
cardsub2.classList.add("card-subtitle");
const par2 = document.createElement("span");
par2.classList.add("par");
par2.innerHTML=(" Capacity: ");
const quantity = document.createElement("span");
quantity.classList.add("quantity")
cardsub2.appendChild(par2);
cardsub2.appendChild(quantity);
pricequant.appendChild(cardsub2)
quantity.innerHTML = quantityText
const book =document.createElement("a");
book.classList.add("btn");
book.classList.add("btn-primary");
book.classList.add("book");
book.classList.add("booking");
book.innerHTML=("book")
// book.href="booking.html";
cardBody.appendChild(pricequant)
cardBody.appendChild(book)
const long2 = document.createElement("div")
long2.setAttribute("class","longtiude2 hidden")
long2.innerHTML = `${longtiude2}`
card.appendChild(long2)
const long = document.createElement("div")
long.setAttribute("class","longtiude hidden")
long.innerHTML = `${longtiude}`
card.appendChild(long)
} 

let active ;
let active2 = true
let ii= 0
nationalButton.addEventListener('click',function(){
    active = true
    ii=ii>=11?0:ii
    document.querySelector('.card-container').textContent = ''
    for(let i = 0 ; i<6;i++){
        callCard(national[nshuffle[ii]].image,national[nshuffle[ii]].location,national[nshuffle[ii]].type,national[nshuffle[ii]].price,national[nshuffle[ii]].quantity,national[nshuffle[ii]].langtude2,national[nshuffle[ii]].langtude)
        ii++
    }
seeMoreCard.classList.remove("hidden");
sortbtn.classList.add("hidden")
console.log(active)
if(isDark){
    for(let i = 0;i<document.querySelectorAll(".card").length;i++){
        document.querySelectorAll(".card")[i].classList.add("darkCard")
    }    
}
})
internationalButton.addEventListener('click',function(){
    active = false
    ii=ii>=13?0:ii
document.querySelector('.card-container').textContent = ''
for(let i = 0 ; i<6;i++){
    callCard(interNational[inshuffle[ii]].image,interNational[inshuffle[ii]].location,interNational[inshuffle[ii]].type,interNational[inshuffle[ii]].price,interNational[inshuffle[ii]].quantity,interNational[inshuffle[ii]].langtude2,interNational[inshuffle[ii]].langtude)
    ii++
}
seeMoreCard.classList.remove("hidden");
sortbtn.classList.remove("hidden")
console.log(active)
if(isDark){
    for(let i = 0;i<document.querySelectorAll(".card").length;i++){
        document.querySelectorAll(".card")[i].classList.add("darkCard")
    }    
}
// test()
})

sortbtn.addEventListener("click",function(){
    active2 = active2?false:true
    if(active2){
        ii=0
        document.querySelector('.card-container').textContent = ''
        for(let i = 0 ; i<6;i++){
            callCard(interNational[sort[ii]].image,interNational[sort[ii]].location,interNational[sort[ii]].type,interNational[sort[ii]].price,interNational[sort[ii]].quantity,interNational[sort[ii]].langtude2,interNational[sort[ii]].langtude)
            ii++
        }    active2 = false
    sortbtn.innerHTML = "Sort By Price"
    }else{
        sort.reverse()
        ii=0
        document.querySelector('.card-container').textContent = ''
        for(let i = 0 ; i<6;i++){
            callCard(interNational[sort[ii]].image,interNational[sort[ii]].location,interNational[sort[ii]].type,interNational[sort[ii]].price,interNational[sort[ii]].quantity,interNational[sort[ii]].langtude2,interNational[sort[ii]].langtude)
            ii++
        }
        active2 = true
    }
    
})

// see more 



seeMoreCard.addEventListener('click', function () {
if (active) {
    callCard(national[nshuffle[ii]].image,national[nshuffle[ii]].location,national[nshuffle[ii]].type,national[nshuffle[ii]].price,national[nshuffle[ii]].quantity,national[nshuffle[ii]].langtude2,national[nshuffle[ii++]].langtude)
    callCard(national[nshuffle[ii]].image,national[nshuffle[ii]].location,national[nshuffle[ii]].type,national[nshuffle[ii]].price,national[nshuffle[ii]].quantity,national[nshuffle[ii]].langtude2,national[nshuffle[ii++]].langtude)
    callCard(national[nshuffle[ii]].image,national[nshuffle[ii]].location,national[nshuffle[ii]].type,national[nshuffle[ii]].price,national[nshuffle[ii]].quantity,national[nshuffle[ii]].langtude2,national[nshuffle[ii++]].langtude)
    callCard(national[nshuffle[ii]].image,national[nshuffle[ii]].location,national[nshuffle[ii]].type,national[nshuffle[ii]].price,national[nshuffle[ii]].quantity,national[nshuffle[ii]].langtude2,national[nshuffle[ii++]].langtude)
    callCard(national[nshuffle[ii]].image,national[nshuffle[ii]].location,national[nshuffle[ii]].type,national[nshuffle[ii]].price,national[nshuffle[ii]].quantity,national[nshuffle[ii]].langtude2,national[nshuffle[ii++]].langtude)
    callCard(national[nshuffle[ii]].image,national[nshuffle[ii]].location,national[nshuffle[ii]].type,national[nshuffle[ii]].price,national[nshuffle[ii]].quantity,national[nshuffle[ii]].langtude2,national[nshuffle[ii++]].langtude)
    ii=ii>=11?0:ii
    if(isDark){
        for(let i = 0;i<document.querySelectorAll(".card").length;i++){
            document.querySelectorAll(".card")[i].classList.add("darkCard")
        }    
    }
} else {
    callCard(interNational[inshuffle[ii]].image,interNational[inshuffle[ii]].location,interNational[inshuffle[ii]].type,interNational[inshuffle[ii]].price,interNational[inshuffle[ii]].quantity,interNational[inshuffle[ii++]].langtude2)
    callCard(interNational[inshuffle[ii]].image,interNational[inshuffle[ii]].location,interNational[inshuffle[ii]].type,interNational[inshuffle[ii]].price,interNational[inshuffle[ii]].quantity,interNational[inshuffle[ii++]].langtude2)
    callCard(interNational[inshuffle[ii]].image,interNational[inshuffle[ii]].location,interNational[inshuffle[ii]].type,interNational[inshuffle[ii]].price,interNational[inshuffle[ii]].quantity,interNational[inshuffle[ii++]].langtude2)
    ii=ii>=18?0:ii
    console.log(ii)
    if(isDark){
        for(let i = 0;i<document.querySelectorAll(".card").length;i++){
            document.querySelectorAll(".card")[i].classList.add("darkCard")
        }    
    }
}
})
// shuffle
let nshuffle = []
for (let i = 1; i <=Object.keys(national).length ; i++) {
    nshuffle.push(i)
}
for (let i = 0; i < nshuffle.length; i++) {
    let r = Math.trunc(Math.random() * nshuffle.length)
    let tem = nshuffle[i]
    nshuffle[i] = nshuffle[r]
    nshuffle[r] = tem
}

let inshuffle = []
for (let i = 1; i <=Object.keys(interNational).length ; i++) {
    inshuffle.push(i)
}
for (let i = 0; i < inshuffle.length; i++) {
    let r = Math.trunc(Math.random() * inshuffle.length)
    let tem = inshuffle[i]
    inshuffle[i] = inshuffle[r]
    inshuffle[r] = tem
}
//sorting by 
// let inshuffle2=inshuffle
let sort = []
function sorting (){
    let comparison = 0
    let inc = 0
    for (let i =1 ;i<=Object.keys(interNational).length;i++){
        comparison =Number(interNational[i].price)
        for(let x = 1 ;x<=Object.keys(interNational).length;x++){
            if(comparison>Number(interNational[x].price)){
                inc++
            }else continue
        }
        sort[inc]=i
        inc=0
    }
}
sorting()
console.log(sort)
function test (){
let book = document.getElementsByClassName("book")
console.log(book)
}
function booking (e){
    let title =e.querySelector(".title").textContent
    let price =e.querySelector(".price").textContent
    let capacity =e.querySelector(".quantity").textContent
    let longtiude2 =e.querySelector(".longtiude2").textContent
    let longtiude =e.querySelector(".longtiude").textContent == "undefined" ?["30.12190055847168", "31.40559959411621"] : e.querySelector(".longtiude").textContent
    // console.log(title,price,longtiude)
    window.location.href = `booking.html?title=${title}&price=${price}&capacity=${capacity}&longtiude2=${longtiude2}&longtiude=${longtiude}&active=${active}`;
}
console.log(document.getElementsByTagName("link")[1])
// map

// const map = L.map('map').setView([51.505, -0.09], 4);
// const atributtion = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// const tilesurl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
// L.tileLayer(tilesurl,{atributtion}).addTo(map)
// L.marker([51.5, -0.09]).addTo(map);

// // Create two markers
// const marker1 = L.marker([30.12190055847168, 31.40559959411621]).addTo(map);
// const marker2 = L.marker([30.55, -0.1]).addTo(map);

// // Create a polyline between the markers
// const polyline = L.polyline([marker1.getLatLng(), marker2.getLatLng()], {color: 'green'}).addTo(map);

// // zoom the map to the polyline
// map.fitBounds(polyline.getBounds());

// dark mode
    let darkBtn = document.getElementById("darkBtn");
    let isDark = false;
    let body = document.querySelector('body')
    let landPage = document.querySelector(".landing-page")
    let nav = document.getElementById('nav')
    darkBtn.addEventListener('click',function(){
    if(isDark){
        isDark = false
    }else{
        isDark = true
    }
    body.classList.toggle('dark')
    nav.classList.toggle("navbar-dark")
    landPage.classList.toggle("dark")
    landPage.classList.toggle("blg")
    nav.classList.toggle("bg-dark")
    for(let i = 0;i<document.querySelectorAll(".card").length;i++){
        document.querySelectorAll(".card")[i].classList.toggle("darkCard")
    }
})


    // let login = {"user":"1234","driver":"1234"}
    // active true in international