let canvas, canvasContext;
let ballX = 75;
let ballSpeedX = 5;
let ballY = 75;
let ballSpeedY = 7;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    //Create motion for the ball
    let framesPerSecond = 30;
    setInterval(updateAll, 1000 / framesPerSecond);

}

const updateAll = () => {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    
    if(ballY < 0) {
        ballSpeedY *= -1;
    }
    if(ballY > canvas.height) {
        ballSpeedY *= -1;
    }
    if(ballX < 0) {
        ballSpeedX *= -1;
    }
    if(ballX > canvas.width) {
        ballSpeedX *= -1;
    }
    //Create the background
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    //Create the ball
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
    canvasContext.fill();

}