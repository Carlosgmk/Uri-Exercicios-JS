const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let continuar = true;

while (continuar) {
    let soma = 0;
    let contador = 0;

    for (let i = 0; i < 2; i++) {
        let nota = parseFloat(lines.shift());

        while (nota < 0 || nota > 10) {
            console.log('nota invalida');
            nota = parseFloat(lines.shift());
        }

        soma += nota;
        contador++;
    }

    let media = soma / contador;
    console.log(`media = ${media.toFixed(2)}`);

    console.log('novo calculo (1-sim 2-nao)');
    let x = parseInt(lines.shift());

    while (x !== 1 && x !== 2) {
        console.log('novo calculo (1-sim 2-nao)');
        x = parseInt(lines.shift());
    }

    if (x === 2) {
        continuar = false;
    }
}
