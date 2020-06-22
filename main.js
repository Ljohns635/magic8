const ballBtn = document.querySelector('#clicker');
// console.log(ballBtn)

let response = ''

function randomNum() {
  return Math.ceil(Math.random() * 5);
}
// console.log(randomNum())

function getRandom() {
  switch(randomNum()){
    case 1:
      response = 'I can see it';
      break;
    case 2:
      response = 'That\'s a hard NO';
      break;
    case 3:
      response = 'It\'s possible';
      break;
    case 4:
      response = 'Ask me later I\'m tired';
      break;
    case 5:
      response = 'I don\'t know! Why are you asking me';
      break;
  }
}

ballBtn.addEventListener('click', function() {
  randomNum()
  getRandom()
 
  let para = document.querySelector('#magicAnswer')
  para.textContent = response
});
