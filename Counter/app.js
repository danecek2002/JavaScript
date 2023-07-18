let counter = 0;
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const number = document.querySelector('.number');

decrease.addEventListener('click', function(){
  counter -= 1;
  number.textContent = counter;
})

reset.addEventListener('click', function(){
  counter = 0;
  number.textContent = counter;
})

increase.addEventListener('click', function(){
  counter +=1;
  number.textContent = counter;
})

