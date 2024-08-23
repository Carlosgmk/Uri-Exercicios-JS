const input = require('fs').readFileSync('stdin','utf-8')
let lines = input.split(' ');

let Horainicial = parseFloat(lines[0])
let MinutoInicial = parseFloat(lines[1])
let horaF = parseFloat(lines[2])
let MinutoF = parseFloat(lines[3])

let duracaoH;
let duracaoM;

if (Horainicial < horaF || (Horainicial === horaF && MinutoInicial < MinutoF)) {
     duracaoH = horaF - Horainicial;
     duracaoM = MinutoF - MinutoInicial;
 
     if (duracaoM < 0) {
         duracaoM += 60;
         duracaoH--; 
     }
 } else {
     let tempoH = 24 - Horainicial + horaF;
     let tempoM = MinutoF - MinutoInicial;
 
     duracaoH = tempoH;
     duracaoM = tempoM;
 
     if (duracaoM < 0) {
         duracaoM += 60;
         duracaoH--;
     }
 }

console.log(`O JOGO DUROU ${duracaoH} HORA(S) E ${duracaoM} MINUTO(S)`)