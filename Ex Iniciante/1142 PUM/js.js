const input = require('fs').readFileSync('stdin', 'utf8');
let N = parseInt(input)

let jump = 1
let pum = []


     for(let o = 0; o < N; o++){
          let group = []

          for(let i = 0; i < 3; i++){
               group.push(jump) 
               jump++
          }
          group.push('PUM')
          pum.push(group)
          jump++  
     }

     pum.forEach(group => {
          console.log(...group)
     })
  
  
   


