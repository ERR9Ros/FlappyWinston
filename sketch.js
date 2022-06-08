var pipe = [340, 240, 120, 400, 540, 440, 320, 600];

var Pheight = [0, 0, 0, 0, 0, 0, 0, 0];

var birdY = 180;

var score = 0;

var highScore = 0;
var savedhighscore = 0;

var lost = 0;

var speed = 60;

var info = 400;
var info2 = 900;

var gamemenu = 0;

draw = function() {
frameRate(speed);

//setup
    background(75, 220, 250);
    fill(238, 255, 0);
    noStroke();
    ellipse(360, 40, 80, 80);
    fill(51, 201, 24);
    rect(0, 350, 400, 60);

//Pipe movement
    pipe[0]-=5;
    if (pipe[0] === -20) {
        pipe[0] = 400;
        Pheight[0] = random(50, 170);
        if (lost < 2) {
            score+=1;
        }

    }
    pipe[1]-=5;
    if (pipe[1] === -20) {
        pipe[1] = 400;
        Pheight[1] = random(50, 170);
    }
    pipe[2]-=5;
    if (pipe[2] === -20) {
        pipe[2] = 400;
        Pheight[2] = random(50, 170);
    }
    pipe[3]-=5;
    if (pipe[3] === -20) {
        pipe[3] = 400;
        Pheight[3] = random(50, 170);
    }
    pipe[4]-=5;
    if (pipe[4] === -20) {
        pipe[4] = 400;
        Pheight[4] = random(50, 170);
    }
    pipe[5]-=5;
    if (pipe[5] === -20) {
        pipe[5] = 400;
        Pheight[5] = random(50, 170);
    }
    pipe[6]-=5;
    if (pipe[6] === -20) {
        pipe[6] = 400;
        Pheight[6] = random(50, 170);
    }
    pipe[7]-=5;
    if (pipe[7] === -20) {
        pipe[7] = 400;
        Pheight[7] = random(50, 170);
    }

//Pipes

    fill(45, 125, 15);
    rect(pipe[0], 0, 20, Pheight[0]);
    rect(pipe[1], 0, 20, Pheight[1]);
    rect(pipe[2], 0, 20, Pheight[2]);
    rect(pipe[3], 0, 20, Pheight[3]);

    rect(pipe[4], 400-Pheight[4], 20, Pheight[4]);
    rect(pipe[5], 400-Pheight[5], 20, Pheight[5]);
    rect(pipe[6], 400-Pheight[6], 20, Pheight[6]);
    rect(pipe[7], 400-Pheight[7], 20, Pheight[7]);

//Bird
    image(getImage("creatures/Winston"), 100, birdY, 40, 40);
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
    if (birdY < Pheight[0]) {
        if (135 === pipe[0]) {
            lost+=1;
        }
    }

    if (birdY < Pheight[1]) {
        if (135 === pipe[1]) {
            lost+=1;
        }
    }

    if (birdY < Pheight[2]) {
        if (135 === pipe[2]) {
            lost+=1;
        }
    }

    if (birdY < Pheight[3]) {
        if (135 === pipe[3]) {
            lost+=1;
        }
    }

    if (birdY > 360-Pheight[4]) {
        if (135 === pipe[4]) {
            lost+=1;
        }
    }

    if (birdY > 360-Pheight[5]) {
        if (135 === pipe[5]) {
            lost+=1;
        }
    }

    if (birdY > 360-Pheight[6]) {
        if (135 === pipe[6]) {
            lost+=1;
        }
    }

    if (birdY > 360-Pheight[7]) {
        if (135 === pipe[7]) {
            lost+=1;
        }
    }
}
//Lost
      if (lost > 1) {
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
            lost = 1;
            birdY = height/2-20;
            score = 0;
        }
        if (keyCode === 50) {
            speed = 60;
            lost = 1;
            birdY = height/2-20;
            score = 0;
        }
        if (keyCode === 51) {
            speed = 80;
            lost = 1;
            birdY = height/2-20;
            score = 0;
        }
        if (keyCode === 52) {
            speed = 100;
            lost = 1;
            birdY = height/2-20;
            score = 0;
        }
        if (keyCode === 53) {
            speed = 120;
            lost = 1;
            birdY = height/2-20;
            score = 0;
        }

        if (keyCode === 32) {
            birdY-=18;
        }
        if (keyCode === SHIFT) {
            birdY = height/2-20;
            lost = 1;
            score = 0;
            gamemenu = 1;
        }
        if (keyCode === 18) {
            gamemenu = 0;
        }
};
};
