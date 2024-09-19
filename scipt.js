
let x = 3;
let y = 4;

const ElementplayeR = document.querySelector('.player');
console.log(player);

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

const player = new Player (3 , 4)


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
}







