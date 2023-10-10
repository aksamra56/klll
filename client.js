let count = 56;
const counterDisplayElem = document.querySelector('.counter-display');
const counterMinusElem = document.querySelector('.counter-minus');
const counterPlusElem = document.querySelector('.counter-plus');

let num = 0;
num++; // adds 1 to num
console.log(num); // output: 1

num--; // subtract another 1 to num
console.log(num); // output: 2

increaseButton.addEventListener("click", function () {
    increaseCount();
})

decreaseButton.addEventListener("click", function () {
  decreaseCount();
})


updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

