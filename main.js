function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let play = options[Math.floor(Math.random() * 3)];
    return play;
}

function Round(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper'){
    return 'You Lose! Paper beats Rock';
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors'){
    return 'You Lose! Scissors beats Paper';
  } else if (playerSelection.toLowerCase()=== 'scissors' && computerSelection === 'Rock') {
    return 'You Lose! Rock beats Scissors';
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
    return 'You Win! Rock beats Scissors'
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
    return 'You Win! Paper beats Rock';
  } else if (playerSelection.toLowerCase()=== 'scissors' && computerSelection === 'Paper') {
    return 'You Win! Scissors beats Rock';
  } else if (playerSelection.toLowerCase()=== 'scissors' && computerSelection === 'Scissors'){
    return "It's a draw! You both chose Scissors";
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Rock') {
    return "It's a draw! You both chose Rock";
  } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Paper') {
    return "It's a draw! You both chose Paper";
  }
}

function game() {
  for (let i = 0, rounds = 5; i < rounds; i++) {
    let option = window.prompt('Rock, Paper or Scissors?');
    console.log(Round(option, computerPlay()));
  }   
} 

game();
