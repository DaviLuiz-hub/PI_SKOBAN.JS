const pieces = buildGameBoard();
const playerPiece = createBoardPiece(pieces.player, 'player');



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
  event.preventDefault();

  handlePieceMovement(event.code);
});

/** Tarefa #1: implementar função para localizar uma caixa à partir de um
* uma dada coordenada.
*/
function findBoxAtPosition(pos){
  return boxes.find((caixa) => caixa.x === pos.x && caixa.y === pos.y);
}

/** Tarefa #2: modificar a função abaixo de forma a tratar tando a movimentação
* do jogador quanto das caixas.
*/
function handlePieceMovement(keycode){
  // Variável destinada ao pré-cálculo da posição do jogador
  const next = player.nextPosition(keycode);
  // (Modificar) Variável para detectar a "presença" de outra peça
  const foundPice = null;

  // Implementar lógica caso encontre uma outra peça no caminho.
  if(foundPice) {

  }
  // E caso não encontre outra peça...
  else {
      // Faça as modificações que forem necessárias para manter o
      // funcionamento do jogo.
      if (verifyPosition(next)) {
          player.moveTo(next);
      }
  }
}