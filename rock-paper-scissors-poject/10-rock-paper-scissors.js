    /* add objects */
      let score = JSON.parse(localStorage.getItem('score')) || {wins : 0,
        losses: 0,
        ties: 0
      };
      document.querySelector('.js-result').innerHTML = `${result}`;
      document.querySelector('.js-moves').innerHTML = `YOU picked ${playerMove} and computerMove picked ${computerMove}`;
UpdateScoreElement();
        

  

       
      /* add a function */
      let isAutoPlaying = false;
let intervalId;
function autoPlay(){
  if(!isAutoPlaying){
  intervalId =  setInterval(function(){
   const playerMove = pickComputerMove();
   playGame(playerMove);
  }, 1000);
  isAutoPlaying = true;


  }else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}



      function playGame(playerMove){
        const computerMove =   pickComputerMove();
     result = '';
      if(playerMove === 'scissors'){
      if (computerMove === 'rock'){
        result = 'lose!';
      }else if(computerMove === 'paper'){
        result = 'You Win!';
      }else if (computerMove === 'scissors'){
        result = 'Tie!';
      }
    }else if(playerMove === 'paper'){
      if (computerMove === 'rock'){
        result = 'You Win!';
      }else if(computerMove === 'paper'){
        result = 'Tie!';
      }else if (computerMove === 'scissors'){
        result = 'lose!';
      }
    }else if(playerMove === 'rock'){

      if (computerMove === 'rock'){
        result = 'Tie!'
      }else if(computerMove === 'paper'){
        result = 'lose!';
      }else if (computerMove === 'scissors'){
        result = 'You Win!'
      }
    }
       if(result === 'Tie!'){
        score.ties +=1;
       }else if(result === 'lose!'){
        score.losses +=1;
       }else if(result === 'You Win!'){
        score.wins +=1;
       }
                localStorage.setItem('score' ,JSON.stringify(score));
          document.querySelector('.js-result').innerHTML = `${result}`;
          document.querySelector('.js-moves').innerHTML = `YOU 
          <img src="/rock-paper-scissors-poject/images/${playerMove}-emoji.png" class="move-icon">
          <img src="/rock-paper-scissors-poject/images/${computerMove}-emoji.png"
          class="move-icon">
          Computer`;

          UpdateScoreElement();
      }
      function UpdateScoreElement(){
document.querySelector('.js-score').innerHTML = `losses : ${score.losses}, wins : ${score.wins} , ties : ${score.ties}`;

      }

      function pickComputerMove(){

  const randomNumber = Math.random();
    let computerMove = ' ';
    if(randomNumber >= 0 && randomNumber <=1/3 ){
        computerMove ='rock';
    }else if(randomNumber >= 1/3 && randomNumber <= 2/3){
        computerMove ='paper';
    }else if(randomNumber >= 2/3 && randomNumber <= 1){
        computerMove = 'scissors';
    }
    return computerMove;

    }