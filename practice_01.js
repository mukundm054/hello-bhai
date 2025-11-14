let a = document.getElementsByClassName("red");
let b = document.getElementsByClassName("yellow");
let c = document.getElementsByClassName("cyan");
let e = document.body;
let f = document.getElementsByClassName("bulb")


//for red button
let RED = function (x) {
    alert("Hi! I am the first button. Please don’t click my brothers… they are weird 😳");
}

a[0].addEventListener("click", RED);

//for yellow button
let YELLOW = function (y) {
    alert("Broooo! Button 1 told you not to click me… now I’m awake 😒");
}

b[0].addEventListener("click", YELLOW);

//for cyan button
let CYAN = function(z){
    alert("GREAT! You clicked all 3 buttons. Now you owe us all a samosa 😭😂");
}

c[0].addEventListener("click", CYAN);


