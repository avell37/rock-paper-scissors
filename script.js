const playerBtns = document.querySelectorAll('.player-btn'),
      play = document.querySelector('.playGame'),
      playerScore = document.querySelector('.player-score'),
      botScore = document.querySelector('.bot-score'),
      botChoice = document.querySelector('.bot-btn-result'),
      playerChoice = document.querySelector('.player-btn-result'),
      result = document.querySelector('.resultGame'),
      resetScore = document.querySelector('.reset-button');

let botNumberScore = 0, 
    playerNumberScore = 0;

playerScore.textContent = `Player score: ${playerNumberScore}`;
botScore.textContent = `Bot score: ${botNumberScore}`;

window.onload = function() {
    const playerData = localStorage.getItem('playerScore');
    const botData = localStorage.getItem('botScore');

    if (playerData) {
        playerNumberScore = playerData;
        playerScore.textContent = `Player score: ${playerNumberScore}`
    }

    if (botData) {
        botNumberScore = botData;
        botScore.textContent = `Bot score: ${botNumberScore}`
    }
}

function playerChoiceBtn() {
    playerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn === e.currentTarget) {
                playerChoice.textContent = btn.textContent;
            }
        });
    });
}

playerChoiceBtn();

function startGame() {
    play.addEventListener('click', (e) => {
        const botBtns = Array.from(playerBtns);
        const randomIndex = Math.round(Math.random() * botBtns.length);
        const botChoiceBtn = botBtns[randomIndex];

        playerChoiceBtn();
        botChoice.textContent = botChoiceBtn.textContent;
        winOrLose();
        localStorage.setItem('playerScore', playerNumberScore);
        localStorage.setItem('botScore', botNumberScore);
    });
}

startGame();

function winOrLose() {
    switch (true) {
        case playerChoice.textContent === botChoice.textContent:
            result.textContent = 'НИЧЬЯ!';
            result.style.color = 'gray';
            break;
        case playerChoice.textContent === '👊':
            if (botChoice.textContent === '✌') {
                result.textContent = 'Вы победили!';
                result.style.color = 'green';
                playerNumberScore++;
                playerScore.textContent = `Player score: ${playerNumberScore}`
            } else {
                result.textContent = 'Бот победил!';
                result.style.color = 'red';
                botNumberScore++;
                botScore.textContent = `Bot score: ${botNumberScore}`;
            }
            break;
        case playerChoice.textContent === '✌':
            if (botChoice.textContent === '🤚') {
                result.textContent = 'Вы победили!';
                result.style.color = 'green';
                playerNumberScore++;
                playerScore.textContent = `Player score: ${playerNumberScore}`
            } else {
                result.textContent = 'Бот победил!';
                result.style.color = 'red';
                botNumberScore++;
                botScore.textContent = `Bot score: ${botNumberScore}`;
            }
            break;
        case playerChoice.textContent === '🤚':
            if (botChoice.textContent === '👊') {
                result.textContent = 'Вы победили!';
                result.style.color = 'green';
                playerNumberScore++;
                playerScore.textContent = `Player score: ${playerNumberScore}`
            } else {
                result.textContent = 'Бот победил!';
                result.style.color = 'red';
                botNumberScore++;
                botScore.textContent = `Bot score: ${botNumberScore}`;
            }
            break;
    }
}

function resetGame() {
    resetScore.addEventListener('click', (e) => {
        e.preventDefault();

        localStorage.removeItem('playerScore');
        localStorage.removeItem('botScore');

        playerNumberScore = 0;
        botNumberScore = 0;

        playerScore.textContent = `Player score: ${playerNumberScore}`
        botScore.textContent = `Bot score: ${botNumberScore}`
        playerChoice.textContent = '';
        botChoice.textContent = '';
        result.textContent = '';
    })
}

resetGame();