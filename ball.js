var ball = document.getElementById("ball");

var velocityX = 100;
var velocityY = 100;
var positionX = parseInt(ball.style.left);
var positionY = parseInt(ball.style.top);

var reverseX = false;
var reverseY = false;
var Xmin = 0;
var Xmax = window.innerWidth - 200;
var Ymin = 0;
var Ymax = window.innerHeight - 150;





function moveBall() {
    /* Xposition */
    if ( !reverseX ) {
	positionX = positionX + velocityX;
	black = black + 10;
    } else {
	positionX = positionX - velocityX;
	black = black - 10;
    }

    if (positionX >= Xmax || positionX <= Xmin){
	reverseX = !reverseX;
	var red = Math.floor(Math.random() * Math.floor(255));
	var green =  Math.floor(Math.random() * Math.floor(255));
	var black = Math.floor(Math.random() * Math.floor(255));
	
    }

    /* Yposition */
    if ( !reverseY ) {
	positionY = positionY + velocityY;
	green = green + 1 ;
    } else {
	positionY = positionY - velocityY;
	green = green - 1 ;
    }

    if (positionY >= Ymax || positionY <= Ymin){
	reverseY = !reverseY;
	var red = Math.floor(Math.random() * Math.floor(255));
	var green =  Math.floor(Math.random() * Math.floor(255));
	var black = Math.floor(Math.random() * Math.floor(255));

    }

    
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
    ball.style.background = "rgb(" + red + ", " + green + "," + black + ")";
    
    console.log(reverseX, positionX);
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
