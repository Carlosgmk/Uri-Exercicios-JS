let input = require('fs').readFileSync('stdin', 'utf8');
let linhas = input.split('\n')

const infoItem1 = linhas.shift().split(' ')
const infoItem2 = linhas.shift().split(' ')

let [CodigoPca1, nmrPecas1, valorPca1] = infoItem1
let [CodigoPca2, nmrPecas2, valorPca2] = infoItem2
let valor = (nmrPecas1 * valorPca1) + (nmrPecas2 * valorPca2)

console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`)