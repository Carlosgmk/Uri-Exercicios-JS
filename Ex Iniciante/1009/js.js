const lines = prompt('nome do vendedor e 2 valores de dupla precisão').split(' ')
let [nome, salarioF, totalVendas] = lines.map((valor, index) => index === 0 ? valor : Number(valor))
let comissao = (totalVendas * 15) / 100
let salario = salarioF + comissao
console.log(`TOTAL = R$ ${salario.toFixed(2)}`)