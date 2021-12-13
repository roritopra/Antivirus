class Cel4{
    constructor(mapReference,pjCol,pjFil,xPos,yPos,chargerX,chargerY,chargerCol,chargerFil,chargerAtrapada,chipX,chipY,chipCol,chipFil,chipAtrapado){
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
        this.chargerCol = 11;
        this.chargerFil = 1;
        this.chargerX = (this.chargerCol * 100 + 10);
        this.chargerY = (this.chargerFil * 100 + 10);
        this.chargerAtrapada = false;
        this.chargerAparecida = true;
        //chip
        this.chipX = chipX;
        this.chipY = chipY;
        this.chipCol = chipCol;
        this.chipFil = chipFil;
        this.chipAtrapado = chipAtrapado;
        this.chipCol = 11;
        this.chipFil = 6;
        this.chipX = (this.chipCol * 100 + 10);
        this.chipY = (this.chipFil * 85);
        this.chipAtrapado = false;
        this.chipAparecido = true;
  
        this.puerta2Aparecido = false;
    }
  
    mostrar(){
        image(celu4, this.xPos, this.yPos,100,100);
        if (!this.chargerAtrapada) {
            image(charger,this.chargerX,this.chargerY,80,80);
        }
        if(!this.chargerAparecida) {
            image(charger,1250,260,100,100);
        }
        if (!this.chipAtrapado) {
            image(chip,this.chipX,this.chipY,70,70);
        }
        if(!this.chipAparecido) {
            image(chip,1250,430,100,100);
        }
        if(!this.puerta2Aparecido) {
            image(puerta2,492.756,602.301);
        }
    }
  
    verifyItem(){
        if(dist(this.xPos,this.yPos,this.chargerX,this.chargerY) < 50){
            this.chargerAtrapada = true;
            this.chargerAparecida = false;
            this.puerta2Aparecido = true;
        }
        if(dist(this.xPos,this.yPos,this.chipX,this.chipY) < 50){
            this.chipAtrapado = true;
            this.chipAparecido = false;
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
            this.xPos = (this.pjCol * 100);
            this.yPos = (this.pjFil * 100);
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
    setPjFil(pjFil){
        this.pjFil = pjFil;
    }
    
  
  }