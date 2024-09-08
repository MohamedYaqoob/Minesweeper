let bomb = []
let x = []
let y = []
let count = 0
let count1 = 0
for (let i = 0; i < 100; i++) {
  x[i] = 0
  y[i] = '-'
}
const div = document.querySelectorAll('div')
for (let l = 0; l < div.length; l++) {
  div[l].innerText = y[l]
}
for (let l = 0; l < div.length; l++) {
  div[l].addEventListener('click', () => {
    for (let l = 0; l < div.length; l++) {
      count1 = l
      if (count == 0) {
        count++
        for (let i = 0; i < 10; i++) {
          bomb[i] = Math.floor(Math.random() * 100)
          while (bomb[i] == count1) {
            bomb[i] = Math.floor(Math.random() * 100)
          }
        }
        for (let i = 0; i < bomb.length; i++) {
          for (let j = i + 1; j < bomb.length; j++) {
            while (bomb[i] === bomb[i + j] || bomb[i + j] == count1) {
              bomb[i + j] = Math.floor(Math.random() * 100)
            }
          }
        }
        for (let i = 0; i < bomb.length; i++) {
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
    div[l].innerText = x[l]
    if (x[l] === '*') {
      alert('You lost')
    }
  })
}
// const column = document.querySelectorAll('.column')
//   for (let i = 0; i < 7; i++) {
//     column[i].addEventListener('click', () => {
//       let number = column[i].getAttribute('value')
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
