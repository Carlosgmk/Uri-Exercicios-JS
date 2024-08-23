const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split(' ').map(Number);

 const [X, Y] = lines


//  faz com que o loop va de 3 em 3
 for(let start = 1; start <= Y; start += X){
    let group = []

    for(let num = start; num < start + X && num <= Y; num++){
     group.push(num)
    }

    console.log(group.join(' '));
 }

