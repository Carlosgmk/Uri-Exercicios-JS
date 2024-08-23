const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.trim().split('\n');

const [N1, N2, N3, N4] = lines[0].split(' ').map(parseFloat);
const pesos = [2, 3, 4, 1];

// Calcula a média ponderada
const media = (N1 * pesos[0] + N2 * pesos[1] + N3 * pesos[2] + N4 * pesos[3]) / pesos.reduce((a, b) => a + b);

console.log(`Media: ${media.toFixed(1)}`);

if (lines.length > 1) {
    const notaExame = parseFloat(lines[1]);
    console.log("Aluno em exame.");
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`);

    const novaMedia = (media + notaExame) / 2;

    if (novaMedia >= 5.0) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }

    console.log(`Media final: ${novaMedia.toFixed(1)}`);
} else {
    if (media >= 7.0) {
        console.log("Aluno aprovado.");
    } else if (media < 5.0) {
        console.log("Aluno reprovado.");
    }
}