const input = require('fs').readFileSync('stdin', 'utf8')
const N = Number(input)

let i = 1
let res = N

while (i < N){
 let fatorial =  N - i
 res *= fatorial

if(fatorial === 1){
   break
  }
  i++ 
}

  
console.log(res)