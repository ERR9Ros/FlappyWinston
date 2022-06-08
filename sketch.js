let pipe = [340, 240, 120, 400, 540, 440, 320, 600];
let Pheight = [0, 0, 0, 0, 0, 0, 0, 0];

let birdY = 180;

let lost = false;
let speed = 60;

highScore = getItem("highScore");
if (highScore == null) {
  highScore = 0;
}
score = 0;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
}

function windowResized() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
}

function draw() {
  background(0);

}
