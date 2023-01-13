const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')

let sec = 0
let min = 0
let tomatoCount = 0

let isRunning = false 

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
function startTimer(){
  timer = setInterval(() => {
    sec++
    console.log(sec)
    if (sec => 60){
      sec = 0
    }
    if (min => 25){
      min = 0
    }
    updateText()
  }, 1000)
}

function pauseTimer(){
  clearInterval(timer)
}

function updateText(){
  const minText = document.querySelector('#min')
  const secText = document.querySelector('#sec')
  minText.innerText = min
  secText.innerText = sec 
}
