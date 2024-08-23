const input = require('fs').readFileSync('stdin', 'utf8');
const lines = parseInt(input);

let N = lines


for(let contador = 1; contador <= 10; contador++){
  console.log(`${contador} x ${N} = ${N * contador}`)
}