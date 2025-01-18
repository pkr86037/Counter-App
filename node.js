const count = document.querySelector('.count');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const resetBtn = document.querySelector('.reset');


minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)

   if (countValue > 0) {
     count.innerText = countValue - 1
     
   } else {
    minusBtn.disabled = true
   }

  
});

plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    if(countValue >= 0) minusBtn.disabled = false
    count.innerText = countValue + 1


});

resetBtn.addEventListener('click', () => {
    count.innerText = 0;
});

