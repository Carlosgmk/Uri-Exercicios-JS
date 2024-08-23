const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let X = Number(lines[0])
let Y = Number(lines[1])
let nMultiplos = []
let soma = 0

if(true){
     if(X > Y){
           [Y, X] = [X, Y]
      }
 }

for(let i = X; i <= Y; i++) {
     if(!Number.isInteger(i / 13) ){
          nMultiplos.push(i)
     }
}
     let index = 0

     while(index < nMultiplos.length){
          soma += nMultiplos[index]
          index++
     }
     console.log(soma)