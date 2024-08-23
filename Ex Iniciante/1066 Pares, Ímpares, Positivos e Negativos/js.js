const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.trim().split('\n');

let numeros = lines.map(line => parseFloat(line))

let par = 0
let impar = 0
let positivos = 0
let negativos = 0

   for(let i = 0; i < numeros.length; i++){
       if(numeros[i] % 2 === 0){
           par++
       } else {
          impar++
       }
   }

  for(let i = 0; i < numeros.length; i++){
      if(numeros[i] > 0 ){
        positivos++

      } if(numeros[i] < 0 ){
          negativos++
      }
  }

 console.log(`${par} valor(es) par(es)\n${impar} valor(es) impar(es)\n${positivos} valor(es) positivo(s)\n${negativos} valor(es) negativo(s)`)