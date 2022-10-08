const player = document.getElementById('player');
const enemy = document.getElementById('enemy');
const enemy2 = document.getElementById('enemy2');
const enemy3 = document.getElementById('enemy3');
const enemy4 = document.getElementById('enemy4');
const enemy5 = document.getElementById('enemy5');
const enemySootBall = document.getElementById("enemySootBall");
let interval;
let shootPosX;
let shootPosY;
let ballpos;
let enemydestroyed = [];
let enemy1StartLocation = window.innerWidth / 2 - 200;
let enemy2StartLocation = window.innerWidth / 2 - 100;
let enemy3StartLocation = window.innerWidth / 2 - 00;
let enemy4StartLocation = window.innerWidth / 2 + 100;
let enemy5StartLocation = window.innerWidth / 2 + 200;
let playerXPos;
let playerYPos;
let enemySootBallYpos = 50;
document.onmousemove = (e) => {
    playerXPos = e.clientX;
    playerYPos = e.clientY;
    player.style.left = playerXPos - 15 + "px";
    player.style.top = playerYPos + "px";
}
document.onmouseup = (e) => {
    shootPosX = e.clientX;
    shootPosY = e.clientY;
    document.querySelector(".shootBall").style.left = shootPosX + "px";
    document.querySelector(".shootBall").style.top = shootPosY + "px";
    document.querySelector(".shootBall").style.display = 'flex';
    ballpos = e.clientY;
    interval = clearInterval(interval);

    function ballsSoot() {
        document.querySelector(`.shootBall`).style.top = ballpos + "px";
        ballpos = ballpos - 5;
        if (ballpos < -50) {
            ballpos = -50;
        }
    }
    interval = setInterval(ballsSoot, 10);
}
enemy.style.left = enemy1StartLocation + "px";
enemy2.style.left = enemy2StartLocation + "px";
enemy3.style.left = enemy3StartLocation + "px";
enemy4.style.left = enemy4StartLocation + "px";
enemy5.style.left = enemy5StartLocation + "px";
let enemy5BallsXPos = enemy5.style.left;
let enemyMoveInterval = setInterval(enemyMove, 10);
function enemyMove() {
    enemy1StartLocation++;
    enemy2StartLocation++;
    enemy3StartLocation++;
    enemy4StartLocation++;
    enemy5StartLocation++;
    enemy.style.left = enemy1StartLocation + "px";
    if (enemy1StartLocation >= window.innerWidth - 50) {
        enemy1StartLocation = 0;
        enemy.style.left = enemy1StartLocation + "px";
    }
    if (enemy1StartLocation <= window.innerWidth - 20) {
        enemy1StartLocation++;
        enemy.style.left = enemy1StartLocation + "px";
    }
    enemy2.style.left = enemy2StartLocation + "px";
    if (enemy2StartLocation >= window.innerWidth - 50) {
        enemy2StartLocation = 0;
        enemy2.style.left = enemy2StartLocation + "px";
    }
    if (enemy2StartLocation <= window.innerWidth - 20) {
        enemy2StartLocation++;
        enemy2.style.left = enemy2StartLocation + "px";
    }
    enemy3.style.left = enemy3StartLocation + "px";
    if (enemy3StartLocation >= window.innerWidth - 50) {
        enemy3StartLocation = 0;
        enemy3.style.left = enemy3StartLocation + "px";
    }
    if (enemy3StartLocation <= window.innerWidth - 20) {
        enemy3StartLocation++;
        enemy3.style.left = enemy3StartLocation + "px";
    }
    enemy4.style.left = enemy4StartLocation + "px";
    if (enemy4StartLocation >= window.innerWidth - 50) {
        enemy4StartLocation = 0;
        enemy4.style.left = enemy4StartLocation + "px";
    }
    if (enemy4StartLocation <= window.innerWidth - 20) {
        enemy4StartLocation++;
        enemy4.style.left = enemy4StartLocation + "px";
    }
    enemy5.style.left = enemy5StartLocation + "px";
    if (enemy5StartLocation >= window.innerWidth - 50) {
        enemy5StartLocation = 0;
        enemy5.style.left = enemy5StartLocation + "px";
    }
    if (enemy5StartLocation <= window.innerWidth - 20) {
        enemy5StartLocation++;
        enemy5.style.left = enemy5StartLocation + "px";
    }
}
let randomEnemy = Math.floor(Math.random() * window.innerWidth);
setInterval(enemyMove, 50);
function enemyShootF() {
    enemySootBall.style.display = "flex";
    function shoot() {
        enemySootBallYpos = enemySootBallYpos + 3;
        enemySootBall.style.top = enemySootBallYpos + "px";
        if (enemySootBallYpos > window.innerHeight - 50) {
            enemySootBallYpos = 0;
            randomEnemy = Math.floor(Math.random() * window.innerWidth);
        }
        if(enemydestroyed[0] == '1' && enemydestroyed[1] == '2' && enemydestroyed[2] == '3' && enemydestroyed[3] == '4' && enemydestroyed[4] == '5'){
            document.getElementById("restartScreen").style.display = "flex";
            enemySootBall.style.display = "none";
            enemySootBall.style.bottom = "100%";
            document.querySelector(".shootBall").style.display = 'none';
        }
        enemySootBall.style.left = randomEnemy+"px";
    }
    setInterval(shoot, 10);
}
enemyShootF();
function detectCollisoins() {
    if (enemy1StartLocation < shootPosX + 40 && enemy1StartLocation + 40 > shootPosX && 50 < ballpos + 40 && 20 + 40 > ballpos) {
        ballpos = 500;
        document.querySelector(".shootBall").style.display = 'none';
        clearInterval(interval);
        enemy.style.backgroundImage = "url(./img/explode.png)";
        function enemyDisappear() {
            enemy.style.display = "none";
        }
        setTimeout(enemyDisappear, 500);
        enemydestroyed[0] = 1;
    } else if (enemy2StartLocation < shootPosX + 40 && enemy2StartLocation + 40 > shootPosX && 50 < ballpos + 40 && 20 + 40 > ballpos) {
        ballpos = 500;
        document.querySelector(".shootBall").style.display = 'none';
        clearInterval(interval);
        enemy2.style.backgroundImage = "url(./img/explode.png)";
        function enemyDisappear() {
            enemy2.style.display = "none";
        }
        setTimeout(enemyDisappear, 500);
        enemydestroyed[1] = 2;
    } else if (enemy3StartLocation < shootPosX + 40 && enemy3StartLocation + 40 > shootPosX && 50 < ballpos + 40 && 20 + 40 > ballpos) {
        ballpos = 500;
        document.querySelector(".shootBall").style.display = 'none';
        clearInterval(interval);
        enemy3.style.backgroundImage = "url(./img/explode.png)";
        function enemyDisappear() {
            enemy3.style.display = "none";
        }
        setTimeout(enemyDisappear, 500);
        enemydestroyed[2] = 3;
    } else if (enemy4StartLocation < shootPosX + 40 && enemy4StartLocation + 40 > shootPosX && 50 < ballpos + 40 && 20 + 40 > ballpos) {
        ballpos = 500;
        document.querySelector(".shootBall").style.display = 'none';
        clearInterval(interval);
        enemy4.style.backgroundImage = "url(./img/explode.png)";
        function enemyDisappear() {
            enemy4.style.display = "none";
        }
        setTimeout(enemyDisappear, 500);
        enemydestroyed[3] = 4;
    } else if (enemy5StartLocation < shootPosX + 40 && enemy5StartLocation + 40 > shootPosX && 50 < ballpos + 40 && 20 + 40 > ballpos) {
        ballpos = 500;
        document.querySelector(".shootBall").style.display = 'none';
        clearInterval(interval);
        enemy5.style.backgroundImage = "url(./img/explode.png)";
        function enemyDisappear() {
            enemy5.style.display = "none";
        }
        setTimeout(enemyDisappear, 500);
        enemydestroyed[4] = 5;
    }
    if (randomEnemy < playerXPos + 5 && randomEnemy + 10 > playerXPos && enemySootBallYpos < playerYPos + 5 && enemySootBallYpos + 10  > playerYPos) {
        enemySootBall.style.display = "none";
        player.style.backgroundImage = "url(./img/explode.png)";
        function enemyDisappear() {
            player.style.display = "none";
            document.getElementById("restartScreen").style.display = "flex";
            document.querySelector(".result").innerText = 'You Lose :(';
        }
        setTimeout(enemyDisappear, 500);
    } 
}
setInterval(detectCollisoins, 10);
document.getElementById("restart").onclick = () =>{
    location.reload();
    document.querySelector(".restartScreen").style.display = "none";
}