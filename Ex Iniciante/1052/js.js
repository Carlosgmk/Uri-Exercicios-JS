const input = require('fs').readFileSync('stdin', 'utf8')
let Numeromes = input

let mes = ['January', 'February',  'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let Mes = mes[Numeromes - 1]
console.log(Mes)