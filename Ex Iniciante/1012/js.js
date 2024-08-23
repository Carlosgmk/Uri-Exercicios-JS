const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split(' ');
let [A, B, C] = lines.map(Number)

 let trianguloRetangulo = A * C / 2
 let circulo = 3.14159 * (C * C)
 let trapezio =  (A + B) * C  / 2
 let quadrado = B * B
 let retangulo = A * B 
 
 console.log(`TRIANGULO: ${trianguloRetangulo.toFixed(3)}\nCIRCULO: ${circulo.toFixed(3)}\nTRAPEZIO: ${trapezio.toFixed(3)}\nQUADRADO: ${quadrado.toFixed(3)}\nRETANGULO: ${retangulo.toFixed(3)}`)