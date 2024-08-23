const input = require('fs').readFileSync('stdin', 'utf-8');
const lines = input.trim().split('\n');

const categoria = lines[0];
const alimentacao = lines[1];
const habitat = lines[2];

if (categoria === 'vertebrado') {
    if (alimentacao === 'ave') {
        if (habitat === 'carnivoro') {
            console.log('aguia');
        } else if (habitat === 'onivoro') {
            console.log('pomba');
        }
    } else if (alimentacao === 'mamifero') {
        if (habitat === 'onivoro') {
            console.log('homem');
        } else if (habitat === 'herbivoro') {
            console.log('vaca');
        }
    }
} else if (categoria === 'invertebrado') {
    if (alimentacao === 'inseto') {
        if (habitat === 'hematofago') {
            console.log('pulga');
        } else if (habitat === 'herbivoro') {
            console.log('lagarta');
        }
    } else if (alimentacao === 'anelideo') {
        if (habitat === 'hematofago') {
            console.log('sanguessuga');
        } else if (habitat === 'onivoro') {
            console.log('minhoca');
        }
    }
}
