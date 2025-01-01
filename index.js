function playGame(playerMove) {
  const computerMove = pickComputerMove();
  
  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else if (computerMove === 'scissors') 
    result = 'You win.'; {
  }
  }

  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
    result = 'You win.';
  } else if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'scissors') 
    result = 'You lose.'; {
  }
  }
}