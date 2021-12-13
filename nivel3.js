class nivel3{
  constructor(){
      this.mapa3 = [];
      for(let i = 0 ; i < 7 ; i++){
          this.mapa3.push(new Array(12));
      }
      
      for(let fil = 0 ; fil < 7 ; fil++){
          for(let col = 0 ; col < 12 ; col++){
              this.mapa3[fil][col] = 0;
          }
      }
      this.setObstaculos3();

      this.time = 120;
  }
  // [fila][col] --> y, x
  setObstaculos3(){
      this.mapa3[0][0] = 1;
      this.mapa3[0][1] = 1;
      this.mapa3[0][2] = 1;
      this.mapa3[0][3] = 1;
      this.mapa3[0][4] = 1;
      this.mapa3[0][5] = 1;
      this.mapa3[0][6] = 1;
      this.mapa3[0][7] = 1;
      this.mapa3[0][8] = 1;
      this.mapa3[0][9] = 1;
      this.mapa3[0][10] = 1;
      this.mapa3[0][11] = 1;
      this.mapa3[1][2] = 1;
      this.mapa3[1][3] = 1;
      this.mapa3[1][4] = 1;
      this.mapa3[1][7] = 1;
      this.mapa3[1][8] = 1;
      this.mapa3[1][9] = 1;
      this.mapa3[2][3] = 1;
      this.mapa3[2][4] = 1;
      this.mapa3[2][7] = 1;
      this.mapa3[2][8] = 1;
      this.mapa3[4][0] = 1;
      this.mapa3[4][1] = 1;
      this.mapa3[4][2] = 1;
      this.mapa3[4][3] = 1;
      this.mapa3[4][4] = 1;
      this.mapa3[4][5] = 1;
      this.mapa3[4][6] = 1;
      this.mapa3[4][7] = 1;
      this.mapa3[4][8] = 1;
      this.mapa3[4][9] = 1;
      this.mapa3[4][10] = 1;
      this.mapa3[6][3] = 1;
      this.mapa3[6][4] = 1;
      this.mapa3[6][5] = 1;
      this.mapa3[6][6] = 1;
      this.mapa3[6][7] = 1;
      this.mapa3[6][8] = 1;
      this.mapa3[6][9] = 1;
      this.mapa3[6][10] = 1;
  }

  mostrar(){
      image(fondo3, 0, 0);
      //image(barra1, 1200, 0);
  }

 getMapReference3(){
     return this.mapa3;
 }
}