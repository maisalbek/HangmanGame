let image = document.querySelector('#img')
let tryinp = document.getElementById('try')
let show = document.getElementById('show')
let attempt = document.getElementById('attempt')
let start = document.querySelector('#start-btn')
let reset = document.querySelector('#reset')
let hint = document.querySelector('#hint')
let answer = '';
let maxattempt = 9;
let mistakes = 0;
let guessed_letters = [];
let words = []

start.addEventListener('click',()=>{
    document.addEventListener('click',(e)=>{
        if(e.target.id==='fruits'){
            words = ['apple','apricots','avocado','banana','blackberries','blackcurrant','blueberries','breadfruit','cantaloupe','carambola','cherimoya','cherries','clementine','coconut meat']
            hint.innerText = 'Фрукты'
        }else if(e.target.id==='countries'){
            words = ['afghanistan','albania','algeria','andorra','angola','antigua barbuda','argentina','armenia','australia','austria','azerbaijan']
            hint.innerText = 'Страны'
        }else if(e.target.id==='mix'){
            words = ['ability','ablse','about','above','accept','according','account','across','acta','action']
            hint.innerText = 'Любое слово'
        }
        document.querySelector('#input').addEventListener('input',(e)=>{
            check(e.target.value)
            e.target.value = ''
        })
        attempt.innerHTML = `Попыток: ${maxattempt}`
        randword();
        checkword();
        reset.addEventListener('click', ()=>{
            resetgame()
    })
})
})
function randword() {
    answer = words[Math.floor(Math.random() * words.length)];
}
  function check(inpletter) {
    guessed_letters.indexOf(inpletter) === -1 ? guessed_letters.push(inpletter) : null;
    if (answer.indexOf(inpletter) >= 0) {
      checkword();
      checkanswer();
    } else if (answer.indexOf(inpletter) === -1) {
      mistakes++;
      maxattempt--;
      showattempt();
      showimage();
      checkanswer();
    }
  }
  function showimage() {
      if(mistakes>=9 || maxattempt<=0){
          image.src = './img/s9.jpg';
      }else{
          image.src = './img/s' + mistakes + '.jpg';
      }
  }
  function checkword() {
    wordStatus = answer.split('').map(letter => (guessed_letters.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    tryinp.innerHTML = wordStatus;
  }
  function showattempt() {
      if(maxattempt<=0){
          attempt.innerHTML = 0    
      }else{
          attempt.innerHTML = `Попыток: ${maxattempt}`
      }
  }
  function checkanswer(){
      if(answer===wordStatus){
          show.innerText = '👏' 
      }else if(mistakes>=9){
          show.innerText = '😒'
      }
  }
function resetgame(){
    answer = '';
    maxattempt = 9;
    mistakes = 0;
    guessed_letters = [];
    randword();
    checkword();
    showimage()
    show.innerText = ''
}