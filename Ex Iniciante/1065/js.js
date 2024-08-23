const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.trim().split('\n');

let inteiro = lines.map(line => parseFloat(line));
let valor = 0



   for(let i = 0; i < inteiro.length; i++){
       if(inteiro[i] % 2 === 0){
          valor++
       }
   }

console.log(`${valor} valores pares`) 