
document.addEventListener("DOMContentLoaded", (event) => {
const questionField = document.getElementById("json-data");
const btnContainer = document.getElementById("btn-wrapper");
let id = 1;
window.onload = (event) => {
checkAnswer();
}




function checkAnswer(){
    fetch('questions.json')
    .then(res => res.json())
    .then(data => {
    let result = data.find(obj => obj.id === `Q${id}`);
    questionField.innerHTML = result.q;
    result.answers.forEach(answer => {
        for(let key in answer){
            if(key.startsWith('a')){
                const answerButton = document.createElement('button');
                answerButton.id = "aButton";
                answerButton.innerText = answer[key];
                answerButton.onclick = () => checkCorrect(answer.correct)
                btnContainer.appendChild(answerButton);
            }
        }
    });
       
  });
}

let selectedAnswer = null;

function checkCorrect(correct){
    selectedAnswer = correct;
    var buttons = btnContainer.lastElementChild;
    if(selectedAnswer === true){
        alert("CORRECT");
        while (buttons) {
            btnContainer.removeChild(buttons);
            buttons = btnContainer.lastElementChild;
        }
        id++;
        checkAnswer();
    }else if(selectedAnswer === false){
        alert("INCORRECT");
    }
}
  });