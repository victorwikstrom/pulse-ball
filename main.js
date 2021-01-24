window.addEventListener("load", () => {
  const ball = new Ball();
  setInterval(() => {
    ball.pulse();
    ball.checkSize(ball.radius);
  }, 1);
});
