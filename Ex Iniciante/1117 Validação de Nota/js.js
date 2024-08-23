const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const casos = lines
.filter(line => line.trim() !== '')
.map(line => line.trim())
.filter(line => !line.includes('\r'))
.map(line => line.split(' ').map(Number));


let inicio = 0
let contador = 0

 for(let i = 0; i < casos.length; i++){
     let caso = casos[i]

     for(let j = 0; j < caso.length; j++){
          let nota = caso[j];

          if(nota < 0 || nota > 10){
               console.log('nota invalida')
          } else{
               inicio += nota
               contador ++
               
               if (contador === 2) {
                    break
               }
            }
      }
      if (contador === 2) {
          break; 
      }       
 }
 

  let media = inicio / contador
  console.log(`media = ${media.toFixed(2)}`)
