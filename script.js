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
for (let i = 0; i < 100; i++) {
  x[i] = 0
  y[i] = '-'
}
const hiden = document.querySelector('hiden')
const bomb1 = document.querySelector('bomb')
hiden.innerText = hidenBox
bomb1.innerText = bombNo
const div = document.querySelectorAll('div')
for (let l = 0; l < div.length; l++) {
  div[l].innerText = y[l]
}
for (let l = 0; l < div.length; l++) {
  div[l].addEventListener('click', () => {
    for (let l = 0; l < div.length; l++) {
      if (count == 0) {
        count++
        for (let i = 0; i < bombNo; i++) {
          bomb[i] = Math.floor(Math.random() * 100)
          while (x[bomb[i]] == div[l]) {
            bomb[i] = Math.floor(Math.random() * 100)
          }
        }
        for (let i = 0; i < bomb.length; i++) {
          for (let j = i + 1; j < bombNo; j++) {
            while (bomb[i] === bomb[i + j] || x[bomb[i]] == div[l]) {
              bomb[i + j] = Math.floor(Math.random() * 100)
            }
          }
        }
        for (let i = 0; i < bombNo; i++) {
          x[bomb[i]] = '*'
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
      }
    }

    if (x[l] !== y[l]) {
      hidenBox--
      div[l].innerText = x[l]
      y[l] = x[l]
    }
    while (m < 2) {
      if (y[s] == 0) {
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
    // if (x[l] == 0) {
    //   if (l > 9) {
    //     if (l % 10 > 0 && y[l - 11] !== x[l - 11]) {
    //       div[l - 11].innerText = x[l - 11]
    //       y[l - 11] = x[l - 11]
    //       hidenBox--
    //     }
    //     if (y[l - 10] !== x[l - 10]) {
    //       div[l - 10].innerText = x[l - 10]
    //       y[l - 10] = x[l - 10]
    //       hidenBox--
    //     }
    //     if (l % 10 < 9 && y[l - 9] !== x[l - 9]) {
    //       div[l - 9].innerText = x[l - 9]
    //       y[l - 9] = x[l - 9]
    //       hidenBox--
    //     }
    //   }
    //   if (l % 10 > 0 && y[l - 1] !== x[l - 1]) {
    //     div[l - 1].innerText = x[l - 1]
    //     y[l - 1] = x[l - 1]
    //     hidenBox--
    //   }
    //   if (l % 10 < 9 && y[l + 1] !== x[l + 1]) {
    //     div[l + 1].innerText = x[l + 1]
    //     y[l + 1] = x[l + 1]
    //     hidenBox--
    //   }
    //   if (l < 90) {
    //     if (l % 10 > 0 && y[l + 9] !== x[l + 9]) {
    //       div[l + 9].innerText = x[l + 9]
    //       y[l + 9] = x[l + 9]
    //       hidenBox--
    //     }
    //     if (y[l + 10] !== x[l + 10]) {
    //       div[l + 10].innerText = x[l + 10]
    //       y[l + 10] = x[l + 10]
    //       hidenBox--
    //     }
    //     if (l % 10 < 9 && y[l + 11] !== x[l + 11]) {
    //       div[l + 11].innerText = x[l + 11]
    //       y[l + 11] = x[l + 11]
    //       hidenBox--
    //     }
    //   }
    // }

    hiden.innerText = hidenBox

    if (x[l] === '*') {
      alert('You Lost')
    } else if (hidenBox == bombNo) {
      alert('You Win')
    }
  })
}

// const column = document.querySelectorAll('.column')
//   for (let i = 0; i < 7; i++) {
//     column[i].addEventListener('click', () => {
//       let number = div[l].getAttribute()
//       console.log(number)
//       const div = document.querySelectorAll('div')

console.log(bomb)

// for (let i = 0; i < bomb.length; i++) {
//   x[bomb[i]] = '*'
//   if (bomb[i] > 9) {
//     if (bomb[i] % 10 > 0 && x[bomb[i] - 11] != '*') {
//       x[bomb[i] - 11] += 1
//     }
//     if (x[bomb[i] - 10] != '*') {
//       x[bomb[i] - 10] += 1
//     }
//     if (bomb[i] % 10 < 9 && x[bomb[i] - 9] != '*') {
//       x[bomb[i] - 9] += 1
//     }
//   }
//   if (bomb[i] % 10 > 0 && x[bomb[i] - 1] != '*') {
//     x[bomb[i] - 1] += 1
//   }
//   if (bomb[i] % 10 < 9 && x[bomb[i] + 1] != '*') {
//     x[bomb[i] + 1] += 1
//   }
//   if (bomb[i] < 90) {
//     if (bomb[i] % 10 > 0 && x[bomb[i] + 9] != '*') {
//       x[bomb[i] + 9] += 1
//     }
//     if (x[bomb[i] + 10] != '*') {
//       x[bomb[i] + 10] += 1
//     }
//     if (bomb[i] % 10 < 9 && x[bomb[i] + 11] != '*') {
//       x[bomb[i] + 11] += 1
//     }
//   }
// }
console.log(x)
