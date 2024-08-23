const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let X = Number(lines[0])
let Y = Number(lines[1])

if(true){
if(X > Y){
   [X,Y] = [Y,X] 
 }
}
 for(let i = X + 1; i < Y; i++){
     if(i % 5 === 2 || i % 5 === 3){
          console.log(i)
     }
 }