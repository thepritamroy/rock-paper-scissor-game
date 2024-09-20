
document.querySelector('.js-reset-score').addEventListener('click' ,()=>{
 
  document.querySelector('.js-reset-confirm').innerHTML = 'Are you sure you want to reset the score?'
  document.querySelector('.js-yes-btn').innerHTML = 'Yes'
  document.querySelector('.js-no-btn').innerHTML = 'No'

  document.querySelector('.js-reset-confirm').classList.add('after-reset-confirm')
  document.querySelector('.js-yes-btn').classList.add('after-yes-btn')
  document.querySelector('.js-no-btn').classList.add('after-yes-btn')
  
})

function yesFunction(){

  setTimeout(()=>{
    resetYesScore();
  } , 200)
  function resetYesScore(){
  document.querySelector('.js-reset-confirm').innerHTML = ''
  document.querySelector('.js-yes-btn').innerHTML = ''
  document.querySelector('.js-no-btn').innerHTML = ''

  document.querySelector('.js-reset-confirm').classList.remove('after-reset-confirm')
  document.querySelector('.js-yes-btn').classList.remove('after-yes-btn')
  document.querySelector('.js-no-btn').classList.remove('after-yes-btn')


      score.Wins = 0;
      score.Loses = 0;
      score.Ties = 0;

      document.querySelector('.js-result').innerHTML = '';
      document.querySelector('.js-moves').innerHTML = '';
      document.querySelector('.js-score').innerHTML = `Wins : ${score.Wins} , Loses : ${score.Loses} , Ties : ${score.Ties} , `
      
      localStorage.setItem('score' , JSON.stringify(score))

  }}

function noFunction(){

setTimeout(()=>{
resetYesScore();
} , 300)
function resetYesScore(){
document.querySelector('.js-reset-confirm').innerHTML = ''
document.querySelector('.js-yes-btn').innerHTML = ''
document.querySelector('.js-no-btn').innerHTML = ''

document.querySelector('.js-reset-confirm').classList.remove('after-reset-confirm')
document.querySelector('.js-yes-btn').classList.remove('after-yes-btn')
document.querySelector('.js-no-btn').classList.remove('after-yes-btn')

}}

 

document.body.addEventListener('keydown' , (event)=>{
if(event.key==='r'){
  gamePlay('Rock')
}else if(event.key ==='p'){
  gamePlay('Paper')
}else if(event.key==='s'){
  gamePlay('Scissor')
}
})

let isAutoPlay=false;
let intervalId;

function autoPlayfun(){
const autoPlayBtnElement = document.querySelector('.js-autoPlay-btn');
if(autoPlayBtnElement.innerHTML==='Auto Play'){
autoPlayBtnElement.innerHTML= 'Stop Playing'
}else if (autoPlayBtnElement.innerHTML=== 'Stop Playing'){
autoPlayBtnElement.innerHTML='Auto Play'
}

if(!isAutoPlay){
intervalId= setInterval(()=>{
const playerMove =pickComputerMove();
gamePlay(playerMove)
}, 1000)

isAutoPlay=true
}else{
clearInterval(intervalId);
isAutoPlay=false;
}
}
let score =  JSON.parse(localStorage.getItem('score'))|| {
  Wins:0,
  Loses:0,
  Ties:0
}

document.querySelector('.js-score').innerHTML = `Wins : ${score.Wins} , Loses : ${score.Loses} , Ties : ${score.Ties} , `

function gamePlay(playerMove){
 let computerMove= pickComputerMove();
 let result ='';

 if(playerMove==='Rock'){

      if(computerMove==='Rock'){
          result = 'Tie'
      }else if(computerMove==='Paper'){
          result = 'You Lose'
      }else if(computerMove==='Scissor'){
          result = 'You Win'
      }

 }else if(playerMove==='Paper'){

      if(computerMove==='Rock'){
          result = 'You Win'
      }else if(computerMove==='Paper'){
          result = 'Tie'
      }else if(computerMove==='Scissor'){
          result = 'You Lose'
      }

 }else if(playerMove==='Scissor'){

      if(computerMove==='Rock'){
          result = 'You Lose'
      }else if(computerMove==='Paper'){
          result = 'You Win'
      }else if(computerMove==='Scissor'){
          result = 'Tie'
      }
 }

 if(playerMove==='Rock'){

 }

 if(result==='Tie'){
  score.Ties = score.Ties + 1
 }else if(result==='You Win'){
  score.Wins = score.Wins + 1
 }else if(result==='You Lose'){
  score.Loses = score.Loses + 1
 }

 localStorage.setItem('score' , JSON.stringify(score))

 document.querySelector('.js-score').innerHTML = `Wins : ${score.Wins} , Loses : ${score.Loses} , Ties : ${score.Ties} , `
 document.querySelector('.js-result').innerHTML = result;
 document.querySelector('.js-moves').innerHTML = `You  <img src="${playerMove}.png" alt=""> Computer <img src="${computerMove}.png" alt="">`;

}

function pickComputerMove(){

  let randomNumber = Math.random();
  let computerMove = '';
  if(randomNumber<=1/3){
      computerMove='Rock'
  }else if(randomNumber>1/3 && randomNumber<=2/3){
      computerMove = 'Paper'
  }else if(randomNumber>2/3){
      computerMove = 'Scissor';
  }
  return computerMove;
}

