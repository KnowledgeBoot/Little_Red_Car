let ball = document.querySelector('.ball');
let upButton = document.querySelector('#up');
let downButton = document.querySelector('#down');
let leftButton = document.querySelector('#left');
let rightButton = document.querySelector('#right');

upButton.addEventListener('click', function(e) {
    let goUp = ball.offsetTop;
    ball.style.top = goUp - 40 + "px";
});

downButton.addEventListener('click', function(e) {
    let goDown = ball.offsetTop;
    ball.style.top = goDown + 40 + "px";
});

leftButton.addEventListener('click', function(e) {
    let goLeft = ball.offsetLeft;
    ball.style.left = goLeft - 40 + "px";
});

rightButton.addEventListener('click', function(e) {
    let goRight = ball.offsetLeft;
    ball.style.left = goRight + 40 + "px";
});
