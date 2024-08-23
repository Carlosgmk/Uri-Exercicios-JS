var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const casos = lines
.filter(line => line.trim() !== '')
.map(line => line.trim())
.filter(line => !line.includes('\r'))
.map(line => line.split(' ').map(Number));

 for(let i = 0; i <= casos.length; i++){
     let X = casos[i][0]
     let Y =casos[i][1]

     if(X > 0 && Y > 0){
          console.log('primeiro')
     } else if(X < 0 && Y > 0){
         console.log('segundo')
     } else if(X < 0 && Y < 0){
          console.log('terceiro')
     } else if(X  > 0 && Y < 0) {
          console.log('quarto')
     } else if(X === 0 || Y === 0){
          break
     }
 }