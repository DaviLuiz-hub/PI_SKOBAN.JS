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
function findBoxAtPosition(pos) {
  return boxes.find((caixa) => caixa.x === pos.x && caixa.y === pos.y);
}


function handlePieceMovement(keycode) {
  const nextPlayerPosition = player.nextPosition(keycode);
  const caixa = findBoxAtPosition(nextPlayerPosition);

  if (caixa) {
    const nextCaixaPosition = caixa.nextPosition(keycode);
    const outraCaixa = findBoxAtPosition(nextCaixaPosition);

    const caixaCanMove = verifyPosition(nextCaixaPosition);

    if (caixaCanMove && !outraCaixa) {
      caixa.moveTo(nextCaixaPosition);
      player.moveTo(nextPlayerPosition);

    }
  } else {
    const playerCanMove = verifyPosition(nextPlayerPosition);

    if (playerCanMove) {
      player.moveTo(nextPlayerPosition);
    }
  }
}
