function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const main = document.querySelector('.container');

btn.addEventListener('click', function(){
  let randomColor = getRandomColor(); 
  main.style.background = randomColor;
  color.style.color = randomColor;
  color.textContent = randomColor;
});