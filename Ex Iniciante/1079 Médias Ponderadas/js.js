const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let N = parseInt(lines[0]);
let valores = [];
let fatores = [2, 3, 5];

// Itera sobre cada linha, começando do índice 1 para ignorar a primeira linha
for (let i = 1; i <= N; i++) {

    // Ignora a primeira linha que indica a quantidade de casos de teste
    let linha = lines[i];
    let valoresLinha = linha.split(' ').map(parseFloat);
    let resultadoParcial = 0;

    // Calcula a média ponderada dos valores da linha
    for (let j = 0; j < valoresLinha.length; j++) {
        resultadoParcial += valoresLinha[j] * fatores[j];
    }

    // Adiciona o resultado parcial ao array de resultados
     valores.push(resultadoParcial / fatores.reduce((acc, val) => acc + val, 0));
}

// Imprime os resultados
for (let i = 0; i < valores.length; i++) {
    console.log(valores[i].toFixed(1));
}


