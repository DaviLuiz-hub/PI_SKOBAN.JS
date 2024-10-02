const pieces = buildGameBoard();
const player = createBoardPiece(pieces.player, 'player');
const boxes = [];

for (let box of pieces.boxes) {
    let piece = createBoardPiece(box, 'box');
    boxes.push(piece);
}


function createBoardPiece(piecePosition, className) {
  const board = document.querySelector('.board');
  const piece = new Piece(piecePosition.x, piecePosition.y);
  piece.insertElementInto(className, board);
  
  return piece;
}


function verifyPosition(position) {
  let { x: j, y: i } = position;

  return boardMap[i][j] !== '#';

}







window.addEventListener("keydown", function (event) {
  // event.preventDefault();

  handlePieceMovement(event.code);
});

/** Tarefa #1: implementar função para localizar uma caixa à partir de um
* uma dada coordenada.
*/
function findBoxAtPosition(pos){
  return boxes.find((caixa) => caixa.x === pos.x && caixa.y === pos.y);
}

find

function handlePieceMovement(keycode){
 const nextPlayerPosition = player.nextPosition(keycode);
  const next = player.nextPosition(keycode);





  
  // (Modificar) Variável para detectar a "presença" de outra peça
  const foundPiece = null;
  // Implementar lógica caso encontre uma outra peça no caminho.
  if(foundPiece) {

    const nextBlockposition1 = foundPiece.nextPosition(keycode);
    const nextBlockposition2 = foundPiece.nextPosition(keycode);

    if(nextBlockposition1 &&! nextBlockposition2){

    }
    console.log(nextBlockposition2);
    console.log(nextBlockposition1);

  }
  // E casFo não encontre outra peça...
  else {  
    // Faça as modificações que forem necessárias para manter o
    // funcionamento do jogo.
    if (verifyPosition(next)) {
      player.moveTo(next);
    }
  }
}








  