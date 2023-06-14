var image = document.getElementById("image");
document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"
let start = 80;
let move = 0;
let movementspeed = 5;
let movementmargin = 84;
function checkKey(e) {
    function updatetank()
    {
        image.style.marginLeft = `${move}px`;
        image.style.backgroundPosition = `${start}px 0px`;
    }
    function changeright(){
        image.style.transform = "rotate(90deg)"
        movementmargin = 84;
        start = start + movementmargin;
        move = move + movementspeed;
    }
    function changeleft(){
        image.style.transform = "rotate(270deg)"
         
        movementmargin = -84;
        start = start - movementmargin;
        move = move - movementspeed;
    }
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
    } else if (e.keyCode == '38') {  // up arrow
        console.log("up arrow");
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");
        changeleft();
        updatetank();
    } else if (e.keyCode == '39') {   // right arrow
    	console.log("right arrow");
        changeright();
        updatetank();
    }
}
