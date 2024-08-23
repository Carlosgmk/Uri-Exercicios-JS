  const input = require('fs').readFileSync('stdin', 'utf-8');
  const lines = input.trim().split('\n')
  const N = parseInt(lines[0]);

  let totalSomas = []

 const casos = lines
  .filter(line => line.trim() !== '') // Remover linhas vazias
  .map(line => line.trim()) // Remover espaços em branco no início e no fim
  .filter(line => !line.includes('\r')) // Remover linhas que contêm '\r'
  .map(line => line.split(' ').map(parseFloat)); // Dividir e converter em números

  for(let i = 1; i <= N; i++){
    let linha = casos[i]
    let X = linha[0]
    let Y = linha[1]
    
    if (X < Y) {
        [X, Y] = [Y, X];
      }
     
      let somaImpares = 0;

      for(let j = Y + 1; j < X; j++) {
         if(j % 2 !== 0){
            somaImpares += j
         }
      }
    
    totalSomas.push(somaImpares)
  }

  let total = totalSomas.join('\n')
    console.log(total)