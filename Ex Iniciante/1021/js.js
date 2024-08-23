let input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseFloat(input);

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
let resultado = [];
let resultadoMoedas = [];

for (let nota of notas) {
    resultado.push(Math.floor(lines / nota));
    lines = lines % nota;
}

for (let moeda of moedas) {
    let quantidadeMoedas = Math.floor(lines / moeda);
    resultadoMoedas.push(quantidadeMoedas);
    lines = parseFloat((lines % moeda).toFixed(2));
}

console.log(`NOTAS:\n${resultado.map((valor, index) => `${valor} nota(s) de R$ ${notas[index].toFixed(2)}`).join('\n')}\nMOEDAS:\n${resultadoMoedas.map((valor, index) => `${valor} moeda(s) de R$ ${moedas[index].toFixed(2)}`).join('\n')}`);


  

  

