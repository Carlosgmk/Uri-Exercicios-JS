const lines = prompt('O arquivo de entrada contém 4 valores inteiros.').split(' ')
let [A, B, C, D] = lines

let diferenca = A * B - C * D

console.log(`DIFERENCA = ${diferenca}`)