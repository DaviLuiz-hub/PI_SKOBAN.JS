
let x = 3;
let y = 4;

const ElementplayeR = document.querySelector('.player');


ElementplayeR.addEventListener("click", function () {

  alert("Clicou no jogador");

})
window.addEventListener("keydown", function (event) { 


 nextPosition(event.code)
})
function Player(posX, posY) {
  this.x = posX
  this.y = posY
  
  
}

const player = new Player (0 , 0)

const celulas = document.querySelectorAll('.cell');
console.log(celulas);

function nextPosition(keycode) {
  if (keycode == "ArrowDown") {
    player.x += 1
    player.y += 0
  }



  if (keycode == "ArrowUp") {
    player.x += -1
    player.y += 0
  }


  if (keycode == "ArrowLeft") {
    player.x += 0
    player.y += -1
  }



  if (keycode == "ArrowRight") {
    player.x += 0
    player.y += 1
  }

  console.log(keycode, player)
  const k = player.x * 4 + player.y;
  celulas[k].append(ElementplayeR);
}








