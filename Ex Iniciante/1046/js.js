const input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split(' ');

const inicio = parseInt(lines[0]);
const fim = parseInt(lines[1]);

let duracao;

if (inicio < fim) {
    duracao = fim - inicio;
} else {
    // Se o início for maior que o fim, significa que o jogo passou da meia-noite
    duracao = 24 - inicio + fim;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);

 