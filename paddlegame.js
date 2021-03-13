let canvas, canvasContext;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    //Create the background
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    //Create the ball
    canvasContext.fillStyle = "white";
    canvasContext.beginPath();
    canvasContext.arc(100,100,10, 0, Math.PI*2, true);
    canvasContext.fill();

}