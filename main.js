function cpuChoice() {
    let x = Math.round(Math.random() * 2);
    if (x === 0) {
        return op1
    } 
    else if (x === 1) {
        return op2
    } 
    else if (x === 2) {
        return op3
    }
}

function play() {
    let player = playerChoice.value;
    let cpu = cpuChoice();
    if (player === 'none') {
        alert('You have to choose an option!');
    } else {
        switch (cpu + player) {
            case 'rockscissors':
            case 'paperrock': 
            case 'scissorspaper':
                winner.innerText = 'CPU wins!';
                break;
            case 'scissorsrock':
            case 'rockpaper': 
            case 'paperscissors':
                winner.innerText = 'Player wins!';
                break;
            default: 
                winner.innerText = "It's a draw!";
                break;
        }
        playerChoiceP.innerText = 'Player choose: ' + player;
        cpuChoiceP.innerText = 'CPU choose: ' + cpu;
    }
}

let playerChoice = document.getElementById('player-choice');
let btn = document.getElementById('btn');
let playerChoiceP = document.getElementById('player');
let cpuChoiceP = document.getElementById('cpu');
let winner = document.getElementById('winner');

let op1 = 'rock';
let op2 = 'paper';
let op3 = 'scissors';

btn.addEventListener('click', play);