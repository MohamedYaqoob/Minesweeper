let bomb = []
let x = []
let y = []
let count = 0
let count1 = 0
let bombNo = 10
let hidenBox = 100
let number = 0
let s = 0
let m = 0

const hiden = document.querySelector('hiden')
const bomb1 = document.querySelector('bomb')
const div = document.querySelectorAll('div')

hiden.innerText = hidenBox
bomb1.innerText = bombNo

for (let i = 0; i < 100; i++) {
  x[i] = 0
  y[i] = '-'
}

function win(l) {
  if (x[l] === '*') {
    alert('You Lost')
  } else if (hidenBox == bombNo) {
    alert('You Win')
  }
}

function random(l) {
  for (let i = 0; i < bombNo; i++) {
    bomb[i] = Math.floor(Math.random() * 100)
    for (let j = i + 1; j < bombNo; j++) {
      while (bomb[i] == bomb[i + j] || l == bomb[i]) {
        bomb[i + j] = Math.floor(Math.random() * 100)
      }
    }
  }
}

function numberAroundBomb(i) {
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
  if (bomb[i] % 10 > 0 && x[bomb[i] - 1] != '*') {
    x[bomb[i] - 1] += 1
  }
  if (bomb[i] % 10 < 9 && x[bomb[i] + 1] != '*') {
    x[bomb[i] + 1] += 1
  }
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

function openAroundEmptyBox() {
  if (y[s] == 0) {
    openUpBox(s)
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
}

function makeBoard() {
  for (let i = 0; i < bombNo; i++) {
    x[bomb[i]] = '*'
    numberAroundBomb(i)
  }
}

for (let l = 0; l < div.length; l++) {
  div[l].innerText = y[l]
}

for (let l = 0; l < div.length; l++) {
  div[l].addEventListener('click', () => {
    for (let l = 0; l < div.length; l++) {
      if (count === 0) {
        random(l)
        makeBoard()
        count++
      }
    }
    showHidenBox(l)
    while (m < 2) {
      openAroundEmptyBox()
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
  })
}
