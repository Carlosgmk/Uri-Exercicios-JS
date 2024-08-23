const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.trim().split(' ');

let crescente = lines.slice().sort(function(a ,b) {
     return a - b
})

// Formatação dos números em ordem crescente
let resultadoCrescente = crescente.join('\n');

// Formatação dos números na ordem de entrada
let resultadoEntrada = lines.join('\n');

// Imprime os resultados
console.log(`${resultadoCrescente}\n\n${resultadoEntrada}`);