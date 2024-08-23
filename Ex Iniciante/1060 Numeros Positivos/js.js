const input = require('fs').readFileSync('stdin', 'utf-8')
let lines = input.trim().split('\n');
let valores = lines.map(line => parseFloat(line));

let valor = 0

for(let n = 0; n < valores.length; n++){
          if (valores[n] >= 0){
               valor ++  
          }
      }

  console.log(`${valor} valores positivos`)