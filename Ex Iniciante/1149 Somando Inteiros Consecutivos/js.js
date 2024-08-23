const input = require('fs').readFileSync('stdin', 'utf8');
const numbers = input.trim().split(' ').map(Number);

let A = numbers[0];
let ultimo_valor = (numbers.length) -1
let N = (numbers[ultimo_valor])
let soma = 0;

for (let i = 0; i < N; i++) {
    soma += A + i
    
}
console.log(soma)