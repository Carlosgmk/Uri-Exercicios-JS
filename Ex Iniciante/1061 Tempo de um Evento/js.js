const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.trim().split('\n');


function timeToSeconds(time) {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}


const diaInicio = parseInt(lines[0].split(' ')[1]);
const horaInicio = timeToSeconds(lines[1]);
const diaFim = parseInt(lines[2].split(' ')[1]);
const horaFim = timeToSeconds(lines[3]);


let diferencaSegundos = (diaFim - diaInicio) * 24 * 3600 + (horaFim - horaInicio);


const dias = Math.floor(diferencaSegundos / (24 * 3600));
diferencaSegundos %= 24 * 3600;
const horas = Math.floor(diferencaSegundos / 3600);
diferencaSegundos %= 3600;
const minutos = Math.floor(diferencaSegundos / 60);
const segundos = diferencaSegundos % 60;


console.log(`${dias} dia(s)\n${horas} hora(s)\n${minutos} minuto(s)\n${segundos} segundo(s)`);
