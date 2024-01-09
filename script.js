const button = document.querySelector('button');
const gamearea = document.querySelector("#gamearea");

let t = [];
for (let i = 0; i < 12; i++) {
  t.push(i + 1);
}

for (let i = 0; i < 100; i++) {
  let pos1 = Math.floor(Math.random() * 12);
  let pos2 = Math.floor(Math.random() * 12);
  let temp = t[pos1];
  t[pos1] = t[pos2];
  t[pos2] = temp;
}

let nextnumber = 1;
for (let i = 0; i < 12; i++) {
  const szamdoboz = document.createElement("div");
  szamdoboz.innerHTML = t[i];
  gamearea.appendChild(szamdoboz);

  szamdoboz.addEventListener("click", () => {
    if (szamdoboz.innerText == nextnumber) {
      szamdoboz.classList.add("rejtett");
      nextnumber++;
      if (nextnumber === 13) {
        clearInterval(intervalId);
        szamdoboz.removeEventListener('click', clickHandler);
      }
    }
  });
}

let intervalId;
const szamlalo = document.querySelector("#szamlalo");
function onButtonClick(){
  let ido = 0;
  intervalId = setInterval(function () {
    szamlalo.innerText = ido;
    ido++;
  }, 1000);
  button.removeEventListener('click', onButtonClick);
} 
  
button.addEventListener('click', onButtonClick, { once: true });
