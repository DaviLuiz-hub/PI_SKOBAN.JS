const boardMap = [
  ["#", "#", "#", "#", "#", "#", "#", "#"],
  ["#", ".", ".", ".", ".", ".", ".", "#"],
  ["#", ".", ".", ".", "#", ".", ".", "#"],
  ["#", ".", "#", ".", "G", ".", ".", "#"],
  ["#", ".", ".", ".", "B", "#", ".", "#"],
  ["#", ".", "G", "B", "P", "B", "G", "#"],
  ["#", ".", ".", ".", ".", ".", ".", "#"],
  ["#", "#", "#", "#", "#", "#", "#", "#"]
]

const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;


function createGameElement(elementName, classlist, parentNode) {
  const element = document.createElement(elementName);
  element.classList.add(classlist);

  parentNode.append(element);

  return element;
}


function buildGameBoard() {
  const pieces = {
    boxes: []
  };
  let numOfGoals = 0;
  const game = document.getElementById("game");
  const board = createGameElement('div', 'board', game);
  console.log(board);

  for (let i = 0; i < NUM_ROWS; i++) {
    console.log(board)
    const row = createGameElement('div', 'row', board);

    for (let j = 0; j < NUM_COLS; j++) {
      const cell = createGameElement('div', 'cell', row);

      const char = boardMap[i][j];
      const position = { x: j, y: i }

      if (char === '#') cell.classList.add('wall');

      if (char === 'P') pieces.player = position;
      if (char === 'B') pieces.boxes.push(position);
      if (char === 'G') {
        cell.classList.add('goal')
        numOfGoals++;
      }
    }
  }

  return { pieces, numOfGoals }
}



