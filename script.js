const canvas = document.getElementById("canvas");
const ball = document.getElementById("ball");
const score1 = document.getElementById("score-1");
const score2 = document.getElementById("score-2");
const paddle1 = document.getElementById("paddle-1");
const paddle2 = document.getElementById("paddle-2");

var ContentScore1 = 0;
var ContentScore2 = 0;

var mTop = '290px';
var mLeft = '390px';

const velo = 5;
const accel = 0.0001;

var veloX = velo;
var veloY = velo;

const ballRadius = 20;

paddle1.style.marginLeft = '10px';
paddle2.style.marginLeft = '780px';

var paddle1MTop = 250
var leftUpPressed = false
var leftDownPressed = false

var paddle2MTop = 250
var rightUpPressed = false
var rightDownPressed = false

setInterval(changeMargin, 16);

window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

function keyDownHandler(e) {
    console.log(e.code + " down");

    if (e.code === 'KeyW' ) {
        leftUpPressed = true
    };
    if (e.code === 'KeyS') {
        leftDownPressed = true
    };
    if (e.code === 'KeyP' ) {
        rightUpPressed = true
    };
    if (e.code === 'KeyL') {
        rightDownPressed = true
    };
};

function keyUpHandler(e) {
    console.log(e.code + " up");

    if (e.code === 'KeyW') {
        leftUpPressed = false
    };
    if (e.code === 'KeyS') {
        leftDownPressed = false
    };
    if (e.code === 'KeyP') {
        rightUpPressed = false
    };
    if (e.code === 'KeyL') {
        rightDownPressed = false
    };
};

function changeMargin() {
    mTop += veloY;
    mLeft += veloX;

    // Bounces off walls

    if (mTop + veloY + ballRadius > 600 || mTop + veloY < 0) {
        veloY = -veloY
    };

    // Player gets point

    if (mLeft + veloX < 0) {
        mTop = '290px';
        mLeft = '390px';
        ball.style.marginTop = mTop + 'px';
        ball.style.marginLeft = mLeft + 'px';
        veloX = -veloX;
        ContentScore1 += 1;
        score1.innerHTML = `Score: ${ContentScore1}`;
    };
    if (mLeft + veloX + ballRadius > 800) {
        mTop = '290px';
        mLeft = '390px';
        ball.style.marginTop = mTop + 'px';
        ball.style.marginLeft = mLeft + 'px';
        veloX = -veloX;
        ContentScore2 += 1;
        score2.innerHTML = `Score: ${ContentScore2}`;
    };

    // Bounces off paddles

    if (mTop > (paddle2MTop - ballRadius) && mLeft + veloX + ballRadius > 780 && mTop < (paddle2MTop + 100 + ballRadius)) {
        veloX = -veloX;
    };
    if (mTop > (paddle1MTop - ballRadius) && mLeft + veloX - ballRadius < 0 && mTop < (paddle1MTop + 100 + ballRadius)) {
        veloX = -veloX;
    };

    ball.style.marginTop = mTop + 'px';
    ball.style.marginLeft = mLeft + 'px';

    console.log(leftUpPressed)

    if (leftUpPressed && paddle1MTop > 0) {
        paddle1MTop -= 7;
        paddle1.style.marginTop = paddle1MTop + 'px';
    };
    if (leftDownPressed && paddle1MTop < 500) {
        paddle1MTop += 7;
        paddle1.style.marginTop = paddle1MTop + 'px';
    };

    if (rightUpPressed && paddle2MTop > 0) {
        paddle2MTop -= 7;
        paddle2.style.marginTop = paddle2MTop + 'px';
    };
    if (rightDownPressed && paddle2MTop < 500) {
        paddle2MTop += 7;
        paddle2.style.marginTop = paddle2MTop + 'px';
    };

    if (veloX > 0) { veloX += accel };
    if (veloX < 0) { veloX -= accel };
    if (veloY > 0) { veloX += accel };
    if (veloY < 0) { veloX -= accel };
}