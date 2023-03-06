const circles = document.querySelectorAll('.btn')
const startButton = document.querySelector('#start')
const endButton = document.querySelector('#stop')
const closeButton = document.querySelector('#close')
const scoreSpan = document.querySelector('.score')
const scoreEnd = document.querySelector('.scoreEnd')
const overlay = document.querySelector('.overlay')
const idle = new Audio('content/idle.mp3')
const bgMusic = new Audio('content/background_music.mp3')

let score = 0
let active = 0
let timer
let pace = 1000
let rounds = 0

circles.forEach((circle, i) => {
  circle.addEventListener('click', () => clickCircle(i))
}
)

const getRndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const clickCircle = (i) => {
  if (i !== active) {
    return endGame()
  }

  score += 10
  scoreSpan.textContent = score
}

const enableCircles = () => {
  circles.forEach(circle => {
    circle.style.pointerEvents = 'auto'
  })
}

const startGame = () => {
  if (rounds >= 10) {
    return endGame()
  }

  idle.pause()
  bgMusic.play()

  startButton.classList.add('hidden')
  endButton.classList.remove('hidden')

  enableCircles()
  const nextActive = pickNew(active)

  circles[nextActive].classList.toggle('active')
  circles[active].classList.remove('active')

  active = nextActive

  timer = setTimeout(startGame, pace)

  pace -= 10
  rounds++

  function pickNew (active) {
    const nextActive = getRndInt(0, 3)
    if (nextActive !== active
    ) {
      return nextActive
    }
    return pickNew(active)
  }
}

const endGame = () => {
  scoreEnd.textContent = score

  endButton.classList.remove('hidden')
  startButton.classList.add('hidden')

  overlay.style.visibility = 'visible'

  clearTimeout(timer)
}

const resetGame = () => {
  window.location.reload()
}

startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)
closeButton.addEventListener('click', resetGame)
document.addEventListener('DOMContentLoaded', () => {
  idle.play()
})
