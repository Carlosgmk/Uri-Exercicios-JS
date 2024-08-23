const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [tempo, velocidade] = lines
let media = (tempo * velocidade) / 12
console.log(`${media.toFixed(3)}`)