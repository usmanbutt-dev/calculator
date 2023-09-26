let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".btn"); 
let sumButton = document.querySelector(".fa-add");
let subtractButton = document.querySelector(".fa-subtract");
let multiplyButton = document.querySelector(".fa-multiply");
let divideButton = document.querySelector(".fa-divide");
let equalsButton = document.querySelector(".fa-equals");
let input = document.querySelector(".second-line");
let output = document.querySelector(".first-line");
let erase = document.querySelector("#erase");
let clear = document.querySelector("#clear")
let lastOperationPerformed;

function deleteOne() {
    input.innerHTML = input.innerHTML.slice(0, -1); 
}

document.addEventListener("keydown", (e)=> {
    if(e.key >= '0' && e.key <= '9') {
        input.innerHTML += e.key;
    }
    else if (e.keyCode == 110) {
        if(!input.innerHTML.includes(".")) {
            input.innerHTML += e.key;
            console.log("works");
        }
    }
    else if(e.key ==="Backspace") {
        deleteOne();
    }
    else if (e.key == "+"){
        result(lastOperationPerformed);
        lastOperationPerformed = "+";
    }
    else if (e.key == "-"){
        result(lastOperationPerformed);
        lastOperationPerformed = "-";
    }
    else if (e.key == "*"){
        result(lastOperationPerformed);
        lastOperationPerformed = "*";
    }
    else if (e.key == "/"){
        result(lastOperationPerformed);
        lastOperationPerformed = "/";
    }
    else if (e.key == "=" || e.key == "Enter"){
        result(lastOperationPerformed);
        lastOperationPerformed = "";
    }

})

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (number.key == ".") {
            if(!input.innerHTML.includes(".")) {
                input.innerHTML += e.key;
                console.log("works");
            }
        }
        else {
            input.innerHTML += number.innerHTML;
        }
    })
});

erase.addEventListener("click", deleteOne)
clear.addEventListener("click", ()=>{
    input.innerHTML = "";
    output.innerHTML = "";
})

sumButton.addEventListener("click",()=> {
    result(lastOperationPerformed);
    lastOperationPerformed = "+";
});

subtractButton.addEventListener("click",()=> {
    result(lastOperationPerformed);
    lastOperationPerformed = "-";
});

multiplyButton.addEventListener("click",()=> {
    result(lastOperationPerformed);
    lastOperationPerformed = "*";
});

divideButton.addEventListener("click",()=> {
    result(lastOperationPerformed);
    lastOperationPerformed = "/";
});
equalsButton.addEventListener("click",()=> {
    result(lastOperationPerformed);
    lastOperationPerformed = "";
});

function result(operator) {
    let num1 = +input.innerHTML;
    let num2 = +output.innerHTML;
    input.innerHTML= "";
    output.innerHTML= num1;
    switch (operator) {
        case '+':
            output.innerHTML = num2 + num1;
            break;
        case '-':
            output.innerHTML = num2 - num1;
            break;
        case '*':
            output.innerHTML = num2 * num1;
            break;
        case '/':
          if (num1 !== 0) {
            output.innerHTML = num2 / num1;
          } else {
            output.innerHTML = "0";
          }
          break;
        case "":
            num2 = num1;
        }
    output.scrollIntoView();
}