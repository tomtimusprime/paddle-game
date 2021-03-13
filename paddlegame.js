let canvas, canvasContext;
let ballX = 75;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    //Create motion for the ball
    let framesPerSecond = 30;
    setInterval(updateAll, 1000 / framesPerSecond);

}

const updateAll = () => {
    ballX++;
    //Create the background
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    //Create the ball
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(ballX, 100, 10, 0, Math.PI * 2, true);
    canvasContext.fill();

}