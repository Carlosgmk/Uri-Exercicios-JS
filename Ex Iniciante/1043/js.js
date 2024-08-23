const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ')

let [A, B, C]  = lines.map(parseFloat)
let teste =  A + B > C && A + C > B && B + C > A;


 if(teste === true){
     let perimetro = A + B + C 
     console.log(`Perimetro = ${perimetro}`)
} else{
     let area = (A + B) * C / 2;
     console.log(`Area = ${area.toFixed(1)}`)
}
