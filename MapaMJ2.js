class MapaMJ2{
    constructor(){
        this.mapaMj2 = [];
        for(let i = 0 ; i < 6 ; i++){
            this.mapaMj2.push(new Array(7));
        }
        
        for(let fil = 0 ; fil < 6 ; fil++){
            for(let col = 0 ; col < 7 ; col++){
                this.mapaMj2[fil][col] = 0;
            }
        }
        this.setObstaculosMj2()
    }
    setObstaculosMj2(){
        this.mapaMj2[0][0] = 1;
        this.mapaMj2[0][1] = 1;
        this.mapaMj2[0][2] = 1;
        this.mapaMj2[0][3] = 1;
        this.mapaMj2[0][4] = 1;
        this.mapaMj2[0][5] = 1;
        this.mapaMj2[0][6] = 1;
        this.mapaMj2[0][7] = 1;
        this.mapaMj2[1][0] = 1;
        this.mapaMj2[2][0] = 1;
        this.mapaMj2[3][0] = 1;
        this.mapaMj2[4][0] = 1;
        this.mapaMj2[5][0] = 1;
    }
    mostrar(){
        image(minJ2, 0, 0);
    }
    getMapReferenceMj2(){
        return this.mapaMj2;
    }
}