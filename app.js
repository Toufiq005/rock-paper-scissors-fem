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


const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const player = document.getElementById('player');
const computerGuess = document.getElementById('computerGuess');
const gameResult = document.getElementById('gameResult');
const gameResultModal = document.getElementById('gameResultModal');
const playAgainBtn = document.getElementById('playAgain')

let random;
let computer;

function gameFunction(a) {
  let random = Math.random();
  let computer = Math.floor(random * 3)
  if (modal.classList.contains)
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
  return computer;
}

function gameTie() {
  setTimeout(() => {
    gameResultModal.classList.remove('hidden')
    gameResultModal.classList.add('flex')
    gameResult.textContent = 'Game Tie'
    console.log('game Tie')
  }, 1000)
}

function gameLose() {
  setTimeout(() => {
    gameResultModal.classList.remove('hidden')
    gameResultModal.classList.add('flex')
    gameResult.textContent = 'You Lose'
    console.log('game Win')
  }, 1000)
}

function gameWin() {
  gameResult.textContent = 'You Win'
  setTimeout(() => {
    gameResultModal.classList.remove('hidden')
    gameResultModal.classList.add('flex')
    console.log('you win')
  }, 1000);
}

playAgainBtn.addEventListener('click', function () {
  playAgain();
  addStep2();
})

function playAgain(a) {
  gameResultModal.classList.add('hidden')
  gameResultModal.classList.remove('flex')
  step2.classList.add('hidden')
  step2.classList.remove('flex')
  step1.classList.remove('hidden')
  step1.classList.add('flex')

  if (a == 0) {
    player.innerHTML -= `<div class="circle bg-blue flex justify-center items-center paper" >
        <div class="circle2 flex justify-center items-center" id="paper" >
          <img src="/images/icon-paper.svg" alt="">
        </div>
      </div>`
  }
  if (a == 1) {
    player.innerHTML -= `<div class="circle bg-yellow flex justify-center items-center  scissors">
        <div class="circle2 flex justify-center items-center" id="scissors" >
          <img src="/images/icon-scissors.svg" alt="">
        </div>
      </div>`
  }
  if (a == 2) {
    player.innerHTML -= `<div class="circle bg-red flex justify-center items-center  rock">
        <div class="circle2 flex justify-center items-center" id="rock" >
          <img src="/images/icon-rock.svg" alt="">
        </div>
      </div>`
  }
  if (computer == 0) {
    computerGuess.innerHTML -= `<div class="circle bg-blue flex justify-center items-center paper" >
        <div class="circle2 flex justify-center items-center" id="paper" >
          <img src="/images/icon-paper.svg" alt="">
        </div>
      </div>`
  }
  if (computer == 1) {
    computerGuess.innerHTML -= `<div class="circle bg-yellow flex justify-center items-center  scissors">
        <div class="circle2 flex justify-center items-center" id="scissors" >
          <img src="/images/icon-scissors.svg" alt="">
        </div>
      </div>`
  }
  if (computer == 2) {
    computerGuess.innerHTML -= `<div class="circle bg-red flex justify-center items-center  rock">
        <div class="circle2 flex justify-center items-center" id="rock" >
          <img src="/images/icon-rock.svg" alt="">
        </div>
      </div>`
  }


}
function addStep2() {
  step2.innerHTML += `<div class="step2 hidden absolute justify-center h-screen w-full items-center " id="step2">
  <div class="player circle trans  flex flex-col items-center ">
    <div id="player"></div>
    <h2 class="">You Picked</h2>
  </div>
  <div class="computer circle trans flex flex-col items-center">
    <div id="computerGuess"></div>
    <h2>House Picked</h2>
  </div>
</div>`
}
