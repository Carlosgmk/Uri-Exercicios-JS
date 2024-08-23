const input = require('fs').readFileSync('stdin', 'utf8');
const X = input.split('\n').map(Number);

let grupo = []

for(let i = 0; i <= X.length;i++){
     let N = X[i]

     if(N === 0){
          break
      }

     for(let n = 1; n <= N; n++){
          grupo.push(n)
     }

    
    
     console.log(...grupo)
     grupo = []

      
}