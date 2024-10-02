
const DIST_SALTO = 66;
const MARGIN_FIX = 4;

function Piece(posX, posY) {
    this.x = posX
    this.y = posY

    this.nextPosition= function(keycode) {
        let posX = this.x
        let posY = this.y

        if (keycode == "ArrowDown") {
            posX+= 0
            posY += 1
        }



        if (keycode == "ArrowUp") {
            posX+= 0
            posY += -1
        }


        if (keycode == "ArrowLeft") {
            posX+= -1
            posY += 0
        }



        if (keycode == "ArrowRight") {
            posX+= 1
            posY += 0
        }

        console.log(keycode, this)
        // const k = this.x * 4 + this.y;
        
       return {x:posX, y:posY}
    }

    this.moveTo = function (position) {console.log(position)
        this.x = position.x;
        this.y = position.y;
    
        this.updateElementPosition();
    }

    this.updateElementPosition = function () {
        this.element.style.left = calculaPosicao(this.x);
        this.element.style.top = calculaPosicao(this.y);
    }
    function calculaPosicao(qtd) {
        return `${qtd * DIST_SALTO + MARGIN_FIX}px`;
    }

    this.insertElementInto = function (className, parent) {
        this.element = createGameElement('div', className, parent);
      
        this.updateElementPosition();
      }
}






 

  

