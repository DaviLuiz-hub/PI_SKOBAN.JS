
const DIST_SALTO = 66;
const MARGIN_FIX = 4;

function Piece(posX, posY) {
    this.x = posX
    this.y = posY

    this.nextPosition= function(keycode) {
        if (keycode == "ArrowDown") {
            this.x += 1
            this.y += 0
        }



        if (keycode == "ArrowUp") {
            this.x += -1
            this.y += 0
        }


        if (keycode == "ArrowLeft") {
            this.x += 0
            this.y += -1
        }



        if (keycode == "ArrowRight") {
            this.x += 0
            this.y += 1
        }

        console.log(keycode, this)
        const k = this.x * 4 + this.y;
       
    }

    this.moveTo = function (position) {
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






 

  

