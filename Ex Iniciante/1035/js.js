const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.trim().split('\n')

const [A, B, C, D] = lines[0].split(' ').map(Number);
let somatst1 = C + D
let somatst2 = A + B
let inparOupar = A % 2

 if(B > C && D > A && somatst1 > somatst2 && C > 0 && D > 0  && inparOupar === 0){
   console.log('Valores aceitos')
 } else{
     console.log('Valores nao aceitos')
 }



