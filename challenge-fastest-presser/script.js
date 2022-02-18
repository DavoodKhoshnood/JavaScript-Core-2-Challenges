let timer
let onTime
let amount = 0
let sCounter = 0
let lCounter = 0
let canvasId = ''

function startGame() {
  amount = document.querySelector('input').value
  startTimer()
}

function startTimer() {
  timer = setTimeout(() => {
    clearInterval(onTime)
    if (lCounter > sCounter) canvasId = 'l-canvas'
    else canvasId = 's-canvas'
    showConfetti(canvasId)
  }, amount * 1000)
  onTime = setInterval(() => {
    document.getElementById('sKey').innerText = sCounter
    document.getElementById('lKey').innerText = lCounter
  }, 10)
}

function showConfetti(id) {
  var confettiSettings = {
    target: id,
    max: '500',
    size: '1',
    animate: true,
    props: ['circle', 'square', 'triangle', 'line'],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    clock: '25',
    rotate: true,
    width: '150',
    height: '75',
    start_from_edge: true,
    respawn: false,
  }
  var confetti = new ConfettiGenerator(confettiSettings)
  clearTimeout(timer)
  confetti.render()
  setTimeout(() => {
    confetti.clear()
    resetValues()
  }, 3000)
}

function resetValues() {
  lCounter = 0
  sCounter = 0
  document.getElementById('sKey').innerText = sCounter
  document.getElementById('lKey').innerText = lCounter
}

function keyBoardEvents(e) {
  //alert(e.keyCode)
  if (e.keyCode === 115) {
    // On 'S' Pressed
    sCounter++
  } else if (e.keyCode === 108) {
    // On 'L' Pressed
    lCounter++
  }
}

document.addEventListener('keypress', keyBoardEvents)
document.querySelector('button').addEventListener('click', startGame)
