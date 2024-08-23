const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n')

let tipoC = lines.map(line => Number(line))
let alcool = 0
let gasolina = 0
let diesel = 0
let continuar = true


for(let j = 0; j <= tipoC.length; j++){
     let codigoProduto = tipoC[j]
     if(codigoProduto === 1){
          alcool++
     } else if(codigoProduto === 2){
          gasolina++
     } else if(codigoProduto === 3){
          diesel++
     } else if(codigoProduto === 4){
          break
     }
}

console.log(`MUITO OBRIGADO\nAlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`)