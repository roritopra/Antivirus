class Cel1{
    constructor(mapReference,pjCol,pjFil,xPos,yPos,chargerX,chargerY,chargerCol,chargerFil,chargerAtrapada,bateryX,bateryY,bateryCol,bateryFil,bateryAtrapado){
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
        this.chargerCol = 8;
        this.chargerFil = 1;
        this.chargerX = (this.chargerCol * 100 + 10);
        this.chargerY = (this.chargerFil * 100 + 10);
        this.chargerAtrapada = false;
        this.chargerAparecida = true;
        //batery
        this.bateryX = bateryX;
        this.bateryY = bateryY;
        this.bateryCol = bateryCol;
        this.bateryFil = bateryFil;
        this.bateryAtrapado = bateryAtrapado;
        this.bateryCol = 0;
        this.bateryFil = 6;
        this.bateryX = (this.bateryCol * 100 + 10);
        this.bateryY = (this.bateryFil * 100 + 10);
        this.bateryAtrapado = false;
        this.bateryAparecido = true;
  
        this.puerta2Aparecido = false;
    }
  
    mostrar(){
        image(celu1, this.xPos, this.yPos,100,100);
        if (!this.chargerAtrapada) {
            image(charger,this.chargerX,this.chargerY,80,80);
        }
        if(!this.chargerAparecida) {
            image(charger,1250,260,100,100);
        }
        if (!this.bateryAtrapado) {
            image(batery,this.bateryX,this.bateryY,80,80);
        }
        if(!this.bateryAparecido) {
            image(batery,1250,430,100,100);
        }
        if(!this.puerta2Aparecido) {
            image(puerta2,450,602.301);
        }
    }
  
    verifyItem(){
        if(dist(this.xPos,this.yPos,this.chargerX,this.chargerY) < 50){
            this.chargerAtrapada = true;
            this.chargerAparecida = false;
            this.puerta2Aparecido = true;
        }
        if(dist(this.xPos,this.yPos,this.bateryX,this.bateryY) < 50){
            this.bateryAtrapado = true;
            this.bateryAparecido = false;
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