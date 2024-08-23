const input = require('fs').readFileSync('stdin','utf8')
let lines = input.split('\n').map(Number);

let N = lines.slice(1)
let casos = lines[0]


for (let x = 0; x < casos ; x++) {
     if (N[x] === 0) {
         console.log('NULL');
     } else if (N[x] % 2 === 0) {
         if (N[x] > 0) {
             console.log('EVEN POSITIVE');
         } else {
             console.log('EVEN NEGATIVE');
         }
     } else { // N[x] é ímpar
         if (N[x] > 0) {
             console.log('ODD POSITIVE');
         } else {
             console.log('ODD NEGATIVE');
         }
     }
 }
 