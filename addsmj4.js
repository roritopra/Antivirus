class addsmj4 {

  constructor(x, y, carril) {
    this.dir = int(random(0, 2));
    this.y = y + (this.dir * 9);
    this.x = x;

    this.carril = carril;
   
  }

  mostrar() {


    image(add,this.x,this.y,40,90);
    this.mover();

  }

  mover() {

    switch (this.carril) {
      case 1:
        this.y -= 2;
        if (this.y < -85) {
          this.y = int(random(605, 685));
        }
        break;
      case 2:
        this.y += 2;

        if (this.y > 605) {
          this.y = int(random(-180, -85));

        }
        break;

    }

  }

  getRefAdd() {
    return this.y;
  }
}