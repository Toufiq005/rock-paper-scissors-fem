// -------------Rule-modal------------
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal-btn');

function getRule() {
    if (modal.classList.contains('flex')) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }
    else {
        modal.classList.add('flex');
        modal.classList.remove('hidden');
    }
}
// ----------------game-logic---------

const gameArry = [
    paperObj = {
        "icon": "url('/images/icon-paper.svg')",
        "color": "bg-blue"
    },
    scissorsObj = {
        "icon": "url('/images/icon-scissors.svg')",
        "color": "bg-blue"
    },
    rockObj = {
        "icon": "url('/images/icon-scissors.svg')",
        "color": "bg-blue"
    }
]

const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const setp1 = document.getElementById('setp1');

function gameFunction(a) {
    let random = Math.random();
    let computer = Math.floor(random * gameArry.length);
    if (setp1.classList.contains('flex')) {
        setp1.classList.remove('flex')
        setp1.classList.add('hidden')
    }
    if (computer == a) {
        gameTie()
    }
    if (computer == 0 && a == 1) {
        gameWin()
    }
    if (computer == 0 && a == 2) {
        gameLose()
    }
    if (computer == 1 && a == 0) {
        gameLose()
    }
    if (computer == 1 && a == 2) {
        gameWin()
    }
    if (computer == 2 && a == 0) {
        gameWin()
    }
    if (computer == 2 && a == 1) {
        gameLose()
    }

}
function gameTie() {
    console.log('Tie')
}
function gameWin() {
    console.log('you Win')
}
function gameLose() {
    console.log('You Lose')
}