let input = require('fs').readFileSync('stdin', 'utf8');
let idade = parseInt(input)

const dias = [365, 30, 1]
const unidades = ['ano(s)', 'mes(es)', 'dia(s)']
const resultado = []

for (let tempo of dias){
   resultado.push (parseInt(idade / tempo) )
   idade = idade % tempo
}

const resultadoFormatado = resultado.map((valor, index) => `${valor} ${unidades[index]}`);
console.log(resultadoFormatado.join('\n'));
