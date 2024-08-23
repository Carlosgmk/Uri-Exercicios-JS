const input = require('fs').readFileSync('stdin','utf-8')
let salario = parseFloat(input);

let impostoDeRenda;
let percentual;
let livreDeImposto = 2000;
let possivelCobranca;

if (salario >= 0 && salario <= 2000) {
    console.log('Isento');
} else if (salario >= 2000.01 && salario <= 3000) {
    percentual = 8;
    possivelCobranca = salario - livreDeImposto;
    impostoDeRenda = (percentual / 100) * possivelCobranca;
    console.log(`R$ ${impostoDeRenda.toFixed(2)}`);

} else if (salario >= 3000.01 && salario <= 4500) {
    percentual = 18;
    possivelCobranca = salario - 3000;
    impostoDeRenda = (percentual / 100) * possivelCobranca + 1000 * 0.08;
    console.log(`R$ ${impostoDeRenda.toFixed(2)}`);
    
} else {
    percentual = 28;
    possivelCobranca = salario - 4500;
    impostoDeRenda =
        (percentual / 100) * possivelCobranca + 1500 * 0.18 + 1000 * 0.08;
    console.log(`R$ ${impostoDeRenda.toFixed(2)}`);
}

          