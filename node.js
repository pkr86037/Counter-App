const count = document.querySelector('.count');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const resetBtn = document.querySelector('.reset');
const classby = document.querySelector('.classby');


minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const classbyValue = parseInt(classby.value)
   if (countValue > 0) {
     count.innerText = countValue - classbyValue
     
   } else {
    minusBtn.disabled = true
   }

  
});

plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText);
    const classbyValue = parseInt(classby.value)
    if(countValue >= 0) minusBtn.disabled = false
    count.innerText = countValue + classbyValue


});

resetBtn.addEventListener('click', () => {
    count.innerText = 0;
});

