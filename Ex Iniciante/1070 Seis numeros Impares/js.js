const input = require('fs').readFileSync('stdin', 'utf8');
let numero = parseInt(input)

let numerosImpares = []

while (numerosImpares.length < 6) {
     if (numero % 2 === 1) {
         numerosImpares.push(numero);
     }
     numero++;
 }
 
 console.log(`${numerosImpares.join('\n')}`);