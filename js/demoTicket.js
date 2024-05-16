'use strict';
// variables
let i = 0;
let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;
let pname = document.getElementById("pname");
let terminal = document.getElementById("terminal");
let gate = document.getElementById("gate");
let flight = document.getElementById("flight");
let seat = document.getElementById("seat");
let from = document.getElementById("from");
let to = document.getElementById("to");
let in_pname = document.querySelector(".pname");
let in_terminal = document.querySelector(".terminal");
let in_gate = document.querySelector(".gate");
let in_flight = document.querySelector(".flight");
let in_seat = document.querySelector(".seat");
let in_from = document.querySelector(".from");
let in_to = document.querySelector(".to");

// functions
function typing(){
    if(i<in_pname.value.length){
        pname.innerHTML += in_pname.value.charAt(i);
        i++;
        setTimeout(typing,100)
    }
}
function typing1(){
    if(i1<in_terminal.value.length){
        terminal.innerHTML += in_terminal.value.charAt(i1);
        i1++;
        setTimeout(typing1,100)
    }
}
function typing2(){
    if(i2<in_gate.value.length){
        gate.innerHTML += in_gate.value.charAt(i2);
        i2++;
        setTimeout(typing2,100)
    }
}
function typing3(){
    if(i3<in_flight.value.length){
        flight.innerHTML += in_flight.value.charAt(i3);
        i3++;
        setTimeout(typing3,100)
    }
}
function typing4(){
    if(i4<in_seat.value.length){
        seat.innerHTML += in_seat.value.charAt(i4);
        i4++;
        setTimeout(typing4,100)
    }
}
function typing5(){
    if(i5<in_from.value.length){
        from.innerHTML += in_from.value.charAt(i5);
        i5++;
        setTimeout(typing5,100)
    }
}
function typing6(){
    if(i6<in_to.value.length){
        to.innerHTML += in_to.value.charAt(i6);
        i6++;
        setTimeout(typing6,100)
    }
}

