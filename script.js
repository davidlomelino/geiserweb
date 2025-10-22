 
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});


const ball = document.getElementById('ball');

function showBall() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const ballSize = 5;

  const randomX = Math.random() * (windowWidth - ballSize);
  const randomY = Math.random() * (windowHeight - ballSize);

  ball.style.left = `${randomX}px`;
  ball.style.top = `${randomY}px`;


  ball.style.opacity = '1';

  setTimeout(() => {
    ball.style.opacity = '0';
  }, 1000);
}

setInterval(showBall, 5000);
