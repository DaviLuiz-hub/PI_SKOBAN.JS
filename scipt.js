
let x = 3;
let y = 4;

const player = document.querySelector('.player');
console.log(player);

player.addEventListener("click", function () {

  alert("Clicou no jogador");

})
window.addEventListener("keydown", function (event) { 


 nextPosition(event.code)
})


function nextPosition(keycode) {
  if (keycode == "ArrowDown") {
    x += 1
    y += 0
  }



  if (keycode == "ArrowUp") {
    x += -1
    y += 0
  }


  if (keycode == "ArrowLeft") {
    x += 0
    y += -1
  }



  if (keycode == "ArrowRight") {
    x += 0
    y += 1
  }

  console.log(x, y)
}





