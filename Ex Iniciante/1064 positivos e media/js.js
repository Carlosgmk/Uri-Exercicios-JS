const input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.split('\n')

let numeros = lines.map(parseFloat).filter(valor => valor > 0)
let inteiro = 0
let media
let valoresMedia = numeros.reduce((soma, valor) => soma + valor, 0)


for(let i=0; i < numeros.length; i++){
   if(numeros[i] > 0){
       inteiro ++
       
       
   }
}
media = valoresMedia / inteiro

console.log(`${inteiro} valores positivos\n${media.toFixed(1)}`)