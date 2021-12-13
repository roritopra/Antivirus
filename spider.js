class spider{
  constructor(mapReference2,sCol,sFil,sPosX,sPosY,sDir, moving,sCol2,sFil2,sPosX2,sPosY2,sCol3,sFil3,sPosX3,sPosY3){
      this.sCol = sCol;
      this.sFil = sFil;
      this.sPosX = sPosX; 
      this.sPosY = sPosY;
      this.mapReference2 = mapReference2;
      this.sDir = sDir;
      this.moving = moving;

      this.sCol2 = sCol2;
      this.sFil2 = sFil2;
      this.sPosX2 = sPosX2; 
      this.sPosY2 = sPosY2;

      this.sCol3 = sCol3;
      this.sFil3 = sFil3;
      this.sPosX3 = sPosX3; 
      this.sPosY3 = sPosY3;

      this.sCol = 0;
      this.sFil = 5;
      this.sPosX = (this.sCol * 100); 
      this.sPosY = (this.sFil * 100);
      this.sDir = 1;
      this.moving = false;

      this.sCol2 = 11;
      this.sFil2 = 2;
      this.sPosX2 = (this.sCol2 * 100); 
      this.sPosY2 = (this.sFil2 * 100);
      this.sDir2 = 0;

      this.sCol3 = 3;
      this.sFil3 = 2;
      this.sPosX3 = (this.sCol3 * 100); 
      this.sPosY3 = (this.sFil3 * 100);
      this.sDir3 = 1;
  }

  mostrar(){
      image(spider1, this.sPosX, this.sPosY,100,100);
      image(spider1, this.sPosX2, this.sPosY2,100,100);
      image(spider1, this.sPosX3, this.sPosY3,100,100);
  }
  
  mover() {
      if (frameCount % 20 == 0) {
          this.moveEnemy(this.mapReference2);
      }
  }
  mover2(){
      if (frameCount % 20 == 0) {
          this.moveEnemy2(this.mapReference2);
      }
  }
  mover3(){
      if (frameCount % 20 == 0) {
          this.moveEnemy3(this.mapReference2);
      }
  }
  

  moveEnemy() {
      switch (this.sDir) {
          case 0: // izquierda
              if (this.sCol - 1 >= 0) {
                  if (this.mapReference2[this.sFil][this.sCol - 1] === 0) {
                      this.sCol -= 1;
                      this.moving = true;
                  }
              }
              break;
          case 1: // derecha
              if (this.sCol + 1 < 12) {
                  if (this.mapReference2[this.sFil][this.sCol + 1] === 0) {
                      this.sCol += 1;
                      this.moving = true;
                  }
              }
              break;
      }
      if(this.sPosX <= 0){
          this.sDir = 1;
      }else if(this.sPosX >= 400){
          this.sDir = 0;
      }
      this.sPosX = (this.sCol * 100); // pixeles
      this.sPosY = (this.sFil * 100); // pixeles
  }
  moveEnemy2() {
      switch (this.sDir2) {
          case 0: // izquierda
              if (this.sCol2 - 1 >= 0) {
                  if (this.mapReference2[this.sFil2][this.sCol2 - 1] === 0) {
                      this.sCol2 -= 1;
                      this.moving = true;
                  }
              }
              break;
          case 1: // derecha
              if (this.sCol2 + 1 < 12) {
                  if (this.mapReference2[this.sFil2][this.sCol2 + 1] === 0) {
                      this.sCol2 += 1;
                      this.moving = true;
                  }
              }
              break;
      }
      if(this.sPosX2 <= 300){
          this.sDir2 = 1;
      }else if(this.sPosX2 >= 1100){
          this.sDir2 = 0;
      }
      this.sPosX2 = (this.sCol2 * 100);
      this.sPosY2 = (this.sFil2 * 100);
  }

  moveEnemy3() {
      switch (this.sDir3) {
          case 0: // arriba
              if (this.sCol3 - 1 >= 0) {
                  if (this.mapReference2[this.sFil3 - 1][this.sCol3] === 0) {
                      this.sFil3 -= 1;
                      this.moving = true;
                  }
              }
              break;
          case 1: // abajo
              if (this.sCol3 + 1 < 7) {
                  if (this.mapReference2[this.sFil3 + 1][this.sCol3] === 0) {
                      this.sFil3 += 1;
                      this.moving = true;
                  }
              }
              break;
      }
      if(this.sPosY3 <= 300){
          this.sDir3 = 1;
      }else if(this.sPosY3 >= 500){
          this.sDir3 = 0;
      }
      this.sPosX3 = (this.sCol3 * 100);
      this.sPosY3 = (this.sFil3 * 100); 
  }
  getSPosX(){
      return this.sPosX;
  }
  setSPosX(sPosX){
      this.sPosX = sPosX;
  }
  getSPosY(){
      return this.sPosY;
  }
  setSPosY(sPosY){
      this.sPosY = sPosY;
  }
  getSCol(){
      return this.sCol;
  }
  setSCol(sCol){
      this.sCol = sCol;
  }
  getSFil(){
      return this.sFil;
  }
  setSFil(sFil){
      this.sFil = sFil;
  }

  getSPosX2(){
      return this.sPosX2;
  }
  setSPosX2(sPosX2){
      this.sPosX2 = sPosX2;
  }
  getSPosY2(){
      return this.sPosY2;
  }
  setSPosY2(sPosY2){
      this.sPosY2 = sPosY2;
  }
  getSCol2(){
      return this.sCol2;
  }
  setSCol2(sCol2){
      this.sCol2 = sCol2;
  }
  getSFil2(){
      return this.sFil2;
  }
  setSFil2(sFil2){
      this.sFil2 = sFil2;
  }

  getSPosX3(){
      return this.sPosX3;
  }
  setSPosX3(sPosX3){
      this.sPosX3 = sPosX3;
  }
  getSPosY3(){
      return this.sPosY3;
  }
  setSPosY3(sPosY3){
      this.sPosY3 = sPosY3;
  }
  getSCol3(){
      return this.sCol3;
  }
  setSCol3(sCol3){
      this.sCol3 = sCol3;
  }
  getSFil3(){
      return this.sFil3;
  }
  setSFil3(sFil3){
      this.sFil3 = sFil3;
  }
  

  
}