let list = ['A', 'B', 'C', 'D'];
for (let i = 0; i < list.length; i++){
    for (let j = 0; j < list.length; j++){
        if (i == j || i>j) continue;
        document.getElementById("content").innerHTML += list[i] + list[j] + "<br>";
    }
}

