const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ');

let lanches = [
    { cod: 1, lanche: 'Cachorro Quente', preco: 4},
    { cod: 2, lanche: 'X-Salada', preco: 4.50},
    { cod: 3, lanche: 'X-Bacon', preco: 5},
    { cod: 4, lanche: 'Torrada simples', preco: 2},
    { cod: 5, lanche: 'Refrigerante', preco: 1.50}
]
let codigo = parseInt(lines[0]) - 1
let vezes = parseInt(lines[1])
let somaLanche = lanches[codigo].preco
let total = somaLanche * vezes
console.log(`Total: R$ ${total.toFixed(2)}`)