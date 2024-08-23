const input = require('fs').readFileSync('stdin', 'utf8')
let salario = parseFloat(input);

let percentual
let novoSalario
let reajusteG

if(salario >= 0 && salario <= 400){
  percentual = 15
  reajusteG = (percentual/100) * salario
  novoSalario =  salario + reajusteG
     } else if(salario > 400 && salario <= 800){
          percentual = 12
          reajusteG = (percentual/100) * salario
          novoSalario =  salario + reajusteG
          } else if(salario > 800 && salario <= 1200 ){
               percentual = 10
               reajusteG = (percentual/100) * salario
               novoSalario =  salario + reajusteG
               } else if(salario > 1200 && salario <= 2000){
                    percentual = 7
                    reajusteG = (percentual/100) * salario
                    novoSalario =  salario + reajusteG
                    } else{
                         percentual = 4
                         reajusteG = (percentual/100) * salario
                         novoSalario =  salario + reajusteG
                         }
     console.log(`Novo salario: ${novoSalario.toFixed(2)}\nReajuste ganho: ${reajusteG.toFixed(2)}\n Em percentual: ${percentual} %`)