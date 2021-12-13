let inicio;
//nivel 1
let celu1;//IMAGEN
let batery;
let charger;
let spy1;
let fondo1;
let instru1;
let Nivel1;
let enemyspy;
let celular;
//nivel 2
let celu2;
let antivirus;
let troya;
let fondo2;
let instru2;
let Nivel2;
let celular2;
let enemytro;
//nivel 3
let celu3;
let tarsd;
let spider1;
let fondo3;
let instru3;
let Nivel3;
let celular3;
let enemyspi;
//nivel 4
let celu4;
let chip;
let robot1;
let fondo4;
let instru4;
let Nivel4;
let celular4;
let enemyrob;

//puerta niveles
let puerta;
let puerta2;

//tiempo
let time;

//ganaste y perdiste
let ganaste;
let perdiste;

let vida;//imagen
let lives;//contador

//booleano para las immg de las vidas
let can1 = false;
let can2 = false;
let can3 = false;

//MINIJUEGOS **************************
let minJ1;

let minJ2;
let celmj2;
let batrapada;//imagen:bateria atrapada
let mapaMinij2;

let minJ3;

let minJ4;
let anuncio = [];
let posicionX;
let posicionY;
let ganar;

let arriba = false;
let abajo = false;
let derecha = false;
let izquierda = false;

let pantalla;
let add;


function preload() {
  inicio = loadImage('figuras/inicio.png');
  celu1 = loadImage('figuras/celu1.png');
  spy1 = loadImage('figuras/spy.png');
  fondo1 = loadImage('figuras/fondo1.png');
  instru1 = loadImage('figuras/inst1.png');
  batery = loadImage('figuras/batery.png');
  charger = loadImage('figuras/charger.png');
  puerta = loadImage('figuras/Puerta.png');
  puerta2 = loadImage('figuras/Puerta2.png');

  celu2 = loadImage('figuras/celu2.png');
  troya = loadImage('figuras/troyano.png');
  fondo2 = loadImage('figuras/fondo2.png');
  instru2 = loadImage('figuras/inst2.png');
  antivirus = loadImage('figuras/antivirus.png');

  celu3 = loadImage('figuras/celu3.png');
  tarsd = loadImage('figuras/tarsd.png');
  spider1= loadImage('figuras/spider.png');
  fondo3 = loadImage('figuras/fondo3.png');
  instru3 = loadImage('figuras/inst3.png');
  antivirus = loadImage('figuras/antivirus.png');

  celu4 = loadImage('figuras/celu4.png');
  chip = loadImage('figuras/chip.png');
  robot1 = loadImage('figuras/robot.png');
  fondo4 = loadImage('figuras/fondo4.png');
  instru4 = loadImage('figuras/inst4.png');

  ganaste = loadImage('figuras/WIN.png');
  perdiste = loadImage('figuras/GAMEOVER.png');

  vida = loadImage('figuras/vida.png');
  
  minJ1 = loadImage('figuras/MJ1.png')

  minJ2 = loadImage('figuras/MJ2.png');
  batrapada = loadImage('figuras/bateriatrapa.png');

  minJ3 = loadImage('figuras/MJ3.png');

  minJ4 = loadImage('figuras/MJ4.png');
  add = loadImage('figuras/adds.png');

  time = 120;
  lives = 3;
}


function setup() {
  createCanvas(1400, 700);
  pantalla = 0;
  Nivel1 = new nivel1();
  celular = new Cel1(Nivel1.getMapReference());
  enemyspy = new spy(Nivel1.getMapReference());
  Nivel2 = new nivel2();
  celular2 = new Cel2(Nivel2.getMapReference2());
  enemytro = new troyano(Nivel2.getMapReference2());
  Nivel3 = new nivel3();
  celular3 = new Cel3(Nivel3.getMapReference3());
  enemyrob = new robot(Nivel3.getMapReference3());
  Nivel4 = new nivel4();
  celular4 = new Cel4(Nivel4.getMapReference4());
  enemyspi = new spider(Nivel4.getMapReference4());
  mapaMinij2 = new MapaMJ2();
  celmj2 = new MJratrapar(mapaMinij2.getMapReferenceMj2());

  setupMJ4();
}

function draw() {
  background(220);
  pasarNivel();
  switch (pantalla) {
		case 0:
			// pantalla de inicio
      image(inicio, 0, 0);
		break;
		case 1:
			// instrucciones 1
      image(instru1, 0, 0);
		break;
    case 2:
      // nivel 1
      Nivel1.mostrar();
      celular.mostrar();
      enemyspy.mostrar();
      enemyspy.mover();
      enemyspy.mover2();
      enemyspi.mover3();
      verifyEnemy();
      tiempo();
      contvida();//contador
    break;
    case 3:
			// instrucciones 2
      image(instru2, 0, 0);
		break;
    case 4:
			// nivel 2
      Nivel2.mostrar();
      celular2.mostrar();
      enemytro.mostrar();
      enemytro.mover();
      enemytro.mover2();
      enemytro.mover3();
      verifyEnemy();
      tiempo();
      contvida();
		break;
    case 5:
			// instrucciones 3
      image(instru3, 0, 0);
		break;
    case 6:
			// nivel 3
      Nivel3.mostrar();
      celular3.mostrar();
      enemyrob.mostrar();
      enemyrob.mover();
      enemyrob.mover2();
      verifyEnemy();
      tiempo();
      contvida();//contador
		break;
    case 7:
			// instrucciones 4
      image(instru4, 0, 0);
		break;
    case 8:
			// nivel 4
      Nivel4.mostrar();
      celular4.mostrar();
      enemyspi.mostrar();
      enemyspi.mover();
      enemyspi.mover2();
      enemyspi.mover3();
      verifyEnemy();
      tiempo();
      contvida();//contador
		break;
      // perdiste
    case 9:
      image(perdiste,0,0);
    break;
      // ganaste!!!
    case 10:
      image(ganaste,0,0);
    break;
    case 11:
      image(minJ1,0,0);
    break;
    case 12:
      mapaMinij2.mostrar();
      celmj2.mostrar();
    break;
    case 13:
      image(minJ3,0,0);
    break;
    case 14:
      image(minJ4,0,0);
      drawMJ4();
    break;

  }
}

  function verifyEnemy() {
    switch (pantalla) {
      case 0:
      break;
      case 2:
        if (dist(celular.getXPos(), celular.getYPos(), enemyspy.getSPosX(), enemyspy.getSPosY()) < 100){
          celular.chargerAtrapada = false;
          celular.chargerAparecida = true;
          celular.puerta2Aparecido = false;
          celular.chargerCol = 8;
          celular.chargerFil = 1;
          celular.chargerX = (celular.chargerCol * 100+10);
          celular.chargerY = (celular.chargerFil * 100+10);
          celular.bateryAtrapado = false;
          celular.bateryAparecido = true;
          celular.bateryCol = 0;
          celular.bateryFil = 6;
          celular.bateryX = (celular.bateryCol * 100+10);
          celular.bateryY = (celular.bateryFil * 100+10);
          celular.pjCol = 0;
          celular.pjFil = 1;
          celular.xPos = (celular.pjCol * 100);
          celular.yPos = (celular.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 9;
            }
        }
        if (dist(celular.getXPos(), celular.getYPos(), enemyspy.getSPosX2(), enemyspy.getSPosY2()) < 100){
          celular.chargerAtrapada = false;
          celular.chargerAparecida = true;
          celular.puerta2Aparecido = false;
          celular.chargerCol = 8;
          celular.chargerFil = 1;
          celular.chargerX = (celular.chargerCol * 100+10);
          celular.chargerY = (celular.chargerFil * 100+10);
          celular.bateryAtrapado = false;
          celular.bateryAparecido = true;
          celular.bateryCol = 0;
          celular.bateryFil = 6;
          celular.bateryX = (celular.bateryCol * 100+10);
          celular.bateryY = (celular.bateryFil * 100+10);
          celular.pjCol = 0;
          celular.pjFil = 1;
          celular.xPos = (celular.pjCol * 100);
          celular.yPos = (celular.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 9;
            }
        }
        if (dist(celular.getXPos(), celular.getYPos(), enemyspy.getSPosX3(), enemyspy.getSPosY3()) < 100){
          celular.chargerAtrapada = false;
          celular.chargerAparecida = true;
          celular.puerta2Aparecido = false;
          celular.chargerCol = 8;
          celular.chargerFil = 1;
          celular.chargerX = (celular.chargerCol * 100+10);
          celular.chargerY = (celular.chargerFil * 100+10);
          celular.bateryAtrapado = false;
          celular.bateryAparecido = true;
          celular.bateryCol = 0;
          celular.bateryFil = 6;
          celular.bateryX = (celular.bateryCol * 100+10);
          celular.bateryY = (celular.bateryFil * 100+10);
          celular.pjCol = 0;
          celular.pjFil = 1;
          celular.xPos = (celular.pjCol * 100);
          celular.yPos = (celular.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 9;
            }
        }
      break;
      case 4:
        if (dist(celular2.getXPos(), celular2.getYPos(), enemytro.getTPosX(), enemytro.getTPosY()) < 100){
          celular2.chargerAtrapada = false;
          celular2.chargerAparecida = true;
          celular2.puerta2Aparecido = false;
          celular2.chargerCol = 7;
          celular2.chargerFil = 2;
          celular2.chargerX = (celular2.chargerCol * 100);
          celular2.chargerY = (celular2.chargerFil * 100);
          celular2.antivirusAtrapado = false;
          celular2.antivirusAparecido = true;
          celular2.antivirusCol = 11;
          celular2.antivirusFil = 3;
          celular2.antivirusX = (celular2.antivirusCol * 100);
          celular2.antivirusY = (celular2.antivirusFil * 100);
          celular2.pjCol = 0;
          celular2.pjFil = 1;
          celular2.xPos = (celular2.pjCol * 100);
          celular2.yPos = (celular2.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 9;
            }
        }
        if (dist(celular2.getXPos(), celular2.getYPos(), enemytro.getTPosX2(), enemytro.getTPosY2()) < 100){
          celular2.chargerAtrapada = false;
          celular2.chargerAparecida = true;
          celular2.puerta2Aparecido = false;
          celular2.chargerCol = 7;
          celular2.chargerFil = 2;
          celular2.chargerX = (celular2.chargerCol * 100);
          celular2.chargerY = (celular2.chargerFil * 100);
          celular2.antivirusAtrapado = false;
          celular2.antivirusAparecido = true;
          celular2.antivirusCol = 11;
          celular2.antivirusFil = 3;
          celular2.antivirusX = (celular2.antivirusCol * 100);
          celular2.antivirusY = (celular2.antivirusFil * 100);
          celular2.pjCol = 0;
          celular2.pjFil = 1;
          celular2.xPos = (celular2.pjCol * 100);
          celular2.yPos = (celular2.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 9;
            }
        }
        if (dist(celular2.getXPos(), celular2.getYPos(), enemytro.getTPosX3(), enemytro.getTPosY3()) < 100){
          celular2.chargerAtrapada = false;
          celular2.chargerAparecida = true;
          celular2.puerta2Aparecido = false;
          celular2.chargerCol = 7;
          celular2.chargerFil = 2;
          celular2.chargerX = (celular2.chargerCol * 100);
          celular2.chargerY = (celular2.chargerFil * 100);
          celular2.antivirusAtrapado = false;
          celular2.antivirusAparecido = true;
          celular2.antivirusCol = 11;
          celular2.antivirusFil = 3;
          celular2.antivirusX = (celular2.antivirusCol * 100);
          celular2.antivirusY = (celular2.antivirusFil * 100);
          celular2.pjCol = 0;
          celular2.pjFil = 1;
          celular2.xPos = (celular2.pjCol * 100);
          celular2.yPos = (celular2.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 9;
            }
        }
        break;
      case 6:
        if (dist(celular3.getXPos(), celular3.getYPos(), enemyrob.getRPosX(), enemyrob.getRPosY()) < 100) {
          celular3.chargerAtrapada = false;
          celular3.chargerAparecida = true;
          celular3.puertaAparecido = false;
          celular3.chargerCol = 6;
          celular3.chargerFil = 2;
          celular3.chargerX = (celular3.chargerCol * 100) + 10;
          celular3.chargerY = (celular3.chargerFil * 100) + 10;
          celular3.tarsdAtrapado = false;
          celular3.tarsdAparecido = true;
          celular3.tarsdCol = 0;
          celular3.tarsdFil = 6;
          celular3.tarsdX = (celular3.tarsdCol * 100) + 10;
          celular3.tarsdY = (celular3.tarsdFil * 100) + 10;
          celular3.pjCol = 0;
          celular3.pjFil = 1;
          celular3.xPos = (celular3.pjCol * 100);
          celular3.yPos = (celular3.pjFil * 100) + 100;
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 9;
            }
        }
        if (dist(celular3.getXPos(), celular3.getYPos(), enemyrob.getRPosX2(), enemyrob.getRPosY2()) < 100) {
          celular3.chargerAtrapada = false;
          celular3.chargerAparecida = true;
          celular3.puertaAparecido = false;
          celular3.chargerCol = 6;
          celular3.chargerFil = 2;
          celular3.chargerX = (celular3.chargerCol * 100) + 10;
          celular3.chargerY = (celular3.chargerFil * 100) + 10;
          celular3.tarsdAtrapado = false;
          celular3.tarsdAparecido = true;
          celular3.tarsdCol = 0;
          celular3.tarsdFil = 6;
          celular3.tarsdX = (celular3.tarsdCol * 100) + 10;
          celular3.tarsdY = (celular3.tarsdFil * 100) + 10;
          celular3.pjCol = 0;
          celular3.pjFil = 1;
          celular3.xPos = (celular3.pjCol * 100);
          celular3.yPos = (celular3.pjFil * 100) + 100;
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 9;
            }
        }
        break;
      case 8:
        if (dist(celular4.getXPos(), celular4.getYPos(), enemyspi.getSPosX(), enemyspi.getSPosY()) < 100){
          celular4.chargerAtrapada = false;
          celular4.chargerAparecida = true;
          celular4.puerta2Aparecido = false;
          celular4.chargerCol = 11;
          celular4.chargerFil = 1;
          celular4.chargerX = (celular4.chargerCol * 100);
          celular4.chargerY = (celular4.chargerFil * 100);
          celular4.chipAtrapado = false;
          celular4.chipAparecido = true;
          celular4.chipCol = 11;
          celular4.chipFil = 6;
          celular4.chipX = (celular4.chipCol * 100);
          celular4.chipY = (celular4.chipFil * 100);
          celular4.pjCol = 0;
          celular4.pjFil = 1;
          celular4.xPos = (celular4.pjCol * 100);
          celular4.yPos = (celular4.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 9;
            }
        }
        if (dist(celular4.getXPos(), celular4.getYPos(), enemyspi.getSPosX2(), enemyspi.getSPosY2()) < 100){
          celular4.chargerAtrapada = false;
          celular4.chargerAparecida = true;
          celular4.puerta2Aparecido = false;
          celular4.chargerCol = 11;
          celular4.chargerFil = 1;
          celular4.chargerX = (celular4.chargerCol * 100);
          celular4.chargerY = (celular4.chargerFil * 100);
          celular4.chipAtrapado = false;
          celular4.chipAparecido = true;
          celular4.chipCol = 11;
          celular4.chipFil = 6;
          celular4.chipX = (celular4.chipCol * 100);
          celular4.chipY = (celular4.chipFil * 100);
          celular4.pjCol = 0;
          celular4.pjFil = 1;
          celular4.xPos = (celular4.pjCol * 100);
          celular4.yPos = (celular4.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 9;
            }
        }
        if (dist(celular4.getXPos(), celular4.getYPos(), enemyspi.getSPosX3(), enemyspi.getSPosY3()) < 100){
          celular4.chargerAtrapada = false;
          celular4.chargerAparecida = true;
          celular4.puerta2Aparecido = false;
          celular4.chargerCol = 11;
          celular4.chargerFil = 1;
          celular4.chargerX = (celular4.chargerCol * 100);
          celular4.chargerY = (celular4.chargerFil * 100);
          celular4.chipAtrapado = false;
          celular4.chipAparecido = true;
          celular4.chipCol = 11;
          celular4.chipFil = 6;
          celular4.chipX = (celular4.chipCol * 100);
          celular4.chipY = (celular4.chipFil * 100);
          celular4.pjCol = 0;
          celular4.pjFil = 1;
          celular4.xPos = (celular4.pjCol * 100);
          celular4.yPos = (celular4.pjFil * 100);
  
          //contador de vidas
          lives -= 1;
          console.log(lives);
            if(lives == 0){
              pantalla = 9;
            }
        }
        break;
      
  }
  }


  function contvida() {
    if(!can1 && lives == 3){
      image(vida,1000 + 100,10,50,50);
    }
    if(!can2 && lives == 3 || lives == 2){
      image(vida,1000 + 50,10,50,50);

    }
    if(!can3 && lives == 3 || lives == 2 || lives == 1){
      image(vida,1000,10,50,50);
    }
  }

  function tiempo() {
        fill(255);
        textAlign(CENTER,CENTER);
        textSize(70);
        text(time,1300,630);

       if(frameCount % 60 == 0 && time >= 0){
      time --;
        }
        if(time == 0){
          pantalla = 9;
    }
  }
//******************************************************* */
  function setupMJ4(){
    frameRate(60);

  ganar = false;

  posicionX = 120;
  posicionY = 340;

  for (let i = 0; i < 4; i++) {


    anuncio.push(new Array(3));


    for (let j = 0; j < 3; j++) {

      if (i === 0 || i === 2) {

        anuncio[i][j] = new addsmj4(240 + (100 * i), 50 + (200 * j), 2);

      }
      if (i === 1 || i === 3) {

        anuncio[i][j] = new addsmj4(240 + (100 * i), 800 - (200 * j), 1);


      }
    }
  }
  }

  function drawMJ4() {
  
    if (ganar === false) {
  
  
      pintarFondo();
      for (let i = 0; i < 4; i++) {
  
        for (let j = 0; j < 3; j++) {
  
          anuncio[i][j].mostrar();
        }
      }
  
      personajeMJ4();
  
  
    }
    if (ganar === true) {
      if (mouseIsPressed) {
        ganar = false;
      }
  
    }
  }

  function pintarFondo() {


    /*fill(107,124,125);
    rect(0,260, 80);
  
    fill(107,124,125);
    rect(200, 50, 424, 600);*/
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 7; j++) {
        fill(255);
  
        rect(300 + (100 * i), 70 + (85 * j), 10, 40);
  
  
      }
  
    }
    rect(300 - 100, 50, 5, 590);
    rect(300 + (100 * 3), 50, 5, 590);
  }

  function personajeMJ4() {

    image(celu4,posicionX,posicionY,60,60);

    if(keyIsPressed){
    switch (keyCode) {
      case UP_ARROW:
        posicionY -= 2;
        break;
      case DOWN_ARROW:
        posicionY += 2;
        break;
  
      case LEFT_ARROW:
        posicionX -= 2;
        break;
      case RIGHT_ARROW:
        posicionX += 2;
        break;
    }
  }

    contactoMJ4();
  
    if (posicionX > 600) {
        pantalla = 10;
    }
  }

  function contactoMJ4() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
  
        if (posicionY  > anuncio[i][j].getRefAdd() && posicionY < anuncio[i][j].getRefAdd() + 40) {
          if (posicionX  > 110 + (100 * i) && posicionX < 150 + (100 * i)) {
  
            posicionX = 120;
            posicionY = 340;
  
          }
        }
      }
    }
  }

//iniciar juego !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  function mousePressed() {
    //seguir a instrucciones
    switch (pantalla) {
      case 0:
        if (dist(mouseX, mouseY, 700, 565) < 100) {
          pantalla = 1;
        }
      break;
      // empezar nivel 1
      case 1:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 2;
        }
      break;
      //empezar nivel 2
      case 3:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 4;
        }
      break;
      //empezar nivel 3
      case 5:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 6;
        }
      break;
      //empezar nivel 4
      case 7:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          pantalla = 8;
        }
      break;
      //volver a empezar porque perdió
      case 9:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          //reiniciar juego
          pantalla = 0;
          lives = 3;
          time = 120;
          celular.chargerAtrapada = false ;
          celular.bateryAtrapado = false;
          celular.bateryAparecido = true;
          celular.chargerAparecida = true;
          celular.puerta2Aparecido = false;
          celular.pjCol = 0;
          celular.pjFil = 1;
          celular.xPos = (celular.pjCol * 100);
          celular.yPos = (celular.pjFil * 100);

          celular2.chargerAtrapada = false;
          celular2.antivirusAtrapado = false;
          celular2.antivirusAparecido = true;
          celular2.chargerAparecida = true;
          celular2.puerta2Aparecido = false;
          celular2.pjCol = 0;
          celular2.pjFil = 1;
          celular2.xPos = (celular2.pjCol * 100);
          celular2.yPos = (celular2.pjFil * 100);
          /*celmj2.batrapadaAtrapado == false;
          celmj2.batrapadaAtrapado2 == false;
          celmj2.batrapadaAtrapado3 == false;
          celmj2.batrapadaAtrapado4 == false;
          celmj2.batrapadaAtrapado5 == false;*/


          celular3.chargerAtrapada = false;
          celular3.tarsdAtrapado = false;
          celular3.tarsdAparecido = true;
          celular3.chargerAparecida = true;
          celular3.puertaAparecido = false;
          celular3.pjCol = 0;
          celular3.pjFil = 1;
          celular3.xPos = (celular3.pjCol * 100);
          celular3.yPos = (celular3.pjFil * 100);

          celular4.chargerAtrapada = false;
          celular4.chipAtrapado = false;
          celular4.chipAparecido = true;
          celular4.puerta2Aparecido = false;
          celular4.chargerAparecida = true;
          celular4.pjCol = 0;
          celular4.pjFil = 1;
          celular4.xPos = (celular4.pjCol * 100);
          celular4.yPos = (celular4.pjFil * 100);
          //image(celu4,posicionX,posicionY,60,60);

        }
      break;
    //volver a empezar porque ganó
      case 10:
        if (dist(mouseX, mouseY, 1257, 635) < 50) {
          //reiniciar juego
          pantalla = 0;
          lives = 3;
          time = 120;
          celular.chargerAtrapada = false ;
          celular.bateryAtrapado = false;
          celular.bateryAparecido = true;
          celular.chargerAparecida = true;
          celular.puerta2Aparecido = false;
          celular.pjCol = 0;
          celular.pjFil = 1;
          celular.xPos = (celular.pjCol * 100);
          celular.yPos = (celular.pjFil * 100);

          celular2.chargerAtrapada = false;
          celular2.antivirusAtrapado = false;
          celular2.antivirusAparecido = true;
          celular2.chargerAparecida = true;
          celular2.puerta2Aparecido = false;
          celular2.pjCol = 0;
          celular2.pjFil = 1;
          celular2.xPos = (celular2.pjCol * 100);
          celular2.yPos = (celular2.pjFil * 100);

          celular3.chargerAtrapada = false;
          celular3.tarsdAtrapado = false;
          celular3.tarsdAparecido = true;
          celular3.chargerAparecida = true;
          celular3.puertaAparecido = false;
          celular3.pjCol = 0;
          celular3.pjFil = 1;
          celular3.xPos = (celular3.pjCol * 100);
          celular3.yPos = (celular3.pjFil * 100);

          celular4.chipAtrapada = false;
          celular4.chargerAtrapado = false;
          celular4.chargerAparecida = true;
          celular4.puerta2Aparecido = false;
          celular4.chipAparecido = true;
          celular4.pjCol = 0;
          celular4.pjFil = 1;
          celular4.xPos = (celular4.pjCol * 100);
          celular4.yPos = (celular4.pjFil * 100);
          //image(celu4,posicionX,posicionY,60,60);

        }
      break;
      //minijuego 1 encontrar candado abierto
      case 11:
        if (dist(mouseX, mouseY, 450, 350) < 100) {
          pantalla = 3;
        }
      break;
      //minijuego 3 encontrar app
      case 13:
        if (dist(mouseX, mouseY, 250, 350) < 100) {
          pantalla = 7;
        }
      break;
    }
  }

  function keyPressed() {
    switch (pantalla) {
      case 0:
        break;
      //nivel 1
      case 2:
        celular.mover();
        break;
      //nivel 2
      case 4:
        celular2.mover();
        break;
        //nivel 3
      case 6:
        celular3.mover();
        break;
        //nivel 4
      case 8:
        celular4.mover();
        break;
        //minijuego2
      case 12:
        celmj2.mover();
        break;
      case 14:
        //minijuego4
        break;
  }
}


function pasarNivel(){
  switch (pantalla) {
    case 0:
      break;
    //nivel 1
    case 2:
      if(celular.chargerAtrapada ==true && celular.bateryAtrapado==true){
        pantalla = 11;
      }
      break;
    //nivel 2
    case 4:
      if(celular2.chargerAtrapada ==true && celular2.antivirusAtrapado==true){
        pantalla = 12;
      }
      break;
      //nivel 3
    case 6:
      if(celular3.chargerAtrapada ==true && celular3.tarsdAtrapado==true){
        pantalla = 13;
      }
      break;
      //nivel 4
    case 8:
      if(celular4.chargerAtrapada ==true && celular4.chipAtrapado==true){
        pantalla = 14;
      }
      break;
    case 12:
      if(celmj2.batrapadaAtrapado == true && celmj2.batrapadaAtrapado2 == true && celmj2.batrapadaAtrapado3 == true
        && celmj2.batrapadaAtrapado4 == true && celmj2.batrapadaAtrapado5 == true){
        pantalla = 5;
      }
      break;
 }
}
  


