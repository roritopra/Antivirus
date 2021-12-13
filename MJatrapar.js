class MJratrapar{
  constructor(mapReference,cCol,cFil,cPosX,cPosY,batrapadaX,batrapadaY,batrapadaCol,batrapadaFil,batrapadaAtrapado,batrapadaCol2,batrapadaFil2,batrapadaPosX2,batrapadaPosY2,batrapadaAtrapado2,
    batrapadaCol3,batrapadaFil3,batrapadaPosX3,batrapadaPosY3,batrapadaAtrapado3,batrapadaCol4,batrapadaFil4,batrapadaPosX4,batrapadaPosY4,batrapadaAtrapado4,batrapadaCol5,batrapadaFil5,batrapadaPosX5,batrapadaPosY5,batrapadaAtrapado5){
      //celmj2
      this.cCol = cCol;
      this.cFil = cFil;
      this.cPosX = cPosX; 
      this.cPosY = cPosY;
      this.mapReference = mapReference;
      this.cCol = 1;
      this.cFil = 3; 
      this.cPosX = (this.cCol * 100);
      this.cPosY = (this.cFil * 100); 
      //batrapada
      this.batrapadaX = batrapadaX;
      this.batrapadaY = batrapadaY;
      this.batrapadaCol = batrapadaCol;
      this.batrapadaFil = batrapadaFil;
      this.batrapadaAtrapado = batrapadaAtrapado;

      this.batrapadaCol2 = batrapadaCol2;
      this.batrapadaFil2 = batrapadaFil2;
      this.batrapadaPosX2 = batrapadaPosX2; 
      this.batrapadaPosY2 = batrapadaPosY2;
      this.batrapadaAtrapado2 = batrapadaAtrapado2;

      this.batrapadaCol3 = batrapadaCol3;
      this.batrapadaFil3 = batrapadaFil3;
      this.batrapadaPosX3 = batrapadaPosX3; 
      this.batrapadaPosY3 = batrapadaPosY3;
      this.batrapadaAtrapado3 = batrapadaAtrapado3;

      this.batrapadaCol4 = batrapadaCol4;
      this.batrapadaFil4 = batrapadaFil4;
      this.batrapadaX4 = batrapadaPosX4; 
      this.batrapadaPosY4 = batrapadaPosY4;
      this.batrapadaAtrapado4 = batrapadaAtrapado4;

      this.batrapadaCol5 = batrapadaCol5;
      this.batrapadaFil5 = batrapadaFil5;
      this.batrapadaPosX5 = batrapadaPosX5; 
      this.batrapadaPosY5 = batrapadaPosY5;
      this.batrapadaAtrapado5 = batrapadaAtrapado5;

      this.batrapadaCol = 3;
      this.batrapadaFil = 1;
      this.batrapadaPosX = (this.batrapadaCol * 100 + 15); 
      this.batrapadaPosY = (this.batrapadaFil * 100 + 15);
      this.batrapadaAtrapado = false;

      this.batrapadaCol2 = 2;
      this.batrapadaFil2 = 4;
      this.batrapadaPosX2 = (this.batrapadaCol2 * 100 + 15); 
      this.batrapadaPosY2 = (this.batrapadaFil2 * 100 + 15);
      this.batrapadaAtrapado2 = false;

      this.batrapadaCol3 = 4;
      this.batrapadaFil3 = 2;
      this.batrapadaPosX3 = (this.batrapadaCol3 * 100 + 15); 
      this.batrapadaPosY3 = (this.batrapadaFil3 * 100 + 15);
      this.batrapadaAtrapado3 = false;

      this.batrapadaCol4 = 5;
      this.batrapadaFil4 = 5;
      this.batrapadaPosX4 = (this.batrapadaCol4 * 100 + 15); 
      this.batrapadaPosY4 = (this.batrapadaFil4 * 100 + 15);
      this.batrapadaAtrapado4 = false;

      this.batrapadaCol5 = 6;
      this.batrapadaFil5 = 3;
      this.batrapadaPosX5 = (this.batrapadaCol5 * 100 + 15); 
      this.batrapadaPosY5 = (this.batrapadaFil5 * 100 + 15);
      this.batrapadaAtrapado5 = false;
  }

  mostrar(){
      image(celu2, this.cPosX, this.cPosY,100,100);
      if (!this.batrapadaAtrapado){
          image (batrapada, this.batrapadaPosX,this.batrapadaPosY,70,70);    
      }
      if (!this.batrapadaAtrapado2){
          image (batrapada, this.batrapadaPosX2,this.batrapadaPosY2,70,70);   
      }
      if (!this.batrapadaAtrapado3){
          image (batrapada, this.batrapadaPosX3,this.batrapadaPosY3,70,70);   
      }
      if (!this.batrapadaAtrapado4){
          image (batrapada, this.batrapadaPosX4,this.batrapadaPosY4,70,70);   
      }
      if (!this.batrapadaAtrapado5){
          image (batrapada, this.batrapadaPosX5,this.batrapadaPosY5,70,70);   
      }
  }

  verifyItem(){
      if(dist(this.cPosX,this.cPosY,this.batrapadaPosX,this.batrapadaPosY) < 50){
          this.batrapadaAtrapado = true;
      }
      if(dist(this.cPosX,this.cPosY,this.batrapadaPosX2,this.batrapadaPosY2) < 50){
          this.batrapadaAtrapado2 = true;
      }
      if(dist(this.cPosX,this.cPosY,this.batrapadaPosX3,this.batrapadaPosY3) < 50){
          this.batrapadaAtrapado3 = true;
      }
      if(dist(this.cPosX,this.cPosY,this.batrapadaPosX4,this.batrapadaPosY4) < 50){
          this.batrapadaAtrapado4 = true;
      }
      if(dist(this.cPosX,this.cPosY,this.batrapadaPosX5,this.batrapadaPosY5) < 50){
          this.batrapadaAtrapado5 = true;
      }
  }

  mover(){              
      switch (keyCode) {            
          case LEFT_ARROW: // izquierda
          if (this.cCol - 1 >= 0) {
              if (this.mapReference[this.cFil][this.cCol - 1] === 0) {
              this.cCol -= 1;
              }
          }
          break;
          case RIGHT_ARROW: // derecha
          if (this.cCol + 1 < 12) {
              if (this.mapReference[this.cFil][this.cCol + 1] === 0) {
              this.cCol += 1;
              }
          }
          break;
          case UP_ARROW: // arriba
          if (this.cFil - 1 >= 0) {
              if (this.mapReference[this.cFil - 1][this.cCol] === 0) {
              this.cFil -= 1;
              }
          }
          break;
          case DOWN_ARROW: // abajo
          if (this.cFil + 1 < 7) {
              if (this.mapReference[this.cFil + 1][this.cCol] === 0) {
              this.cFil += 1;
              }
          }
          break;
          }
          this.cPosX = (this.cCol * 100);
          this.cPosY = (this.cFil * 100);
          this.verifyItem();
  }

  getCPosX(){
      return this.cPosX;
  }
  setCPosX(cPosX){
      this.cPosX = cPosX;
  }
  getCPosY(){
      return this.yPos;
  }
  setCPosY(cPosY){
      this.cPosY = cPosY;
  }
  getCCol(){
      return this.cCol;
  }
  setCCol(cCol){
      this.cCol = cCol;
  }
  getCFil(){
      return this.cFil;
  }
  setCFil(cFil){
      this.cFil = cFil;
  }

  getBatrapadaPosX(){
      return this.batrapadaPosX;
  }
  setBatrapadaPosX(batrapadaPosX){
      this.batrapadaPosX = batrapadaPosX;
  }
  getBatrapadaPosY(){
      return this.batrapadaPosY;
  }
  setBatrapadaPosY(batrapadaPosY){
      this.batrapadaPosY = batrapadaPosY;
  }
  getBatrapadaCol(){
      return this.batrapadaCol;
  }
  setBatrapadaCol(batrapadaCol){
      this.batrapadaCol = batrapadaCol;
  }
  getBatrapadaFil(){
      return this.batrapadaFil;
  }
  setBatrapadaFil(batrapadaFil){
      this.batrapadaFil = batrapadaFil;
  }    

  getBatrapadaPosX2(){
      return this.batrapadaPosX2;
  }
  setBatrapadaPosX2(batrapadaPosX2){
      this.batrapadaPosX2 = batrapadaPosX2;
  }
  getBatrapadaPosY2(){
      return this.batrapadaPosY2;
  }
  setBatrapadaPosY2(pezPosY2){
      this.batrapadaPosY2 = batrapadaPosY2;
  }
  getBatrapadaCol2(){
      return this.batrapadaCol2;
  }
  setBatrapadaCol2(batrapadaCol2){
      this.batrapadaCol2 = batrapadaCol2;
  }
  getBatrapadaFil2(){
      return this.batrapadaFil2;
  }
  setBatrapadaFil2(batrapadaFil2){
      this.batrapadaFil2 = batrapadaFil2;
  }   

  getBatrapadaPosX3(){
      return this.batrapadaPosX3;
  }
  setBatrapadaPosX3(batrapadaPosX3){
      this.batrapadaPosX3 = batrapadaPosX3;
  }
  getBatrapadaPosY3(){
      return this.batrapadaPosY3;
  }
  setBatrapadaPosY3(batrapadaPosY3){
      this.batrapadaPosY3 = batrapadaPosY3;
  }
  getBatrapadaCol3(){
      return this.batrapadaCol3;
  }
  setBatrapadaCol3(batrapadaCol3){
      this.batrapadaCol3 = batrapadaCol3;
  }
  getBatrapadaFil3(){
      return this.batrapadaFil3;
  }
  setBatrapadaFil3(batrapadaFil3){
      this.batrapadaFil3 = batrapadaFil3;
  }   

  getBatrapadaPosX4(){
      return this.batrapadaPosX;
  }
  setBatrapadaPosX4(batrapadaPosX4){
      this.batrapadaPosX = batrapadaPosX4;
  }
  getBatrapadaPosY4(){
      return this.batrapadaPosY4;
  }
  setBatrapadaPosY4(batrapadaPosY4){
      this.batrapadaPosY4 = batrapadaPosY4;
  }
  getBatrapadaCol4(){
      return this.batrapadaCol4;
  }
  setBatrapadaCol4(batrapadaCol4){
      this.batrapadaCol4 = batrapadaCol4;
  }
  getBatrapadaFil4(){
      return this.batrapadaFil4;
  }
  setBatrapadaFil4(batrapadaFil4){
      this.batrapadaFil4 = batrapadaFil4;
  }   

  getBatrapadaPosX5(){
      return this.batrapadaPosX5;
  }
  setBatrapadaPosX5(batrapadaPosX5){
      this.batrapadaPosX5 = batrapadaPosX5;
  }
  getBatrapadaPosY5(){
      return this.batrapadaPosY5;
  }
  setBatrapadaPosY5(batrapadaPosY5){
      this.batrapadaPosY5 = batrapadaPosY5;
  }
  getBatrapadaCol5(){
      return this.batrapadaCol5;
  }
  setBatrapadaCol5(batrapadaCol5){
      this.batrapadaCol5 = batrapadaCol5;
  }
  getBatrapadaFil5(){
      return this.batrapadaFil5;
  }
  setBatrapadaFil5(batrapadaFil5){
      this.batrapadaFil5 = batrapadaFil5;
  }
}