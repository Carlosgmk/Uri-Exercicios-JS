const input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseInt(input)

let N = lines

for(let i = 1;  i <= N; i++){
     if(i % 2 === 0){
          console.log(`${i}^2 = ${i*i}`)
     }
}
