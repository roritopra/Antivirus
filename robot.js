class robot{
  constructor(mapReference,rCol,rFil,rPosX,rPosY,rDir, moving,rCol2,rFil2,rPosX2,rPosY2,rDir2, moving2){
      this.rCol = rCol;
      this.rFil = rFil;
      this.rPosX = rPosX; 
      this.rPosY = rPosY;
      this.mapReference = mapReference;
      this.rDir = rDir;
      this.moving = moving;

      this.rCol2 = rCol2;
      this.rFil2 = rFil2;
      this.rPosX2 = rPosX2; 
      this.rPosY2 = rPosY2;
      this.rDir2 = rDir2;
      this.moving2 = moving2;

      this.rCol = 11;
      this.rFil = 3;
      this.rPosX = (this.rCol * 100); 
      this.rPosY = (this.rFil * 100);
      this.rDir = 0;
      this.moving = false;

      this.rCol2 = 2;
      this.rFil2 = 5;
      this.rPosX2 = (this.rCol2 * 100); 
      this.rPosY2 = (this.rFil2 * 100);
      this.rDir2 = 3;
      this.moving2 = false;
  }

  mostrar(){
      image(robot1, this.rPosX, this.rPosY);
      image(robot1, this.rPosX2, this.rPosY2);
  }
  
  mover() {
      if (frameCount % 20 == 0) {
          this.moveEnemy(this.mapReference);
      }
  }
  mover2() {
      if (frameCount % 40 == 0) {
          this.moveEnemy2(this.mapReference);
      }
  }
  

  moveEnemy() {
      switch (this.rDir) {
          case 0: // izquierda
              if (this.rCol - 1 >= 0) {
                  if (this.mapReference[this.rFil][this.rCol - 1] === 0) {
                      this.rCol -= 1;
                      this.moving = true;
                  }
              }
              break;
          case 1: // derecha
              if (this.rCol + 1 < 12) {
                  if (this.mapReference[this.rFil][this.rCol + 1] === 0) {
                      this.rCol += 1;
                      this.moving = true;
                  }
              }
              break;
      }
      if(this.rPosX <= 0){
          this.rDir = 1;
      }else if(this.rPosX >= 1100){
          this.rDir = 0;
      }
      this.rPosX = (this.rCol * 100);
      this.rPosY = (this.rFil * 100);
  }
  moveEnemy2() {
      switch (this.rDir2) {
          case 0: // arriba
              if (this.rFil2 - 1 >= 0) {
                  if (this.mapReference[this.rFil2 - 1][this.rCol2] === 0) {
                      this.rFil2 -= 1;
                      this.moving = true;
                  }
              }
              break;
          case 1: // abajo
              if (this.rFil2 + 1 < 7) {
                  if (this.mapReference[this.rFil2 + 1][this.rCol2] === 0) {
                      this.rFil2 += 1;
                      this.moving = true;
                  }
              }
              break;
      }
      if(this.rPosY2 <=500){
          this.rDir2 = 1;
      }else if(this.rPosY2 >= 600){
          this.rDir2 = 0;
      }
      this.rPosX2 = (this.rCol2 * 100);
      this.rPosY2 = (this.rFil2 * 100); 
  }

  getRPosX(){
      return this.rPosX;
  }
  setRPosX(rPosX){
      this.rPosX = rPosX;
  }
  getRPosY(){
      return this.rPosY;
  }
  setRPosY(rPosY){
      this.rPosY = rPosY;
  }
  getRCol(){
      return this.rCol;
  }
  setRCol(rCol){
      this.rCol = rCol;
  }
  getRFil(){
      return this.rFil;
  }
  setRFil(rFil){
      this.rFil = rFil;
  }

  getRPosX2(){
      return this.rPosX2;
  }
  setRPosX2(rPosX2){
      this.rPosX2 = rPosX2;
  }
  getRPosY2(){
      return this.rPosY2;
  }
  setRPosY2(rPosY2){
      this.rPosY2 = rPosY2;
  }
  getRCol2(){
      return this.rCol2;
  }
  setRCol2(rCol2){
      this.rCol2 = rCol2;
  }
  getRFil2(){
      return this.rFil2;
  }
  setRFil2(rFil2){
      this.rFil2 = rFil2;
  }
  

  
}