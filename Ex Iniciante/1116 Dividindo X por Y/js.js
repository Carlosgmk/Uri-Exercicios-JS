const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const sequencia = parseInt(lines[0]);

const casos = lines
.filter(line => line.trim() !== '')
.map(line => line.trim())
.filter(line => !line.includes('\r'))
.map(line => line.split(' ').map(Number));

for(let i = 1; i <= sequencia; i++){
     let X = casos[i][0]
     let Y = casos[i][1]

      let divs = X / Y
    
      if (X < 0 || Y === 0) {
        console.log('divisao impossivel')
      }

      else if(divs === 0){
         console.log(divs.toFixed(1))
      }
      else{
          console.log(divs.toFixed(1))
      }

     
}