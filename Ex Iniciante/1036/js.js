 input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.trim().split('\n');
let [A, B, C] = lines[0].split(' ').map(Number)

let formula = ( B**2 - 4* A * C);

 if(formula < 0 || !isFinite(formula)) {
     return console.log('Impossivel calcular')

 }  else {
     let x1 = (-B + Math.sqrt(formula)) / (2 * A);
     let x2 = (-B - Math.sqrt(formula)) / (2 * A);
    
     if (!isFinite(x1) || !isFinite(x2)) {
          console.log('Impossivel calcular');
      } else {
          console.log(`R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)}`);
      }
  }

     
 
  