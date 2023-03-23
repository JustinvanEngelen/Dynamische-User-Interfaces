var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var count1 = 1;
var count2 = 100;

button1.innerHTML = count1;
button2.innerHTML = count2;
button1.onclick=button1_onclick;
button2.onclick=button2_onclick;

function button1_onclick(){
    count1++;
    button1.innerHTML=count1;
}

function button2_onclick(){
    count2--;
    button2.innerHTML=count2;
}

