let textInput = document.querySelector('textarea')
let totalRemain = document.querySelector('.countRemain')
let Remaining = document.querySelector('.char')

totalRemain.innerText = 0
Remaining.innerText= 50


textInput.addEventListener('input',(e)=>{
   totalRemain.innerText =e.target.value.length;
   
   Remaining.innerText = parseInt(Remaining.innerText)-1
   if (parseInt(totalRemain.innerText) === 50 && parseInt(Remaining.innerText)===0) {
    Remaining.innerText =0 
    totalRemain.innerText=50
    textInput.maxLength=50
}

})

    