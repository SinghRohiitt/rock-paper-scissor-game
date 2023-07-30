let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  //     score={
  //         wins:0,
  //         losses:0,
  //         ties:0
  //     }
  // } 
  updatescore();

  let isAutoPlaying = false;
  let  intervalId;

  function autoplay(){
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
          const playerMove =pickcomputerMove();
          playGame(playerMove);
        },2000);
        isAutoPlaying =true;
      
    }else{
        clearInterval(intervalId);
        isAutoPlaying=false;
    }
  }
  

  function playGame(playerMove) {
    const computerMove = pickcomputerMove();
    let result = '';
    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }

    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }
    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updatescore();

    document.querySelector(".result").innerHTML = result;

    document.querySelector(".move").innerHTML = `You
     <img src="${playerMove}-emoji.png" class="move-icon">
     <img src="${computerMove}-emoji.png" class="move-icon">
     Computer`;

    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    // wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);
  }

  function updatescore() {
    document.querySelector(".score").innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
  }
  function pickcomputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }
    return computerMove;
  }