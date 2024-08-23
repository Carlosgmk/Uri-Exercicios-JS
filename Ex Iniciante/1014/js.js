const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n')

let linhaDbaixo = lines.map(linha => linha.split(' ').map(Number))


const [x1, y1] = linhaDbaixo[0]
const [x2, y2] = linhaDbaixo[1]

const distancia = Math.sqrt(((x2 - x1) ** 2 + (y2 - y1) ** 2))

console.log(`${distancia.toFixed(4)}`)