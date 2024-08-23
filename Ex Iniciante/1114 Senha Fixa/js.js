const input = require('fs').readFileSync('stdin', 'utf8')
let lines = input.trim().split('\n')


let senhaCorreta = 2002

const casos = lines
.filter(line => line.trim() !== '')
.map(line => line.trim())
.filter(line => !line.includes('\r'))
.map(line => line.split(' ').map(Number));


for(let i = 0; i <= casos.length; i++){
    
     let caso = casos[i]

       if(caso != senhaCorreta){
          console.log('Senha Invalida')
       } else{
          console.log('Acesso Permitido')
          break
       }
        
 }
     
