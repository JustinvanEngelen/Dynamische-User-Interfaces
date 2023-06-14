var partijen =["D66","CDA","BBB","VVD","SGP","PVV"];
var score = [0,0,0,0,0,0,0,0,0,0,0,0];

for (let i = 0; i < partijen.length; i++) {
  const button = document.createElement('button');
  button.id = `button${i}`;
  button.textContent = partijen[i];
  button.addEventListener('click', () => clickBtn(i));
  container.appendChild(button);
}

const submit = document.createElement('button');
submit.id = 'submit';
submit.textContent = 'Submit';
submit.addEventListener('click', () => submitBtn());
container.appendChild(submit);


function clickBtn(i) {
    score[i] += 1;
    }

    function submitBtn() {
        let maxScore = Math.max(...score);
        let winnerCount = score.filter((s) => s === maxScore).length;
    
        // Partijen met gelijke score
        const gelijkspelPartijen = [];
        for (let i = 0; i < partijen.length; i++) {
            if (score[i] === maxScore) {
                gelijkspelPartijen.push(partijen[i]);
            }
        }
    
        for (let i = 0; i < partijen.length; i++) {
            const display = document.createElement('div');
            display.id = `display${i}`;
            display.textContent = `${partijen[i]}: ${score[i]} stem(men)`;
            container.appendChild(display);
            const button = document.getElementById(`button${i}`);
            button.remove();
        }
        
        const submit = document.getElementById('submit');
        submit.remove();
    
        if (winnerCount === 1) {
            const winner = document.createElement('div');
            winner.id = 'winner';
            winner.textContent = `De winnaar is ${partijen[score.indexOf(maxScore)]}!`;
            container.appendChild(winner);
        } else {
            const draw = document.createElement('div');
            draw.id = 'draw';
            draw.textContent = `Het is een gelijkspel! De partijen die gelijk staan zijn: ${gelijkspelPartijen.join(', ')}`;
            container.appendChild(draw);
        }
    }
    





