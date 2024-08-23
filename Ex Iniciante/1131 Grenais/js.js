const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const casos = lines
    .filter(line => line.trim() !== '')
    .map(line => line.trim())
    .filter(line => !line.includes('\r'))
    .map(line => line.split(' ').map(Number));

let inter = 0;
let gremio = 0;
let empates = 0;
let grenais = 0;
let continuar = true;

while (continuar) {
    for (let i = 0; i < casos.length; i++) {
        let xInter = casos[i][0];
        let xGremio = casos[i][1];
 
        if (xInter > xGremio) {
            inter++;
        } else if (xInter < xGremio) {
            gremio++;
        } else if(xInter === xGremio) {
            empates++;
        }
        if(casos[i].length === 2){
          grenais++;
        } else {
          console.log('Novo grenal (1-sim 2-nao)');
        }

        if (i === casos.length - 1 && casos[i].length === 1 && casos[i][0] === 2) {
               console.log(`${grenais} grenais`);
               console.log(`Inter:${inter}`);
               console.log(`Gremio:${gremio}`);
               console.log(`Empates:${empates}`);
       
               if (inter > gremio) {
                   console.log("Inter venceu mais");
               } else if (gremio > inter) {
                   console.log("Gremio venceu mais");
               } else {
                   console.log("Empate");
               }
               continuar = false;
           } 
      }
    }  

