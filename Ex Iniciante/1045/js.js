const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ');

let crescente = lines.slice().sort(function(a, b) {
    return b - a;
});

let resultadoCrescente = crescente.map(parseFloat);
let [A, B, C] = resultadoCrescente;

if (A >= B + C) {
    console.log('NAO FORMA TRIANGULO');
} else if (A * A === B * B + C * C) {
    console.log('TRIANGULO RETANGULO');
} else if (A * A > B * B + C * C) {
    console.log('TRIANGULO OBTUSANGULO');
} else if (A * A < B * B + C * C) {
    console.log('TRIANGULO ACUTANGULO');
}

if (A === B && B === C) {
    console.log('TRIANGULO EQUILATERO');
} else if (A === B || A === C || B === C) {
    console.log('TRIANGULO ISOSCELES');
}                      
                                   
                                   //Equilatero errado o certo é TRIANGULO OBTUSANGULO
                                   //EQUILATERO errado C  ACUTANGULO

                                   /*
                                   se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
                                   se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
                                   se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
                                   se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
                                   se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
                                   se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
                                   */
                         