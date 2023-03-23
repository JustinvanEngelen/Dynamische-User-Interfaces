hoeveelbier= 0
hoeveelfris= 0
hoeveelwijn= 0
bierprijs= 7.50
wijnprijs= 5.50
frisprijs= 2.50
totaal = 0.00

const opties = ["bier", "fris", "wijn", "stop"]
function intro()
{
    alert("Welkom bij de bar")
    alert("Welkom, U kunt kiezen uit fris, bier of wijn.")
    alert("Fris kost €2,50, wijn kost €5,50 en bier kost €7,50.")
    alert("Type stop om de bon te printen.")
}

function bestellen()
{
  while(true){
    
    let bestellen = prompt("Wat wilt u bestellen? (bier, fris en/of wijn)").toLowerCase();
    if (opties.includes(bestellen) == false) {
        continue
    }
        if (bestellen == "stop") {
            break}
        let aantal=prompt("hoeveel "+bestellen+" wilt u bestellen?")
        
        if (bestellen == "bier") {
        hoeveelbier +=parseInt(aantal)
        continue
    }
    if (bestellen == "fris") {
        hoeveelfris += parseInt(aantal)
        continue
    }
    if (bestellen == "wijn") {
        hoeveelwijn += parseInt(aantal)
        continue
    }
    
    else {
        alert("Dat hebben wij niet.")
        continue
    }
  }
}

function bon(){
totaalfris = hoeveelfris*frisprijs
totaalbier = hoeveelbier*bierprijs
totaalwijn = hoeveelwijn*wijnprijs
totaal = totaalfris+totaalbier+totaalwijn
document.getElementById("titel").innerHTML = "Dankuwel voor uw bestelling"
document.getElementById("fris").innerHTML = hoeveelfris +"x"+ " fris €"+totaalfris.toFixed(2)
document.getElementById("bier").innerHTML = hoeveelbier +"x"+ "  bier €"+totaalbier.toFixed(2)
document.getElementById("wijn").innerHTML = hoeveelwijn +"x"+ "  wijn €"+totaalwijn.toFixed(2)
document.getElementById("bon").innerHTML = "Uw totaal is €"+totaal.toFixed(2)
}
intro()

bestellen()

bon()