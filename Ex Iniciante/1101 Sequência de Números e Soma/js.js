const input = require('fs').readFileSync('stdin', 'utf-8');
const lines = input.trim().split('\n')

const casos = lines
.filter(line => line.trim() !== '')
.map(line => line.trim())
.filter(line => !line.includes('\r'))
.map(line => line.split(' ').map(parseFloat))


for(let i = 0; i < casos.length; i++){
     let sequenciaSomas = []
     let soma = 0

     if (casos[i][0] <= 0 || casos[i][1] <= 0) {
          break;    
     } else {
          let M = Math.max(casos[i][0], casos[i][1]);
          let N = Math.min(casos[i][0], casos[i][1]);

          for(let j = N; j <= M; j++){
               sequenciaSomas.push(j)
               soma += j;
           }
           
         console.log(`${sequenciaSomas.join(" ")} Sum=${soma}`);
     
     }

  }