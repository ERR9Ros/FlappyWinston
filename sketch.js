var pipe = [340, 240, 120, 400, 540, 440, 320, 600];

var Pheight = [0, 0, 0, 0, 0, 0, 0, 0];

var birdY = 180;

var score = 0;

var highScore = 0;
var savedhighscore = 0;

var lost = false;

var speed = 60;

var info = 400;
var info2 = 900;

var gamemenu = 0;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
}

function windowResized() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
}

function draw() {
frameRate(speed);

//setup
    background(75, 220, 250);
    fill(238, 255, 0);
    noStroke();
    ellipse(360, 40, 80, 80);
    fill(51, 201, 24);
    rect(0, 350, 400, 60);

//Pipe movement
for (var i = 0; i < pipe.length; i++) {
  pipe[i]-=5;
  if (pipe[i] === -20) {
      pipe[i] = 400;
      Pheight[i] = random(50, 170);
      if (lost != false) {
          score+=1;
      }

  }
}

//Pipes
for (var i = 0; i < pipe.length; i++) {
  fill(45, 125, 15);
  if (i <= 3) {
    rect(pipe[i], 0, 20, Pheight[i]);
  } else if (i > 3) {
    rect(pipe[i], 400-Pheight[i], 20, Pheight[i]);
  }
}

//Bird
fill(0);
ellipse(100, birdY, 40, 40);

    birdY+=1;
    while(birdY === 360) {
        birdY-=1;
    }
    while(birdY === 0) {
        birdY+=1;
    }
    textSize(20);
    fill(255, 255, 255);
    text("Score:", 20, 25, 60, 45);
    text(score, 85, 25, 20, 40);

//collision
if (score > 0) {
  for (var i = 0; i < pipe.length; i++) {
    if (birdY < Pheight[i]) {
        if (135 === pipe[i]) {
          lost = true;
        }
    }
  }
}
//Lost
      if (lost != false) {
        frameRate(60);
    //GameOver screen
        fill(0, 247, 255);
        rect(0, 0, 400, 400);
        fill(0, 0, 0);
        textSize(30);
        text("GameOver!", 118, 170, 170, 40);
        textSize(20);
        text("Your score was:", 100, 200, 220, 40);
        text(score, 260, 200, 220, 40);
        textSize(14);
        text("High Score:", 140, 230, 120, 120);
        text(highScore, 230, 230, 120, 120);
        textSize(10);
        text("Hit ALT key to return to main menu", 100, 280, 280, 20);

    //Instructions
        fill(15, 130, 110);
        rect(0, 0, 400, 25);
        fill(0, 0, 0);
        info-=1.5;
        info2-=1.5;
        textSize(15);
        text("Hit SPACE key to fly up. SHIFT restarts your game if you lose", info, 16);
        text("Hit SPACE key to fly up. SHIFT restarts your game if you lose", info2, 16);
        if (info < -450) {
            info = 500;
        }
        if (info2 < -450) {
            info2 = 500;
        }
      }

//HighScore
    if (score > highScore) {
        highScore+=1;
    }

//GameMenu
    if (gamemenu === 0) {
        background(75, 220, 250);
        fill(0, 0, 0);
        textSize(30);
        text("Flappy Winston", 83, 83, 400, 60);
        fill(230, 230, 0);
        text("Flappy Winston", 80, 80, 400, 60);
        textSize(11);
        fill(0, 0, 0);
        text("Help Winston find his friends", 115, 130, 300, 30);
        image(getImage("creatures/Winston"), 170, 160, 40, 40);
        image(getImage("avatars/avatar-team"), 280, 280, 80, 60);
        fill(0, 0, 0);
        textSize(12);
        text("Select Difficulty with number keys:", 90, 220, 1000, 40);
        text("1 = Easy", 120, 240, 60, 40);
        text("2 = Normal", 120, 260, 80, 40);
        text("3 = Hard", 120, 280, 60, 40);
        text("4 = Pro", 120, 300, 60, 40);
        text("5 = Impossible", 120, 320, 100, 40);
    }

    keyPressed = function() {
        gamemenu = 1;
        if (keyCode === 49) {
            speed = 40;
            lost = false;
            birdY = height/2-20;
            score = 0;
        }
        if (keyCode === 50) {
            speed = 60;
            lost = false;
            birdY = height/2-20;
            score = 0;
        }
        if (keyCode === 51) {
            speed = 80;
            lost = false;
            birdY = height/2-20;
            score = 0;
        }
        if (keyCode === 52) {
            speed = 100;
            lost = false;
            birdY = height/2-20;
            score = 0;
        }
        if (keyCode === 53) {
            speed = 120;
            lost = false;
            birdY = height/2-20;
            score = 0;
        }

        if (keyCode === 32) {
            birdY-=18;
        }
        if (keyCode === SHIFT) {
            birdY = height/2-20;
            lost = false;
            score = 0;
            gamemenu = 1;
        }
        if (keyCode === 18) {
            gamemenu = 0;
        }
};
};
