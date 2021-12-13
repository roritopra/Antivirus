class troyano{
  constructor(mapReference,tCol,tFil,tPosX,tPosY,tDir, moving,tCol2,tFil2,tPosX2,tPosY2,tDir2,tCol3,tFil3,tPosX3,tPosY3,tDir3){
      this.tCol = tCol;
      this.tFil = tFil;
      this.tPosX = tPosX; 
      this.tPosY = tPosY;
      this.mapReference = mapReference;
      this.tDir = tDir;
      this.moving = moving;

      this.tCol2 = tCol2;
      this.tFil2 = tFil2;
      this.tPosX2 = tPosX2; 
      this.tPosY2 = tPosY2;
      this.tDir2 = tDir2;

      this.tCol3 = tCol3;
      this.tFil3 = tFil3;
      this.tPosX3 = tPosX3; 
      this.tPosY3 = tPosY3;
      this.tDir3 = tDir3;

      this.tCol = 7;
      this.tFil = 2;
      this.tPosX = (this.tCol * 100); 
      this.tPosY = (this.tFil * 100);
      this.tDir = 0;
      this.moving = false;

      this.tCol2 = 0;
      this.tFil2 = 4;
      this.tPosX2 = (this.tCol2 * 100); 
      this.tPosY2 = (this.tFil2 * 100);
      this.tDir2 = 1;

      this.tCol3 = 9;
      this.tFil3 = 2;
      this.tPosX3 = (this.tCol3 * 100); 
      this.tPosY3 = (this.tFil3 * 100);
      this.tDir3 = 1;
  }

  mostrar(){
      image(troya, this.tPosX, this.tPosY);
      image(troya, this.tPosX2, this.tPosY2);
      image(troya, this.tPosX3, this.tPosY3);
  }
  
  mover() {
      if (frameCount % 20 == 0) {
          this.moveEnemy(this.mapReference);
      }
  }

  mover2() {
      if (frameCount % 20 == 0) {
          this.moveEnemy2(this.mapReference);
      }
  }
  mover3() {
      if (frameCount % 20 == 0) {
          this.moveEnemy3(this.mapReference);
      }
  }
  

  moveEnemy() {
      switch (this.tDir) {
          case 0: // izquierda
              if (this.tCol - 1 >= 0) {
                  if (this.mapReference[this.tFil][this.tCol - 1] === 0) {
                      this.tCol -= 1;
                      this.moving = true;
                  }
              }
              break;
          case 1: // derecha
              if (this.tCol + 1 < 12) {
                  if (this.mapReference[this.tFil][this.tCol + 1] === 0) {
                      this.tCol += 1;
                      this.moving = true;
                  }
              }
              break;
      }
      if(this.tPosX >= 700){
          this.tDir = 0;
      }else if(this.tPosX <= 100){
          this.tDir = 1;
      }
      this.tPosX = (this.tCol * 100);
      this.tPosY = (this.tFil * 100);
  }

  moveEnemy2() {
      switch (this.tDir2) {
          case 0: // izquierda
              if (this.tCol2 - 1 >= 0) {
                  if (this.mapReference[this.tFil2][this.tCol2 - 1] === 0) {
                      this.tCol2 -= 1;
                      this.moving = true;
                  }
              }
              break;
          case 1: // derecha
              if (this.tCol2 + 1 < 12) {
                  if (this.mapReference[this.tFil2][this.tCol2 + 1] === 0) {
                      this.tCol2 += 1;
                      this.moving = true;
                  }
              }
              break;
      }
      
      if(this.tPosX2 <= 100){
          this.tDir2 = 1;
      }else if(this.tPosX2 >= 700){
          this.tDir2 = 0;
      }
      this.tPosX2 = (this.tCol2 * 100);
      this.tPosY2 = (this.tFil2 * 100);
  }
  moveEnemy3() {
      switch (this.tDir3) {
          case 0: // arriba
              if (this.tFil3 - 1 >= 0) {
                  if (this.mapReference[this.tFil3 - 1][this.tCol3] === 0) {
                      this.tFil3 -= 1;
                      this.moving = true;
                  }
              }
              break;
          case 1: // abajo
              if (this.tFil3 + 1 < 7) {
                  if (this.mapReference[this.tFil3 + 1][this.tCol3] === 0) {
                      this.tFil3 += 1;
                      this.moving = true;
                  }
              }
              break;
      }
      if(this.tPosY3 <=300){
          this.tDir3 = 1;
      }else if(this.tPosY3 >= 600){
          this.tDir3 = 0;
      }
      this.tPosX3 = (this.tCol3 * 100);
      this.tPosY3 = (this.tFil3 * 100); 
  }

  getTPosX(){
      return this.tPosX;
  }
  setTPosX(tPosX){
      this.tPosX = tPosX;
  }
  getTPosY(){
      return this.tPosY;
  }
  setTPosY(tPosY){
      this.tPosY = tPosY;
  }
  getTCol(){
      return this.tCol;
  }
  setTCol(tCol){
      this.tCol = tCol;
  }
  getTFil(){
      return this.tFil;
  }
  setTFil(tFil){
      this.tFil = tFil;
  }

  getTPosX2(){
      return this.tPosX2;
  }
  setTPosX2(tPosX2){
      this.tPosX2 = tPosX2;
  }
  getTPosY2(){
      return this.tPosY2;
  }
  setTPosY2(tPosY2){
      this.tPosY2 = tPosY2;
  }
  getTCol2(){
      return this.tCol2;
  }
  setTCol2(tCol2){
      this.tCol2 = tCol2;
  }
  getTFil2(){
      return this.tFil2;
  }
  setTFil2(tFil2){
      this.tFil2 = tFil2;
  }
  
  getTPosX3(){
      return this.tPosX3;
  }
  setTPosX3(tPosX3){
      this.tPosX3 = tPosX3;
  }
  getTPosY3(){
      return this.tPosY3;
  }
  setTPosY3(tPosY3){
      this.tPosY3 = tPosY3;
  }
  getTCol3(){
      return this.tCol3;
  }
  setTCol3(tCol3){
      this.tCol3 = tCol3;
  }
  getTFil3(){
      return this.tFil3;
  }
  setTFil3(tFil3){
      this.tFil3 = tFil3;
  }

  
}