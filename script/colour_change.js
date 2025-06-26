const bgColorBtn = document.getElementById("color-btn");

bgColorBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
