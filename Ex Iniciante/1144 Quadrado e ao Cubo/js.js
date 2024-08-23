const input = require('fs').readFileSync('stdin', 'utf8');
const N = parseInt(input)


for(let i = 1; i <= N && N < 1000; i++){
     let grupo = []
     let contadorOriginal = i
     let contador = i
     let calc = 1
    
     for(let g = 0; g < 3; g++ ){
          calc *= contador
          grupo.push(calc)
          contador = contadorOriginal
         
     }
     contador = 0
     
     console.log(...grupo)
}