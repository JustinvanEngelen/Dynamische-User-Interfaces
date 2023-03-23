let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";
var verdiepingen
alert(uitleg);
let gewenste_aantal_autos = prompt("Hoeveel autos wilt u kwijt in de parkeergarage?");
if (gewenste_aantal_autos < 80)
    verdiepingen = 0
else
    gewenste_aantal_autos = gewenste_aantal_autos - 80
    verdiepingen = Math.ceil(gewenste_aantal_autos/120)


let antwoord = "U heeft "+verdiepingen+" verdiepingen nodig";
document.getElementById("antwoord").innerText = antwoord;

console.log("Om het gewenste aantal autos kwijt te kunnen heb ik "+verdiepingen+" verdieping(en) nodig.")