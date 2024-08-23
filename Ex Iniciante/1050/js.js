const input = require('fs').readFileSync('stdin',  'utf8')
let lines = parseInt(input)

if(lines === 61){
     console.log('Brasilia')
} else if(lines === 71){
     
    console.log('Salvador')
 } else if(lines === 11){
     console.log('Sao Paulo')
 } else if(lines === 21){
     
     console.log('Rio de Janeiro')
 } else if(lines === 32){
     
     console.log('Juiz de Fora')
 } else if(lines === 19){
     
     console.log('Campinas')
 } else if (lines === 27){
     
     console.log('Vitoria')
 } else if(lines === 31){
     
     console.log('Belo Horizonte')
 } else{
      console.log('DDD nao cadastrado')
 }

