let question = [
    "What is the capital of India?",
    "Where is the Statue of Unity located?",
    "10 + 10 = ____"
];
let options = [
    ["a. Hyderabad", "b. Gujarat", "c. Delhi", "d. Rajasthan"],
    ["a. India", "b. USA", "c. England", "d. China"],
    ["a. 40", "b. 30", "c. 100", "d. 20"]
];
let answers = ["c. Delhi", "a. India", "d. 20"];
const que = document.getElementById('que');
const op = document.getElementById('op');
const scoreDisplay = document.getElementById('score');
let x = 0;
let cnt = 0;
function start() {
    x = 0;
    cnt = 0;
    scoreDisplay.innerHTML = "";
    startQuestion();
}
function startQuestion() {
    if (x < question.length) {
        que.innerHTML = question[x];
        op.innerHTML = "";
        for (let i = 0; i < options[x].length; i++) {
            op.innerHTML += `
    <label>
    
    <input type="radio" name="options" value="${options[x][i]}">
    ${options[x][i]}
    </label><br>
    `;
        }
    }
}
function next() {
    const selectedAnswer =
        document.querySelector('input[name="options"]:checked');
    if (selectedAnswer && selectedAnswer.value === answers[x]) {
        cnt++;
    }
    x++;
    if (x === question.length) {
        displayScore();
    } else {
        startQuestion();
    }
}
function displayScore() {
    scoreDisplay.innerHTML = `Your score is: ${cnt} out of ${question.length}`;
}
const st = document.getElementById('st');
st.addEventListener('click', start);