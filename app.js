
const resetButton = document.querySelector('#reset');
const playTo = document.querySelector('#playTo');

let winningScore = parseInt(playTo.value);
let gameOver = false;
let playerCount = 2;

//This makes an array of players, to call player 1 use player[1]
let player = makePlayers(playerCount);

player[1].button.addEventListener('click', () => {
    updateScores(player[1], player[2])
})

player[2].button.addEventListener('click', () => {
    updateScores(player[2], player[1]);
})

resetButton.addEventListener('click', () => {
    player = reset(playerCount);
})

playTo.addEventListener('change', () => {
    winningScore = parseInt(playTo.value);
    player = reset(playerCount);
})

function updateScores(player, opponent) {
    if (gameOver === false) {
        player.score++;
        if (player.score >= winningScore) {
            gameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
        }
        player.display.textContent = player.score;
    }
}

function reset(numberOfPlayers) {

    allPlayers = makePlayers(numberOfPlayers)
    gameOver = false;
    return allPlayers;
}

function makePlayers(numberOfPlayers) {
    let allPlayers = [];
    for (let i = 1; i <= numberOfPlayers; i++) {
        allPlayers[i] = {
            score: 0,
            button: document.querySelector(`#p${i}`),
            display: document.querySelector(`#p${i}Score`),
        }
        allPlayers[i].display.classList.remove('winner', 'loser');
        allPlayers[i].display.textContent = allPlayers[i].score;
    }
    return allPlayers;
}
