let input = require('fs').readFileSync('stdin', 'utf8');
let raio = input

let volume =  (4/3) * 3.14159 * raio * raio * raio

console.log(`VOLUME = ${volume.toFixed(3)}`)
