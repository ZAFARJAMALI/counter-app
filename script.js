// buttons
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
// Num
const Num = document.querySelector(".num");

// funtion to decrease num
function decreaseNum(){
Num.innerHTML--;
}

// function to reset num
function resetNum(){
    Num.innerHTML=0;
    }

    // funtion to increaseNum
function increaseNum(){
     Num.innerHTML++;
    }

decrease.addEventListener("click",decreaseNum);
reset.addEventListener("click",resetNum);
increase.addEventListener("click",increaseNum);