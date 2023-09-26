let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".btn"); 
let input = document.querySelector(".second-line");
let erase = document.querySelector("#erase");
let clear = document.querySelector("#clear")

function deleteOne() {
    input.innerHTML = input.innerHTML.slice(0, -1); 
    console.log("Works")
}

document.addEventListener("keydown", (e)=> {
    if(e.key >= '0' && e.key <= '9') {
        input = document.querySelector(".second-line");
        input.innerHTML += e.key;
    }
    else if(e.key ==="Backspace") {
        deleteOne();
    }

})

numbers.forEach(number => {
    number.addEventListener("click", () => {
        input.innerHTML += number.innerHTML;
    })
});

erase.addEventListener("click", deleteOne)
clear.addEventListener("click", ()=>{
    input.innerHTML = "";
})
