let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let [X, Y] = lines.map(Number)

let total = X / Y
console.log(`${total.toFixed(3)} km/l`)