const input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseInt(input)

let N = lines

for(let c = 1;c <= 10000; c++){
     if(c % N === 2){
          console.log(`${c}`)
     }
}
 