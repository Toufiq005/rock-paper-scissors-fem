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
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const player = document.getElementById('player');
const computerGuess = document.getElementById('computerGuess');

function gameFunction(a) {
    let random = Math.random();
    let computer = Math.floor(random * gameArry.length);
    if (step1.classList.contains('flex')) {
        step1.classList.remove('flex')
        step1.classList.add('hidden')
    }
    if (step2.classList.contains('hidden')) {
        step2.classList.remove('hidden')
        step2.classList.add('flex')
    }
    if (a == 0) {
        player.innerHTML += `<div class="circle bg-blue flex justify-center items-center paper" >
        <div class="circle2 flex justify-center items-center" id="paper" >
          <img src="/images/icon-paper.svg" alt="">
        </div>
      </div>`
    }
    if (a == 1) {
        player.innerHTML += `<div class="circle bg-yellow flex justify-center items-center  scissors">
        <div class="circle2 flex justify-center items-center" id="scissors" >
          <img src="/images/icon-scissors.svg" alt="">
        </div>
      </div>`
    }
    if (a == 2) {
        player.innerHTML += `<div class="circle bg-red flex justify-center items-center  rock">
        <div class="circle2 flex justify-center items-center" id="rock" >
          <img src="/images/icon-rock.svg" alt="">
        </div>
      </div>`
    }
    if (computer == 0) {
        computerGuess.innerHTML += `<div class="circle bg-blue flex justify-center items-center paper" >
        <div class="circle2 flex justify-center items-center" id="paper" >
          <img src="/images/icon-paper.svg" alt="">
        </div>
      </div>`
    }
    if (computer == 1) {
        computerGuess.innerHTML += `<div class="circle bg-yellow flex justify-center items-center  scissors">
        <div class="circle2 flex justify-center items-center" id="scissors" >
          <img src="/images/icon-scissors.svg" alt="">
        </div>
      </div>`
    }
    if (computer == 2) {
        computerGuess.innerHTML += `<div class="circle bg-red flex justify-center items-center  rock">
        <div class="circle2 flex justify-center items-center" id="rock" >
          <img src="/images/icon-rock.svg" alt="">
        </div>
      </div>`
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
    setTimeout(() => {
        console.log('game Tie')
    }, 1000)
}

function gameLose() {
    setTimeout(() => {
        console.log('game Win')
    }, 1000)
}

function gameWin() {
    setTimeout(() => {
        console.log('you win')
    }, 1000);
}
