const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let maiorNumero = Number(lines[0])
let posicao = 0


for (let i = 1; i < 100; i++) {
    let numeroAtual = Number(lines[i])
    if (numeroAtual > maiorNumero) {
        maiorNumero = numeroAtual
        posicao = i
    }
}

console.log(maiorNumero)
console.log(posicao + 1)
