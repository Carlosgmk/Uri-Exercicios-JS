const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n');

const casos = lines
.filter(line => line.trim() !== '')
.map(line => line.trim())
.filter(line => !line.includes('\r'))
.map(line => line.split(' ').map(Number));


     
     for(let i = 0; i <= casos.length; i++){
          const M = casos[i][0]
          const N = casos[i][1]
          
        if(M > N){
           console.log('Decrescente')
        }else if(M < N){
          console.log('Crescente')
        } else {
          break
        }
     }
     

 