const input = require('fs').readFileSync('stdin', 'utf8');
let lines = parseFloat(input)



  if(lines < 0 || lines > 100) {
      console.log('Fora de intervalo')

  } else if(lines <= 25.00){
     console.log('Intervalo [0,25]')

    } else if (lines <= 50.00){
    console.log('Intervalo (25,50]')
      }    
          else if(lines<= 75.00){
           console.log('Intervalo  (50,75]')
       }
        else{
          console.log('Intervalo (75,100]')
        }