const lines = prompt('digite os valores de entrada').split(' ')
let [A, B]= lines.map(parseFloat)

let MEDIA = (A * 3.5 + B * 7.5) / 11;

  if(MEDIA >=11 || MEDIA < 0){
     console.log('Digite Novamente as notas')
  } else{
     console.log(`MEDIA = ${MEDIA.toFixed(5)}`)
  }

