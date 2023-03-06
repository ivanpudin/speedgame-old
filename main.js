/* 'use strict'

document.querySelectorAll('.circles button').forEach(button => button.addEventListener('click', () => {
  console.log(button.id)
}))

document.getElementById('start').addEventListener('click', () => {
  let score = 0

  const randomPop = Math.floor(Math.random() * 4)
  console.log(randomPop)

  if (randomPop === 0) {
    document.getElementById('first').classList.add('shot1')
    document.querySelectorAll('.btn').forEach(element => element.addEventListener('click', () => {
      if (element.id === 'first') {
        score += 1
        console.log(score)
        document.getElementById('first').classList.remove('shot1')
      } else {
        console.log('Game Over')
        document.getElementById('first').classList.remove('shot1')
      }
    }))
  } else if (randomPop === 1) {
    document.getElementById('second').classList.add('shot2')
    document.querySelectorAll('.btn').forEach(element => element.addEventListener('click', () => {
      if (element.id === 'second') {
        score += 1
        console.log(score)
        document.getElementById('second').classList.remove('shot2')
      } else {
        console.log('Game Over')
        document.getElementById('second').classList.remove('shot2')
      }
    }))
  } else if (randomPop === 2) {
    document.getElementById('third').classList.add('shot3')
    document.querySelectorAll('.btn').forEach(element => element.addEventListener('click', () => {
      if (element.id === 'third') {
        score += 1
        console.log(score)
        document.getElementById('third').classList.remove('shot3')
      } else {
        console.log('Game Over')
        document.getElementById('third').classList.remove('shot3')
      }
    }))
  } else if (randomPop === 3) {
    document.getElementById('fourth').classList.add('shot4')
    document.querySelectorAll('.btn').forEach(element => element.addEventListener('click', () => {
      if (element.id === 'fourth') {
        score += 1
        console.log(score)
        document.getElementById('fourth').classList.remove('shot4')
      } else {
        console.log('Game Over')
        document.getElementById('fourth').classList.remove('shot4')
      }
    }))
  }
}) */

/* let score = 0
let active = 0
let timer
let pace = 1000
let rounds = 0
const circles = document.querySelectorAll('.circles button')

const enableCircles = () => {
  circles.forEach(circle => {
    circle.style.pointerEvents = 'auto'
  })
}

circles.forEach((button, i) => button.addEventListener('click', () => {
  if (i !== active) {
    return endGame
  }

  console.log(i)
  score += 10
  document.querySelector('.score').textContent = score
}))

const getRndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const startGame = () => {
  if (rounds >= 20) {
    return endGame
  }

  document.getElementById('start').classList.add('hidden')
  document.getElementById('stop').classList.remove('hidden')

  enableCircles()
  const nextActive = pickNew(active)

  circles[nextActive].classList.toggle('shot1')
  circles[active].classList.remove('shot1')

  active = nextActive

  timer = setTimeout(startGame, pace)

  pace -= 30
  rounds++

  function pickNew (active) {
    const nextActive = getRndInt(0, 3)

    if (nextActive !== active) {
      return nextActive
    } else {
      return pickNew(active)
    }
  }
}

const endGame = () => {
  document.getElementById('start').classList.remove('hidden')
  document.getElementById('stop').classList.add('hidden')
  console.log('Game ended')
  clearTimeout(timer)
}

document.getElementById('start').addEventListener('click', startGame)
document.getElementById('start').addEventListener('click', endGame)
document.getElementById('close').addEventListener('click', () => {
  window.location.reload()
}) */

const circles = document.querySelectorAll('.btn')
const startButton = document.querySelector('#start')
const endButton = document.querySelector('#stop')
const closeButton = document.querySelector('#close')
const scoreSpan = document.querySelector('.score')
const scoreEnd = document.querySelector('.scoreEnd')
const overlay = document.querySelector('.overlay')

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
  console.log(score)
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
  console.log('game ended')
  clearTimeout(timer)
}

const resetGame = () => {
  window.location.reload()
}

startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)
closeButton.addEventListener('click', resetGame)
