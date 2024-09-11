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
const img = document.querySelectorAll('img')
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

function win(l) {
  if (x[l] === '*') {
    face.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZ1d7zfynb2sIdCCsrq7Hl9o0w_U3ittYZw&s'
  } else if (hidenBox == bombNo) {
    face.src =
      'data:image/png;base64,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'
  }
}

function random(l) {
  for (let i = 0; i < bombNo; i++) {
    bomb[i] = Math.floor(Math.random() * 100)
    while (l == bomb[i]) {
      bomb[i] = Math.floor(Math.random() * 100)
    }
    for (let j = i + 1; j < bombNo; j++) {
      while (bomb[i] == bomb[i + j] || l == bomb[i]) {
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
  })
}
face.addEventListener('click', () => {
  location.reload()
})
