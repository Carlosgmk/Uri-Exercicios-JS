const input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseInt(input)

const valores = [3600, 60, 1]
const resultado = []

for (let valor of valores){
     resultado.push (parseInt(lines / valor) )
     lines = lines % valor
}
console.log(resultado.join(':'))