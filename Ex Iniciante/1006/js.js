const lines = prompt('digite os valores de entrada').split(' ')
let [A, B, C]= lines.map(parseFloat)

let MEDIA = (A * 2 + B * 3 + C * 5) / 10;

  if(MEDIA >=11 || MEDIA < 0){
     console.log('Digite Novamente as notas')
  } else{
     console.log(`MEDIA = ${MEDIA.toFixed(1)}`)
  }
