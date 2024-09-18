







function buildGameBoard(numRows, numCols, callback) {
    const game = document.getElementById("game");
    const tabuleiro = document.createElement('div');
    tabuleiro.classList.add('tabuleiro');

    for (let k = 0; k < numRows; k++) {

        const row = document.createElement('div');
        row.classList.add('row');
        tabuleiro.append(row);

        for (let i = 0; i < numCols; i++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            row.append(celula);

            if (callback( numRows, numCols, k, i)) {
            celula.classList.add('flag');
            }
        }
    }
    game.append(tabuleiro);
}





function rule0(numRows, numCols, k, i) {

   return (k <= 4); 
       
    
}
buildGameBoard(8, 8, rule0)





function rule1 ( numRows, numCols, k, i){

return ( i % 2 == 0); 



}
buildGameBoard(8, 8, rule1)





function rule2( numRows, numCols, k, i){
    return ( k % 2 == 1 )
}
buildGameBoard(8, 8, rule2)






function rule3(  numRows, numCols, k, i){
    return (k % 2 == 0)
}
buildGameBoard(8, 8, rule3)





function rule4(  numRows, numCols, k, i){
    return (i == k );
}
buildGameBoard(8, 8, rule4)





function rule5(  numRows, numCols, k, i){
  return ( k == 3)
}
buildGameBoard( 8, 8, rule5)





function rule6(  numRows, numCols, k, i){
    return ( i==5 )
  }
  buildGameBoard( 8, 8, rule6)




  function rule7(  numRows, numCols, k, i){
    return ( i==5 || k == 3 )
  }
  buildGameBoard( 8, 8, rule7)



  function rule8(  numRows, numCols, k, i){
    return ( i==5 && k == 3 )
  }
  buildGameBoard( 8, 8, rule8)






  function rule9(  numRows, numCols, k, i){
    return ( k == 0 || k ==numRows-1   || i == 0 || i == numCols- 1);
}
buildGameBoard(8, 8, rule9)







function rule10(  numRows, numCols, k, i){
    return (k == 1 || k== numRows-2 || i == 1 || i== numCols-2 );
}
buildGameBoard(8, 8, rule10)