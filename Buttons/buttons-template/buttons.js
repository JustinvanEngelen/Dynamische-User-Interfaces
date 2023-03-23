var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")

var count1 = 0;
var count2 = 0;
var count3 = 0;
var current = 0;
button1.innerHTML = count1;
button2.innerHTML = count2;
button3.innerHTML = count3;
button1.onclick=button1_onclick;
button2.onclick=button2_onclick;
button3.onclick=button3_onclick;

function button1_onclick(){
    if(current !== 1){
    count1++;}
    button1.innerHTML=count1;
    document.getElementById("buttons").style.backgroundImage= "URL(images/bg1.jpg)"
    document.getElementById("fotos").src = "images/1.jpg"
    document.getElementById("button1").style.backgroundColor = "red"
    document.getElementById("button2").style.backgroundColor = "green"
    document.getElementById("button3").style.backgroundColor = "green"
    current = 1;
}

function button2_onclick(){
    if(current !== 2){
    count2++;}
    button2.innerHTML=count2;
    document.getElementById("buttons").style.backgroundImage= "URL(images/bg2.jpg)"
    document.getElementById("fotos").src = "images/2.jpg"
    document.getElementById("button1").style.backgroundColor = "green"
    document.getElementById("button2").style.backgroundColor = "red"
    document.getElementById("button3").style.backgroundColor = "green"
    current = 2;
}

function button3_onclick(){
    if(current !== 3){
    count3++;}
    button3.innerHTML=count3;
    document.getElementById("buttons").style.backgroundImage= "URL(images/bg3.jpg)"
    document.getElementById("fotos").src = "images/3.jpg"
    document.getElementById("button1").style.backgroundColor = "green"
    document.getElementById("button2").style.backgroundColor = "green"
    document.getElementById("button3").style.backgroundColor = "red"
    current = 3;
}

