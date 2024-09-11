//Global variables

let bomb = []
let x = []
let y = []
let count = 0
let count1 = 0
let count2 = 0
let bombNo = 10
let hidenBox = 100
let number = 0
let s = 0
let m = 0
let v = 0

const hiden = document.querySelector('hiden')
const bomb1 = document.querySelector('bomb')
const div = document.querySelectorAll('div')
const face = document.querySelector('#face')
hiden.innerText = hidenBox
bomb1.innerText = bombNo

for (let i = 0; i < 100; i++) {
  x[i] = 0
  y[i] = '-'
}

// for (let l = 0; l < div.length; l++) {
//   div[l].innerText = y[l]
// }

//Functions

function win(l) {
  if (x[l] === '*') {
    count1++
    face.src =
      'data:image/png;base64,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'
  } else if (hidenBox == bombNo) {
    count1++
    face.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGNEpYhgsKaqWVy2z1Zq36oi5_2Oq5jcmte-aO0Zff5A8lnnav9v9XXJD7ZjHaAqUhqc&usqp=CAU'
  }
}

function random(l) {
  for (let i = 0; i < bombNo; i++) {
    for (let i = 0; i < bombNo; i++) {
      bomb[i] = Math.floor(Math.random() * 100)
    }
    while (bomb[i] == l) {
      bomb[i] = Math.floor(Math.random() * 100)
    }
    for (let j = 1; j < bombNo; j++) {
      while (bomb[i] == bomb[i + j] || bomb[i] == l) {
        bomb[i + j] = Math.floor(Math.random() * 100)
      }
    }
  }
}

function numberUpBomb(i) {
  if (bomb[i] > 9) {
    if (bomb[i] % 10 > 0 && x[bomb[i] - 11] != '*') {
      x[bomb[i] - 11] += 1
    }
    if (x[bomb[i] - 10] != '*') {
      x[bomb[i] - 10] += 1
    }
    if (bomb[i] % 10 < 9 && x[bomb[i] - 9] != '*') {
      x[bomb[i] - 9] += 1
    }
  }
}

function numberSameLevelOfBomb(i) {
  if (bomb[i] % 10 > 0 && x[bomb[i] - 1] != '*') {
    x[bomb[i] - 1] += 1
  }
  if (bomb[i] % 10 < 9 && x[bomb[i] + 1] != '*') {
    x[bomb[i] + 1] += 1
  }
}

function numberDownBomb(i) {
  if (bomb[i] < 90) {
    if (bomb[i] % 10 > 0 && x[bomb[i] + 9] != '*') {
      x[bomb[i] + 9] += 1
    }
    if (x[bomb[i] + 10] != '*') {
      x[bomb[i] + 10] += 1
    }
    if (bomb[i] % 10 < 9 && x[bomb[i] + 11] != '*') {
      x[bomb[i] + 11] += 1
    }
  }
}

function numberAroundBomb(i) {
  numberUpBomb(i)
  numberSameLevelOfBomb(i)
  numberDownBomb(i)
}

function showHidenBox(l) {
  if (x[l] !== y[l]) {
    if (x[l] !== '*') {
      hidenBox--
    }
    div[l].innerText = x[l]
    y[l] = x[l]
  }
}

function openUpBox(s) {
  if (s > 9) {
    if (s % 10 > 0 && y[s - 11] !== x[s - 11]) {
      div[s - 11].innerText = x[s - 11]
      y[s - 11] = x[s - 11]
      hidenBox--
    }
    if (y[s - 10] !== x[s - 10]) {
      div[s - 10].innerText = x[s - 10]
      y[s - 10] = x[s - 10]
      hidenBox--
    }
    if (s % 10 < 9 && y[s - 9] !== x[s - 9]) {
      div[s - 9].innerText = x[s - 9]
      y[s - 9] = x[s - 9]
      hidenBox--
    }
  }
}

function openSameLevelBox(s) {
  if (s % 10 > 0 && y[s - 1] !== x[s - 1]) {
    div[s - 1].innerText = x[s - 1]
    y[s - 1] = x[s - 1]
    hidenBox--
  }
  if (s % 10 < 9 && y[s + 1] !== x[s + 1]) {
    div[s + 1].innerText = x[s + 1]
    y[s + 1] = x[s + 1]
    hidenBox--
  }
}

function openDownBox(s) {
  if (s < 90) {
    if (s % 10 > 0 && y[s + 9] !== x[s + 9]) {
      div[s + 9].innerText = x[s + 9]
      y[s + 9] = x[s + 9]
      hidenBox--
    }
    if (y[s + 10] !== x[s + 10]) {
      div[s + 10].innerText = x[s + 10]
      y[s + 10] = x[s + 10]
      hidenBox--
    }
    if (s % 10 < 9 && y[s + 11] !== x[s + 11]) {
      div[s + 11].innerText = x[s + 11]
      y[s + 11] = x[s + 11]
      hidenBox--
    }
  }
}

function openAroundEmptyBox(s) {
  if (y[s] == 0) {
    openUpBox(s)
    openSameLevelBox(s)
    openDownBox(s)
  }
}

function makeBoard() {
  for (let i = 0; i < bombNo; i++) {
    x[bomb[i]] = '*'
    numberAroundBomb(i)
  }
}

function checkNumberOfBomb() {
  for (let i = 0; i < 100; i++) {
    if (x[i] == '*') {
      count2++
    }
  }
  if (count2 == bombNo) {
    v++
  }
}

function gamePage() {
  location.href = 'index1.html'
}

//event handlers
for (let l = 0; l < div.length; l++) {
  div[l].addEventListener('click', () => {
    if (count1 == 0) {
      if (count === 0) {
        while (v == 0) {
          random(l)
          makeBoard()
          count++
          checkNumberOfBomb()
        }
      }
      showHidenBox(l)
      while (m < 2) {
        openAroundEmptyBox(s)
        if (m == 0) {
          s++
          if (s == 100) {
            m = 1
          }
        } else {
          s--
          if (s == -1) {
            m = 2
          }
        }
      }
      m = 0
      hiden.innerText = hidenBox
      win(l)
    }
  })
}

face.addEventListener('click', () => {
  location.reload()
})
