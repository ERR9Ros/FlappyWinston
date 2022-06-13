let wall = [340, 240, 120, 400, 540, 440, 320, 600];
let wallHeight = [0, 0, 0, 0, 0, 0, 0, 0];
let player = [];

let lost = false;
let speed = 60;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);

  player.push(new bird());

  highScore = getItem("highScore");
  if (highScore == null) {
    highScore = 0;
  }
  score = 0;
}

function windowResized() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
}

function draw() {
  background(0);
  fill(255);

  //Walls
  //Player
  for (let p of player) {
    p.display();
    p.move();
  }
}
function keypPressed() {
  for (let p of player) {
    p.jump();
  }
}
