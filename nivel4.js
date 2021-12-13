class nivel4{
  constructor(){
      this.mapa4 = [];
      for(let i = 0 ; i < 7 ; i++){
          this.mapa4.push(new Array(12));
      }
      
      for(let fil = 0 ; fil < 7 ; fil++){
          for(let col = 0 ; col < 12 ; col++){
              this.mapa4[fil][col] = 0;
          }
      }
      this.setObstaculos4();
  }
  setObstaculos4(){
      this.mapa4[0][0] = 1;
      this.mapa4[0][1] = 1;
      this.mapa4[0][2] = 1;
      this.mapa4[0][3] = 1;
      this.mapa4[0][4] = 1;
      this.mapa4[0][5] = 1;
      this.mapa4[0][6] = 1;
      this.mapa4[0][7] = 1;
      this.mapa4[0][8] = 1;
      this.mapa4[0][9] = 1;
      this.mapa4[0][10] = 1;
      this.mapa4[0][11] = 1;
      this.mapa4[1][2] = 1;
      this.mapa4[1][3] = 1;
      this.mapa4[1][4] = 1;
      this.mapa4[1][5] = 1;
      this.mapa4[1][6] = 1;
      this.mapa4[1][7] = 1;
      this.mapa4[1][8] = 1;
      this.mapa4[1][9] = 1;
      this.mapa4[2][2] = 1;
      this.mapa4[3][2] = 1;
      this.mapa4[4][2] = 1;
      this.mapa4[4][6] = 1;
      this.mapa4[4][7] = 1;
      this.mapa4[4][8] = 1;
      this.mapa4[4][9] = 1;
      this.mapa4[4][10] = 1;
      this.mapa4[4][11] = 1;
      this.mapa4[5][5] = 1;
      this.mapa4[5][6] = 1;
      this.mapa4[5][7] = 1;
      this.mapa4[5][8] = 1;
  }
  mostrar(){
      image(fondo4, 0, 0);
  }

 getMapReference4(){
     return this.mapa4;
 }
}