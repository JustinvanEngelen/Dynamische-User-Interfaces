var image = document.getElementById("image");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"

function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
        image.style.transform = "rotate(0deg)"
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        image.style.transform = "rotate(180deg)"
    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");
        image.style.transform = "rotate(270deg)"
    } else if (e.keyCode == '39') {   // right arrow
    	console.log("right arrow");
        image.style.transform = "rotate(90deg)"
    	image.style.backgroundPosition = `164px 0px`; // check goed de rupsband
    }
}