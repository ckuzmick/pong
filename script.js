const canvas = document.getElementById("canvas");
const ball = document.getElementById("ball");
const score1 = document.getElementById("score-1");
const score2 = document.getElementById("score-2");
const paddle1 = document.getElementById("paddle-1");
const paddle2 = document.getElementById("paddle-2");

var ContentScore1 = 0;
var ContentScore2 = 0;

var mTop = 0;
var mLeft = 0;

const velo = 5

var veloX = velo;
var veloY = velo;

const ballRadius = 20;

paddle1.style.marginLeft = '10px';
paddle2.style.marginLeft = '780px';

var paddle1MTop = 0
var leftUpPressed = false
var leftDownPressed = false

var paddle2MTop = 0

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
};

function keyUpHandler(e) {
    console.log(e.code + " up");

    if (e.code === 'KeyW') {
        leftUpPressed = false
    };
    if (e.code === 'KeyS') {
        leftDownPressed = false
    };
};

function changeMargin() {
    mTop += veloY;
    mLeft += veloX;

    if (mTop + veloY + ballRadius > 600 || mTop + veloY < 0) {
        veloY = -veloY
    };
    if (mLeft + veloX < 0) {
        veloX = -veloX;
        ContentScore1 += 1;
        score1.innerHTML = `Score: ${ContentScore1}`;
    };
    if (mLeft + veloX + ballRadius > 800) {
        veloX = -veloX;
        ContentScore2 += 1;
        score2.innerHTML = `Score: ${ContentScore2}`;
    };

    // veloX += 0.02
    // veloY += 0.05

    ball.style.marginTop = mTop + 'px';
    ball.style.marginLeft = mLeft + 'px';

    console.log(leftUpPressed)

    if (leftUpPressed) {
        paddle1MTop -= 7;
        paddle1.style.marginTop = paddle1MTop + 'px';
    };
    if (leftDownPressed) {
        paddle1MTop += 7;
        paddle1.style.marginTop = paddle1MTop + 'px';
    }
}