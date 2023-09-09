const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);
const input = document.querySelector("input");
const text = document.querySelector(".ques");
const total = document.querySelector(".score");

text.innerHTML = `The multiply of ${num1} and ${num2} is ?`

const ans = num1*num2;
    
        let score = JSON.parse(localStorage.getItem("score"));

        if(!score){
            score = 0;
        }
        
        total.innerHTML = `score: ${score}`

function userAns() {
    const inputAns = +input.value;
    if( inputAns === ans){
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()
    }
}

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}