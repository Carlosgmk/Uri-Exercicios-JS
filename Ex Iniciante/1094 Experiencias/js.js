const input = require('fs').readFileSync('stdin', 'utf-8')
let lines = input.split('\n')

let soma = 0
let N = parseInt(lines[0])
let C = 0
let R = 0
let S = 0



 const PrimeiroItem = (linha) => {
     linha = linha.trim()
     const primeiro_item = linha.split(' ')[0]
     return parseInt(primeiro_item)
}

 for (let i = 1; i <= N; i++){
     lines[i] = lines[i].replace(/\r$/, ''); // Remove o caractere de retorno de carro (\r) da linha
     let item = PrimeiroItem(lines[i])
     let itens = lines[i].split(' ')
     let valor = parseInt(itens[0])
     let letra = itens[1]
    
     soma += item

       if (letra === 'C'){
        C += valor
       
       } else if(letra === 'R'){
        R += valor
         
       } else if(letra === 'S'){
         S += valor
        
       }
    }
  
let porcentagemC = (C / soma) * 100
let porcentagemR = (R / soma) * 100
let porcentagemS = (S /  soma) * 100

console.log(`Total: ${soma} cobaias`)
console.log(`Total de coelhos: ${C}`)
console.log(`Total de ratos: ${R}`)
console.log(`Total de sapos: ${S}`)
console.log(`Percentual de coelhos: ${porcentagemC.toFixed(2)} %`)
console.log(`Percentual de ratos: ${porcentagemR.toFixed(2)} %`)
console.log(`Percentual de sapos: ${porcentagemS.toFixed(2)} %`)

