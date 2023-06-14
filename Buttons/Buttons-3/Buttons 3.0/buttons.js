const container = document.getElementById('container');
color = ['red', 'purple', 'blue', 'orange','black'];
for (let i = 1; i <= 30; i++) {
  const button = document.createElement('button');
  button.id = `button${i}`;
  button.textContent = i;
  button.addEventListener('click', () => clickBtn(i));
  container.appendChild(button);
}
function setLocalStorage() {
  const buttons = Array.from(document.querySelectorAll('[id^="button"]'));
  buttons.forEach((button, i) => {
    localStorage.setItem(`button${i+1}`, 0)
  })
}
function clickBtn(whatCount) {
  const button = document.getElementById(`button${whatCount}`);
  let number = localStorage.getItem(`button${whatCount}`)
  if (number === null) {
    localStorage.setItem(`button${whatCount}`, 0)
    number = 0
  }
  switch (number) {
    case '0':
      button.style.background = color[0];
      break;
    case '1':
      button.style.background = color[1];
      break;
    case '2':
      button.style.background = color[2];
      break;
    case '3':
      button.style.background = color[3];
      button.style.color = 'white';
      break;
    case '4':
      button.style.background = color[4];
      break;
    case '5':
      // button moet helemaal weg
      container.removeChild(button);
      number = -1;
      break;
  }
  number++
  localStorage.setItem(`button${whatCount}`, number)
}
setLocalStorage();