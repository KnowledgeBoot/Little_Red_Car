let ball = document.querySelector('.ball');

let rightButton = document.querySelector('#right');
let restartButton = document.querySelector('#restart');

let startingPositionBall = ball.offsetLeft

let stepBall = 10;

rightButton.addEventListener('click', function(e) {
    let goRight = ball.offsetLeft;
    ball.style.left = goRight + stepBall + "px";
});

restartButton.addEventListener('click', function(e) {
    ball.style.left = startingPositionBall + "px";
});
