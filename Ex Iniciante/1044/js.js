const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input

let [A, B] = input.split(' ').map(value => parseInt(value));
let tstMultiplo

if (A % B === 0 || B % A === 0) {
     tstMultiplo = 0 
} else {
     tstMultiplo = 1
}

if (tstMultiplo === 0) {
     console.log('Sao Multiplos');
 } else {
     console.log('Nao sao Multiplos');
 }