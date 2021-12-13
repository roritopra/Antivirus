class nivel1{
  constructor(){
      this.mapa = [];
      for(let i = 0 ; i < 7 ; i++){
          this.mapa.push(new Array(12));
      }
      
      for(let fil = 0 ; fil < 7 ; fil++){
          for(let col = 0 ; col < 12 ; col++){
              this.mapa[fil][col] = 0;
          }
      }
      this.setObstaculos1();
  }
  setObstaculos1(){
      this.mapa[0][0] = 1;
      this.mapa[0][1] = 1;
      this.mapa[0][2] = 1;
      this.mapa[0][3] = 1;
      this.mapa[0][4] = 1;
      this.mapa[0][5] = 1;
      this.mapa[0][6] = 1;
      this.mapa[0][7] = 1;
      this.mapa[0][8] = 1;
      this.mapa[0][9] = 1;
      this.mapa[0][10] = 1;
      this.mapa[0][11] = 1;
      this.mapa[1][1] = 1;
      this.mapa[1][2] = 1;
      this.mapa[1][3] = 1;
      this.mapa[1][4] = 1;
      this.mapa[1][9] = 1;
      this.mapa[1][10] = 1;
      this.mapa[1][11] = 1;
      this.mapa[2][1] = 1;
      this.mapa[2][3] = 1;
      this.mapa[2][4] = 1;
      this.mapa[2][6] = 1;
      this.mapa[2][7] = 1;
      this.mapa[2][9] = 1;
      this.mapa[2][10] = 1;
      this.mapa[2][11] = 1;
      this.mapa[3][2] = 1;
      this.mapa[3][6] = 1;
      this.mapa[3][7] = 1;
      this.mapa[3][9] = 1;
      this.mapa[3][10] = 1;
      this.mapa[3][11] = 1;
      this.mapa[4][6] = 1;
      this.mapa[4][7] = 1;
      this.mapa[5][0] = 1;
      this.mapa[5][1] = 1;
      this.mapa[5][2] = 1;
      this.mapa[5][3] = 1;
      this.mapa[5][4] = 1;
      }
  
  mostrar(){
      image(fondo1, 0, 0);
  }

 getMapReference(){
     return this.mapa;
 }
}