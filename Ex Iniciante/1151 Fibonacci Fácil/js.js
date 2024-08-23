const input = require('fs').readFileSync('stdin', 'utf8');
let N = parseInt(input.split('\n').map(Number))

let num1 = 0
let nm2 = 1
let resultado = ''

for (let i = 0; i < N; i++) {
    if (i === 0) {
        resultado += num1;
    } else if (i === 1) {
        resultado += ' ' + nm2;
    } else {
        let soma = num1 + nm2;
        resultado += ' ' + soma;
        num1 = nm2;
        nm2 = soma;
    }
}
 
let res = resultado.split(' ')
.filter(el => el !== '')
.map((el) =>Number(el))

console.log(...res)
