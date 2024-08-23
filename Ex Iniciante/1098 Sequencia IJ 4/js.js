for (let i = 0, j = 1, valor = 0, temp = 0, temp2 = 0; i < 2; j++) {
    if (temp2 == 0) {
        console.log(`I=${i.toFixed(0)} J=${j.toFixed(0)}`);
    } else {
        console.log(`I=${i.toFixed(1)} J=${j.toFixed(1)}`);
    }
    temp++;

    if (temp === 3) {
        i += 0.2;
        valor += 0.2;
        j = valor;
        temp = 0;
        temp2++;
    }
    if (temp2 === 5) {
        temp2 = 0;
    }
}

