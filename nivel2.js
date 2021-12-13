class nivel2{
  constructor(){
      this.mapa2 = [];
      for(let i = 0 ; i < 7 ; i++){
          this.mapa2.push(new Array(12));
      }
      
      for(let fil = 0 ; fil < 7 ; fil++){
          for(let col = 0 ; col < 12 ; col++){
              this.mapa2[fil][col] = 0;
          }
      }
      this.setObstaculos2();
  }
  setObstaculos2(){
      this.mapa2[0][0] = 1;
      this.mapa2[0][1] = 1;
      this.mapa2[0][2] = 1;
      this.mapa2[0][3] = 1;
      this.mapa2[0][4] = 1;
      this.mapa2[0][5] = 1;
      this.mapa2[0][6] = 1;
      this.mapa2[0][7] = 1;
      this.mapa2[0][8] = 1;
      this.mapa2[0][9] = 1;
      this.mapa2[0][10] = 1;
      this.mapa2[0][11] = 1;
      this.mapa2[1][1] = 1;
      this.mapa2[1][3] = 1;
      this.mapa2[1][5] = 1;
      this.mapa2[1][7] = 1;
      this.mapa2[1][8] = 1;
      this.mapa2[1][9] = 1;
      this.mapa2[1][10] = 1;
      this.mapa2[1][11] = 1;
      this.mapa2[2][8] = 1;
      this.mapa2[3][1] = 1;
      this.mapa2[3][3] = 1;
      this.mapa2[3][5] = 1;
      this.mapa2[3][7] = 1;
      this.mapa2[3][8] = 1;
      this.mapa2[4][8] = 1;
      this.mapa2[5][0] = 1;
      this.mapa2[5][1] = 1;
      this.mapa2[5][2] = 1;
      this.mapa2[5][8] = 1;
      this.mapa2[6][0] = 1;
      this.mapa2[6][1] = 1;
      this.mapa2[6][2] = 1;
  }
  mostrar(){
      image(fondo2, 0, 0);
  }

 getMapReference2(){
     return this.mapa2;
 }
}