const lines = prompt('digite os valores de entrada').split(' ');
let [A, B]= lines.map(Number)
let PROD = A * B

console.log(`PROD = ${PROD}`)