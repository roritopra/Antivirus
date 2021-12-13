
class Cel3{
    constructor(mapReference,pjCol,pjFil,xPos,yPos,chargerX,chargerY,chargerCol,chargerFil,chargerAtrapada,tarsdX,tarsdY,tarsdCol,tarsdFil,tarsdAtrapado){
        this.pjCol = pjCol;
        this.pjFil = pjFil;
        this.xPos = xPos; 
        this.yPos = yPos;
        this.mapReference = mapReference;
        // posición inicial // remover despues para asignarla por nivel
        this.pjCol = 0;
        this.pjFil = 1; 
        this.xPos = (this.pjCol * 100);
        this.yPos = (this.pjFil * 100); 
        //charger
        this.chargerX = chargerX;
        this.chargerY = chargerY;
        this.chargerCol = chargerCol;
        this.chargerFil = chargerFil;
        this.chargerAtrapada = chargerAtrapada;
        this.chargerCol = 6;
        this.chargerFil = 2;
        this.chargerX = (this.chargerCol * 100 + 10);
        this.chargerY = (this.chargerFil * 100 + 10);
        this.chargerAtrapada = false;
        this.chargerAparecida = true;
        //tarsd
        this.tarsdX = tarsdX;
        this.tarsdY = tarsdY;
        this.tarsdCol = tarsdCol;
        this.tarsdFil = tarsdFil;
        this.tarsdAtrapado = tarsdAtrapado;
        this.tarsdCol = 0;
        this.tarsdFil = 6;
        this.tarsdX = (this.tarsdCol * 100 + 10);
        this.tarsdY = (this.tarsdFil * 100 + 10);
        this.tarsdAtrapado = false;
        this.tarsdAparecido = true;

        this.puertaAparecido = false;
    }

    mostrar(){//aparecer charger en recuadro derecho
        image(celu3, this.xPos, this.yPos);
        if (!this.chargerAtrapada) {
            image(charger,this.chargerX,this.chargerY,80,80);
        }
        if(!this.chargerAparecida) {
            image(charger,1250,260,100,100);
        }
        if (!this.tarsdAtrapado) {
            image(tarsd,this.tarsdX,this.tarsdY,80,80);
        }
        if(!this.tarsdAparecido) {
            image(tarsd,1250,430,100,100);
        }
        if(!this.puertaAparecido) {
            image(puerta,1085.85,417.173);
        }
    }

    verifyItem(){
        if(dist(this.xPos,this.yPos,this.chargerX,this.chargerY) < 50){
            this.chargerAtrapada = true;
            this.chargerAparecida = false;
            this.puertaAparecido = true;
        }
        if(dist(this.xPos,this.yPos,this.tarsdX,this.tarsdY) < 50){
            this.tarsdAtrapado = true;
            this.tarsdAparecido = false;
        }
    }

    mover(){              
        switch (keyCode) {            
            case LEFT_ARROW: // izquierda
            if (this.pjCol - 1 >= 0) {
                if (this.mapReference[this.pjFil][this.pjCol - 1] === 0) {
                this.pjCol -= 1;
                }
            }
            break;
            case RIGHT_ARROW: // derecha
            if (this.pjCol + 1 < 12) {
                if (this.mapReference[this.pjFil][this.pjCol + 1] === 0) {
                this.pjCol += 1;
                }
            }
            break;
            case UP_ARROW: // arriba
            if (this.pjFil - 1 >= 0) {
                if (this.mapReference[this.pjFil - 1][this.pjCol] === 0) {
                this.pjFil -= 1;
                }
            }
            break;
            case DOWN_ARROW: // abajo
            if (this.pjFil + 1 < 7) {
                if (this.mapReference[this.pjFil + 1][this.pjCol] === 0) {
                this.pjFil += 1;
                }
            }
            break;
            }
            this.xPos = (this.pjCol * 100) + 0;
            this.yPos = (this.pjFil * 100) + 0;
            this.verifyItem();
    }

    getXPos(){
        return this.xPos;
    }
    setXPos(xPos){
        this.xPos = xPos;
    }
    getYPos(){
        return this.yPos;
    }
    setYPos(yPos){
        this.yPos = yPos;
    }
    getPjCol(){
        return this.pjCol;
    }
    setPjCol(pjCol){
        this.pjCol = pjCol;
    }
    getPjFil(){
        return this.pjFil;
    }
    setPjFill(pjFil){
        this.pjFil = pjFil;
    }
    

}