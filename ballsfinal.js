var velocityX = 5;
var positionX = 0;
var directionX = 'right';

var velocityY = 2;
var positionY = 0;
var directionY = 'down';
var ball = document.getElementById('ball')

function moveBall (){

  if (directionX == 'right'){
    positionX = positionX + velocityX;
    ball.style.left = positionX + 'px';  
  }
  else if (directionX == 'left') {
    positionX = positionX - velocityX;
    ball.style.left = positionX + 'px';  
  }
  if (positionX > 500) {
    directionX = 'left';

  } else if (positionX == 0) {
    directionX = 'right'

  }

  if (directionY == 'down'){
    positionY = positionY + velocityY;
    ball.style.top = positionY + 'px';  
  }
  else if (directionY == 'up') {
    positionY = positionY - velocityY;
    ball.style.top = positionY + 'px';  
  }
  if (positionY > 500) {
    directionY = 'up';
  } else if (positionY == 0) {
    directionY = 'down'
  }

}

setInterval (moveBall,10);

