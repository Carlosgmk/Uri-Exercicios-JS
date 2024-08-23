const input = require('fs').readFileSync('stdin', 'utf8');
let numbers = input.split('\n').map(Number);

let X = numbers[0];
let Z = null;
let i = 0;
let soma = 0

 while(i < numbers.length){
    Z = numbers[i]
    if(Z > X){
        break;
    }
    i++;
 }

  i = 0

  while (soma <= Z) {
    soma += X + i;
    i++
    
}

console.log(i);