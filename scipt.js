
let x = 3;
let y = 4;

const player = document.querySelector('.player');
console.log(player);

player.addEventListener("click", function () {

  alert("Clicou no jogador");

})
window.addEventListener("keydown", function (event) {


  // window.alert("pressionou tecla");

  if (event.code == "ArrowDown") {
    x += 1
    y += 0
  }



  if (event.code == "ArrowUp") {
    x += -1
    y += 0
  }


  if (event.code == "ArrowLeft") {
    x += 0
    y += -1
  }



  if (event.code == "ArrowRight") {
    x += 0
    y += 1
  }

  console.log(x, y)
})


