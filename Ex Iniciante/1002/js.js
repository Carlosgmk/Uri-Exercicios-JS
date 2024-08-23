const lines = prompt('digite os valores de entrada').split(' ');
let n = 3.14159
let raio = Number(lines[0])
let area = n * (raio*raio)
console.log(`A=${area.toFixed(4)}`)