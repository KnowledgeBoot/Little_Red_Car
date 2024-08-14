let ball = document.querySelector('.ball');

let rightButton = document.querySelector('#right');
let restartButton = document.querySelector('#restart');

let startingPositionBall = ball.offsetLeft
let currentPositionBall = startingPositionBall;

let stepBall = 10;

rightButton.addEventListener('click', function(e) {
    let goRight = ball.offsetLeft;
    
    if (currentPositionBall < 145) {
        ball.style.left = goRight + stepBall + "px";
        currentPositionBall += stepBall;
    } else {
        document.getElementById('img').style.display = "block";
    }
});

restartButton.addEventListener('click', function(e) {
    ball.style.left = startingPositionBall + "px";
    document.getElementById('img').style.display = "none";
});

function text_out() {
    var p;
    p = document.getElementById('text_change');
    p.innerHTML = currentPositionBall + stepBall;
}

function text_restsrt() {
    var restart;
    restart = document.getElementById('text_change');
    currentPositionBall = startingPositionBall
    restart.innerHTML = currentPositionBall;
}