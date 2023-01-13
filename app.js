const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')
const tomatoCountText = document.querySelector('#tomato-count')
const minText = document.querySelector('#min')
const secText = document.querySelector('#sec')
const tomatoes = document.querySelector('.tomatoes')

let timer;
let sec = 0
let min = 0
let tomatoCount = 0


startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resetBtn.addEventListener('click', resetTimer)

function startTimer(){
  timer = setInterval(() => {
    sec++
    console.log(sec)
    if (sec >= 60){
      min++
      sec = 0
    }
    if (min >= 25){
      min = 0
      addTomato()
    }
    updateText()
  }, 1000)
}


function addTomato(){
    tomatoCount++
    tomatoCountText.innerText = tomatoCount
    const tomato = document.createElement('div')
    tomato.classList.add('tomato-plant')
    tomatoes.append(tomato)
}

function pauseTimer(){
  clearInterval(timer)
}

function resetTimer(){
  sec = 0
  min = 0
  updateText()
}

function updateText(){
  minText.innerText = min
  secText.innerText = sec 
}
