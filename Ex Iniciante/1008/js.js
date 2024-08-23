const lines = prompt('Insira  2 números inteiros e 1 número com duas casas decimais').split(' ')
let [horas, horastrabalhadas, valorhora] = lines
let valor = horastrabalhadas * valorhora
console.log(`NUMBER = ${horas}\nSALARY = U$ ${valor.toFixed(2)}`)
