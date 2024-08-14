let ball = document.querySelector('.ball');

let startingPositionBall = ball.offsetLeft
let currentPositionBall = startingPositionBall;

let stepBall = 10;

function text_out() {
    let goRight = ball.offsetLeft;
    
    if (currentPositionBall < 145) {
        ball.style.left = goRight + stepBall + "px";
        currentPositionBall += stepBall;
    } 

    if (currentPositionBall >= 145) {
        document.getElementById('img').style.display = "block";
    }

    var p = document.getElementById('text_change');
    p.innerHTML = currentPositionBall;
}

function text_restsrt() {
    ball.style.left = startingPositionBall + "px";
    document.getElementById('img').style.display = "none";

    var restart = document.getElementById('text_change');
    currentPositionBall = startingPositionBall
    restart.innerHTML = currentPositionBall;
}