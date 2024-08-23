const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n').map(Number)

let X = lines[0]
let Y = lines[1]
let numerosImpares = []



if(X > Y){
     let temp = X;
     X = Y
     Y = temp
}

for(let i = X + 1; i < Y; i++){
  if (i % 2 !== 0){
     numerosImpares.push(i)
  }

}

let soma = numerosImpares.reduce((soma, valor) => soma + valor, 0)

console.log(soma);