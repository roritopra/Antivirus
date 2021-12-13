class Cel2{
    constructor(mapReference,pjCol,pjFil,xPos,yPos,chargerX,chargerY,chargerCol,chargerFil,chargerAtrapada,antivirusX,antivirusY,antivirusCol,antivirusFil,antivirusAtrapado){
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
        //batery
        this.chargerX = chargerX;
        this.chargerY = chargerY;
        this.chargerCol = chargerCol;
        this.chargerFil = chargerFil;
        this.chargerAtrapada = chargerAtrapada;
        this.chargerCol = 7;
        this.chargerFil = 2;
        this.chargerX = (this.chargerCol * 100 + 10);
        this.chargerY = (this.chargerFil * 100 + 10);
        this.chargerAtrapada = false;
        this.chargerAparecida = true;
        //antivirus
        this.antivirusX = antivirusX;
        this.antivirusY = antivirusY;
        this.antivirusCol = antivirusCol;
        this.antivirusFil = antivirusFil;
        this.antivirusAtrapado = antivirusAtrapado;
        this.antivirusCol = 11;
        this.antivirusFil = 3;
        this.antivirusX = (this.antivirusCol * 100 + 10);
        this.antivirusY = (this.antivirusFil * 100 + 10);
        this.antivirusAtrapado = false;
        this.antivirusAparecido = true;
  
        this.puerta2Aparecido = false;
    }
  
    mostrar(){
        image(celu2, this.xPos, this.yPos,100,100);
        if (!this.chargerAtrapada) {
            image(charger,this.chargerX,this.chargerY,80,80);
        }
        if(!this.chargerAparecida) {
            image(charger,1250,260,100,100);
        }
        if (!this.antivirusAtrapado) {
            image(antivirus,this.antivirusX,this.antivirusY,80,80);
        }
        if(!this.antivirusAparecido) {
            image(antivirus,1250,430,100,100);
        }
        if(!this.puerta2Aparecido) {
            image(puerta2,699.252,602.301);
        }
    }
  
    verifyItem(){
        if(dist(this.xPos,this.yPos,this.chargerX,this.chargerY) < 50){
            this.chargerAtrapada = true;
            this.chargerAparecida = false;
            this.puerta2Aparecido = true;
        }
        if(dist(this.xPos,this.yPos,this.antivirusX,this.antivirusY) < 50){
            this.antivirusAtrapado = true;
            this.antivirusAparecido = false;
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
  