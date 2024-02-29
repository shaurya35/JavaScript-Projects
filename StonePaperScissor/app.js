let stone = document.querySelector(".img1");
let paper = document.querySelector(".img2");
let scissor = document.querySelector(".img3");
let s1 = document.querySelector(".score1");
let s2 = document.querySelector(".score2");
let message = document.querySelector(".winning-message");

const drawCondition = () => {
    message.innerText = "Its a Draw";
}

let countforYou = 0;
let countforComputer = 0;

const winnerOfTheGame = (userChoice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice === computerChoice) {
        drawCondition();
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        countforYou++;
        s1.textContent = countforYou;
        message.textContent = "You Win! Computer chose " + computerChoice;
    } else {
        countforComputer++;
        s2.textContent = countforComputer;
        message.textContent = "Computer Wins! Computer chose " + computerChoice;
    }
}

stone.addEventListener("click", () => {
    winnerOfTheGame('rock');
});

paper.addEventListener("click", () => {
    winnerOfTheGame('paper');
});

scissor.addEventListener("click", () => {
    winnerOfTheGame('scissors');
});


